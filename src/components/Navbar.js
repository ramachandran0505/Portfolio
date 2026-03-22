import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { userData } from '../data';

const Navbar = ({ toggleDarkMode, isDarkMode, onViewResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-lg font-black uppercase tracking-widest text-primary-600">
          {userData.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest hover:text-primary-600 transition-colors">
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onViewResume}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20"
          >
            Resume <FileText size={12} />
          </button>

          <button 
            onClick={toggleDarkMode}
            className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-all hover:scale-110"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={onViewResume}
            className="p-1.5 bg-primary-600 text-white rounded-lg shadow-md"
          >
            <FileText size={16} />
          </button>
          <button onClick={toggleDarkMode} className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 p-6 absolute top-full left-0 w-full animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onViewResume();
                setIsOpen(false);
              }}
              className="w-full py-3 bg-primary-600 text-white text-center rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary-600/20"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
