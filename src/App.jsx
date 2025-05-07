import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeContextProvider } from './ThemeContext';
import Layout from './component/Layout';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowitWork';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';
// import ChatWidget from './components/ChatWidget';
import SEO from './component/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeContextProvider>
        <SEO 
          title="SoftSell - Turn Unused Software into Cash"
          description="Sell your leftover licenses in minutes with SoftSell. Fast, secure, and hassle-free process."
        />
        <Layout>
          <Hero id="home" />
          <HowItWorks id="how-it-works" />
          <WhyChooseUs id="features" />
          <Testimonials id="testimonials" />
          <ContactForm id="contact" />
          {/* <ChatWidget /> */}
        </Layout>
      </ThemeContextProvider>
    </HelmetProvider>
  );
}

export default App;