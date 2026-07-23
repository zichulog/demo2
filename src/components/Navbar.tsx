import React, { useState, useEffect } from 'react';
import { FileText, Bot, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAiAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-[#f7f9fb]/90 border-b border-[#c5c6ce]/30 shadow-sm py-3' 
        : 'bg-[#f7f9fb]/80 border-b border-[#c5c6ce]/20 py-5'
    }`}>
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-12">
        {/* Brand Logo */}
        <a href="#" className="text-2xl md:text-3xl font-black text-[#041632] tracking-tighter flex items-center gap-1 group">
          <span>{PERSONAL_INFO.englishName}.</span>
          <span className="w-2 h-2 rounded-full bg-[#ba1a1a] group-hover:scale-150 transition-transform"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label-md text-[#44474d] hover:text-[#ba1a1a] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ba1a1a] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-[#c5c6ce]/50"></div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAiAssistant}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1b2b48]/10 text-[#041632] hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] rounded-full text-sm font-bold transition-all border border-[#041632]/10"
              title="서달미 AI 채용 Q&A"
            >
              <Bot className="w-4 h-4 text-[#ba1a1a] animate-pulse" />
              <span>AI Q&A</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#041632] text-white font-label-md rounded-full hover:bg-[#041632]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAiAssistant}
            className="p-2 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-full"
            title="AI Q&A"
          >
            <Bot className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#041632] hover:bg-[#eceef0] rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f7f9fb] border-b border-[#c5c6ce]/30 px-gutter py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#041632] hover:text-[#ba1a1a] py-2 border-b border-[#eceef0] flex justify-between items-center"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#75777e]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#1b2b48]/10 text-[#041632] rounded-xl font-bold text-sm"
            >
              <Bot className="w-4 h-4 text-[#ba1a1a]" />
              <span>AI 채용 Q&A 질문하기</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#041632] text-white rounded-xl font-bold text-sm shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>이력서 (Resume) 보기</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
