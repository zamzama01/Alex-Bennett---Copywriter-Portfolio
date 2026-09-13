import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0E0E]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <button
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-left focus:outline-none cursor-pointer"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F4EB] transition-colors group-hover:text-[#CD8A4A]">
              Alex Bennett
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#CD8A4A] font-semibold">
              Copywriter
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              id="nav-link-story"
              onClick={() => scrollToSection('story')}
              className="text-sm font-medium text-[#F7F4EB]/80 hover:text-white transition-colors cursor-pointer"
            >
              My Story
            </button>
            <button
              id="nav-link-services"
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-[#F7F4EB]/80 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              id="nav-link-portfolio"
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium text-[#F7F4EB]/80 hover:text-white transition-colors cursor-pointer"
            >
              Selected Work
            </button>
            <button
              id="nav-link-testimonials"
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-[#F7F4EB]/80 hover:text-white transition-colors cursor-pointer"
            >
              Testimonials
            </button>

            <button
              id="nav-btn-contact"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#CD8A4A] text-white hover:bg-[#B97637] transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-contact-quick-btn"
              onClick={() => scrollToSection('contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#CD8A4A] text-white"
            >
              Let's Talk
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F7F4EB] hover:text-[#CD8A4A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-30 bg-[#0E0E0E]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 md:hidden shadow-2xl flex flex-col gap-6"
          >
            <button
              id="mobile-nav-story"
              onClick={() => scrollToSection('story')}
              className="text-left text-lg font-medium text-[#F7F4EB] hover:text-[#CD8A4A]"
            >
              My Story
            </button>
            <button
              id="mobile-nav-services"
              onClick={() => scrollToSection('services')}
              className="text-left text-lg font-medium text-[#F7F4EB] hover:text-[#CD8A4A]"
            >
              Services
            </button>
            <button
              id="mobile-nav-portfolio"
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-lg font-medium text-[#F7F4EB] hover:text-[#CD8A4A]"
            >
              Selected Work
            </button>
            <button
              id="mobile-nav-testimonials"
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-lg font-medium text-[#F7F4EB] hover:text-[#CD8A4A]"
            >
              Testimonials
            </button>
            <button
              id="mobile-nav-contact"
              onClick={() => scrollToSection('contact')}
              className="w-full text-center py-3 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#CD8A4A] text-white"
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
