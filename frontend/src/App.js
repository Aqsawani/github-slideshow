import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ServicesListPage from './pages/ServicesListPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import TopBanner from './components/TopBanner';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <CustomCursor />
      <TopBanner />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesListPage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;
