import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, TrendingUp, Sparkles, FileText } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E0E0E]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E0E0E] text-[#F7F4EB] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 z-10"
          >
            {/* Close Button */}
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#F7F4EB]/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#CD8A4A]/20 text-[#CD8A4A] border border-[#CD8A4A]/30">
                {project.clientType}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#F7F4EB] mb-3">
              {project.title}
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#CD8A4A] font-medium mb-6">
              {project.metric}
            </p>

            <div className="h-px w-full bg-white/10 mb-8" />

            {/* Narrative Overview */}
            <div className="space-y-6 text-[#F7F4EB]/80 leading-relaxed mb-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#CD8A4A]" />
                  The Background & Challenge
                </h4>
                <p className="text-sm sm:text-base font-normal">
                  {project.overview} {project.theChallenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#CD8A4A]" />
                  The Copywriting Strategy
                </h4>
                <p className="text-sm sm:text-base font-normal">
                  {project.theSolution}
                </p>
              </div>
            </div>

            {/* Before vs. After Copy Sample */}
            <div className="bg-[#181818] rounded-xl p-5 sm:p-6 border border-white/5 mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#CD8A4A] mb-4">
                Before & After Contrast
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30">
                  <span className="text-xs uppercase font-bold text-red-400 block mb-2">
                    Old Generic Copy
                  </span>
                  <p className="text-xs sm:text-sm text-red-200/80 italic font-serif">
                    {project.beforeCopy}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                  <span className="text-xs uppercase font-bold text-emerald-400 block mb-2">
                    Alex's Revision
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-200/90 font-serif font-medium">
                    {project.afterCopy}
                  </p>
                </div>
              </div>
            </div>

            {/* Measured Results */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#CD8A4A]" />
                Key Deliverables & Performance
              </h4>
              <ul className="space-y-2.5">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#F7F4EB]/90">
                    <CheckCircle2 className="w-5 h-5 text-[#CD8A4A] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer inside modal */}
            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#CD8A4A] hover:bg-[#B97637] text-white font-medium text-sm transition-all"
              >
                Close Project
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
