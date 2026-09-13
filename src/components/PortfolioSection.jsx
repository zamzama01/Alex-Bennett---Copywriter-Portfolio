import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData.js';
import { ProjectModal } from './ProjectModal.jsx';

export const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative bg-[#CD8A4A] text-[#0E0E0E] py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#0E0E0E] tracking-tight leading-tight mb-4">
            A few things I’m proud of
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#0E0E0E]/90 font-normal">
            Proof that the pen really is mightier than the algorithm.
          </p>
        </motion.div>

        {/* 3 Distinct Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-black/5 backdrop-blur-xs border border-black/10 hover:border-black/25 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#0E0E0E] mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#0E0E0E]/85 font-normal leading-relaxed mb-8">
                  {project.metric}
                </p>
              </div>

              <div className="pt-2">
                <motion.button
                  id={`view-project-btn-${project.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0E0E0E] text-[#F7F4EB] text-sm font-semibold tracking-tight shadow-md hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer"
                >
                  <span>View project</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
