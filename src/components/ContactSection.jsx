import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, CheckCircle2, AlertCircle, Send, ArrowUp } from 'lucide-react';
import contactBg from '../assets/images/contact_cafe_bg_1789275641325.jpg';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or project outline.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0E0E0E] text-[#F7F4EB] overflow-hidden">
      {/* Background with moody cafe atmosphere */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={contactBg}
          alt="Atmospheric cafe studio table"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/80 to-[#0E0E0E]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-28 lg:pt-36 pb-12">
        {/* Split Screen Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#F7F4EB] tracking-tight leading-[1.05]">
              <span className="block">Let’s create</span>
              <span className="block">something</span>
              <span className="block italic font-light">worth reading</span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#F7F4EB]/80 font-normal mt-6 sm:mt-8 max-w-md leading-relaxed">
              Want copy that sells without sounding salesy? Drop me a message and let’s talk.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 hidden sm:block">
              <p className="text-xs uppercase tracking-widest text-[#CD8A4A] font-semibold mb-2">
                Typical Turnaround
              </p>
              <p className="text-sm text-[#F7F4EB]/70">
                Responses delivered within 24 business hours. No spam, ever.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Floating Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl bg-[#F7F4EB] text-[#0E0E0E] p-7 sm:p-10 shadow-2xl border border-white/20">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#CD8A4A]/20 text-[#CD8A4A] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#0E0E0E] mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-sans text-base text-[#0E0E0E]/80 max-w-sm mx-auto mb-8 leading-relaxed">
                      Thanks for reaching out, <span className="font-semibold text-[#0E0E0E]">{formData.name}</span>. Alex will review your note and get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#0E0E0E] text-[#F7F4EB] text-sm font-semibold hover:bg-[#222] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0E]/80 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Your name or company"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#0E0E0E]/15 focus:border-[#CD8A4A] focus:ring-[#CD8A4A]'
                        } text-[#0E0E0E] placeholder:text-[#0E0E0E]/40 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0E]/80 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#0E0E0E]/15 focus:border-[#CD8A4A] focus:ring-[#CD8A4A]'
                        } text-[#0E0E0E] placeholder:text-[#0E0E0E]/40 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0E]/80 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Tell me a bit about your project or what you need written..."
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#0E0E0E]/15 focus:border-[#CD8A4A] focus:ring-[#CD8A4A]'
                        } text-[#0E0E0E] placeholder:text-[#0E0E0E]/40 focus:outline-none focus:ring-2 transition-all resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl bg-[#CD8A4A] hover:bg-[#B97637] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      {/* Microcopy underneath button */}
                      <p className="text-[11px] text-center text-[#0E0E0E]/60 mt-3">
                        Your secret won’t be shared. Never spam guaranteed.
                      </p>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

        {/* Bottom Horizontal Contact Bar (Email, Phone, Socials) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#F7F4EB]/80">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 sm:gap-12">
            <a
              id="footer-email-link"
              href="mailto:hello@reallygreatsite.com"
              className="flex items-center gap-2 hover:text-[#CD8A4A] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#CD8A4A]" />
              <span><strong className="text-white">Email</strong> hello@reallygreatsite.com</span>
            </a>

            <a
              id="footer-phone-link"
              href="tel:123-456-7890"
              className="flex items-center gap-2 hover:text-[#CD8A4A] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#CD8A4A]" />
              <span><strong className="text-white">Phone</strong> 123-456-7890</span>
            </a>

            <a
              id="footer-socials-link"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#CD8A4A] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#CD8A4A]" />
              <span><strong className="text-white">Socials</strong> @reallygreatsite</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#F7F4EB]/50">
              © {new Date().getFullYear()} Alex Bennett. All rights reserved.
            </span>
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
