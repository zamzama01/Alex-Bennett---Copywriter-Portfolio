import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import heroImg from '../assets/images/hero_alex_cafe_1789275570795.jpg';

export const HeroSection = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="hero-section"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#0E0E0E] overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#CD8A4A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#CD8A4A]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Subheading & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start"
          >
            {/* Sub-heading: 14px, uppercase, letter-spacing: 3px, color: #D4A017, margin-bottom: 24px */}
            <div className="mb-[24px]" style={{ marginBottom: '24px' }}>
              <p
                id="hero-sub-eyebrow"
                className="text-[14px] font-semibold uppercase tracking-[3px] text-[#D4A017]"
                style={{ fontSize: '14px', letterSpacing: '3px', color: '#D4A017' }}
              >
                Alex Bennett COPYWRITER
              </p>
            </div>

            {/* Main Heading: 40px on mobile (<768px), 72px on desktop, 700 weight, white, line-height 1.1 */}
            {/* Spacing requirement: 40px space between sub-heading and main heading is provided via mt-[16px] + mb-[24px] or direct gap */}
            <div className="mt-[16px] mb-5 sm:mb-6" style={{ marginTop: '16px' }}>
              <h1
                id="hero-main-heading"
                className="font-serif text-[40px] md:text-[72px] font-bold text-white tracking-tight leading-[1.1]"
                style={{ fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}
              >
                Hi, I'm Alex Bennett.
              </h1>
            </div>

            {/* Subheading description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#F7F4EB]/85 font-normal max-w-md leading-relaxed">
              Crafting clever copy that works harder than your morning coffee.
            </p>

            {/* 3. Action Button: 30px margin-top below the heading / content */}
            <div className="mt-[30px] flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ marginTop: '30px' }}>
              <motion.button
                id="hero-explore-services-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToServices}
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F7F4EB] text-[#0E0E0E] text-base font-semibold tracking-tight shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <span>Explore my services</span>
                <span className="ml-2.5 transform group-hover:translate-y-0.5 transition-transform duration-200">
                  <ArrowDown className="w-4 h-4 text-[#0E0E0E]" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl group">
              {/* Subtle warm frame glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#CD8A4A]/30 to-transparent opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#181818] shadow-2xl border border-white/10">
                <img
                  src={heroImg}
                  alt="Alex Bennett working at a warm coffee shop with laptop"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11] transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Soft warm vignette & gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 via-transparent to-transparent pointer-events-none" />

                {/* Subtle caption badge */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3.5 rounded-lg bg-[#0E0E0E]/75 backdrop-blur-md border border-white/10 text-xs text-[#F7F4EB]/90 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#CD8A4A] animate-pulse" />
                    Currently writing in Seattle, WA
                  </span>
                  <span className="text-[#CD8A4A] font-medium hidden sm:inline">Open for bookings</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
};
