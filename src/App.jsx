import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { StorySection } from './components/StorySection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { PortfolioSection } from './components/PortfolioSection.jsx';
import { TestimonialsSection } from './components/TestimonialsSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F7F4EB] flex flex-col selection:bg-[#CD8A4A] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. My Story Section */}
        <StorySection />

        {/* 3. Services Section ("What I can do for you") */}
        <ServicesSection />

        {/* 4. Portfolio Section ("A few things I'm proud of") */}
        <PortfolioSection />

        {/* 5. Testimonials Section ("What clients say") */}
        <TestimonialsSection />
      </main>

      {/* 6. Contact Form & Footer Section */}
      <ContactSection />
    </div>
  );
}
