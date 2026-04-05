import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import FutureDesign from '../components/FutureDesign';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <FutureDesign />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
