import React from 'react';
import { motion } from 'motion/react';
import deskImg from '../assets/images/writing_desk_coffee_1789275592508.jpg';

export const StorySection = () => {
  return (
    <section
      id="story"
      className="relative bg-[#F7F4EB] text-[#0E0E0E] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Story Header & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20"
        >
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#0E0E0E] tracking-tight leading-none">
              My story
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#0E0E0E]/85 font-normal leading-relaxed tracking-normal">
              After a decade spent word-wrangling for brands big and small, I turned my obsession with crisp sentences and sharp ideas into a freelance career. Today, I help businesses sound smarter, sell better, and stay memorable.
            </p>
          </div>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="my-16 sm:my-20 max-w-4xl mx-auto text-center px-4"
        >
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-[#0E0E0E] font-normal leading-snug tracking-tight">
            “Write with purpose, edit with precision, deliver with personality.”
          </blockquote>
        </motion.div>

        {/* Wide Panoramic Photographic Desk Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group border border-[#0E0E0E]/10"
        >
          <img
            src={deskImg}
            alt="Hands writing copy in notebook with coffee on sunny cafe table"
            className="w-full h-64 sm:h-96 md:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};
