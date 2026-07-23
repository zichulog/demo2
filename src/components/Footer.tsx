import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronUp, Mail, FileText, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-[#041632] text-white border-t border-white/10">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <span className="text-3xl font-black text-[#ba1a1a] block mb-3 tracking-tighter">
            {PERSONAL_INFO.englishName}.
          </span>
          <p className="text-xs md:text-sm text-[#8393b5] leading-relaxed">
            © 2024 {PERSONAL_INFO.name}. Professional Service Planner.<br />
            Built for clarity, data-driven decisions, and user impact.
          </p>
        </div>

        {/* Footer Navigation & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-6 text-xs md:text-sm font-bold tracking-wider">
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#8393b5] hover:text-[#ba1a1a] transition-colors uppercase flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenResume}
              className="text-[#8393b5] hover:text-[#ba1a1a] transition-colors uppercase flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#8393b5] hover:text-[#ba1a1a] transition-colors uppercase flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#ba1a1a] hover:text-[#ba1a1a] transition-all shadow-xs"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
