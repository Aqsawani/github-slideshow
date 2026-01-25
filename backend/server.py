from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend API setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = "aqsakhursheed135@gmail.com"

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormRequest(BaseModel):
    name: str
    email: EmailStr
    whatsapp: str
    company: Optional[str] = None
    message: str

class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    whatsapp: str
    company: Optional[str] = None
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact")
async def submit_contact_form(request: ContactFormRequest):
    try:
        # Create submission object
        submission = ContactSubmission(
            name=request.name,
            email=request.email,
            whatsapp=request.whatsapp,
            company=request.company,
            message=request.message
        )
        
        # Store in MongoDB
        doc = submission.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_submissions.insert_one(doc)
        
        # Send email notification via Resend
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00A3A8; border-bottom: 2px solid #00A3A8; padding-bottom: 10px;">
                New Contact Form Submission - OZlume
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 10px; background: #fff;">{request.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; background: #fff;">{request.email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">WhatsApp:</td>
                    <td style="padding: 10px; background: #fff;">{request.whatsapp}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Company:</td>
                    <td style="padding: 10px; background: #fff;">{request.company or 'Not provided'}</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00A3A8;">
                <h3 style="margin: 0 0 10px 0; color: #333;">Message:</h3>
                <p style="margin: 0; color: #555; line-height: 1.6;">{request.message}</p>
            </div>
            
            <p style="margin-top: 30px; color: #888; font-size: 12px;">
                This email was sent from the OZlume website contact form.
            </p>
        </div>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Contact Form Submission from {request.name}",
            "html": html_content
        }
        
        # Send email asynchronously
        try:
            await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Contact form email sent for {request.email}")
        except Exception as email_error:
            logger.error(f"Failed to send email notification: {str(email_error)}")
            # Don't fail the request if email fails - data is still saved
        
        return {
            "status": "success",
            "message": "Thank you for your message! We'll get back to you within 24 hours."
        }
        
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form. Please try again.")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()