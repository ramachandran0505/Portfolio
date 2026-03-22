import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, ChevronUp, Phone } from 'lucide-react';
import { userData } from '../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Simplified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black italic mb-4 transition-all duration-500 hover:tracking-widest cursor-default select-none">
              {userData.name}.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 text-xs">
              Designing user-centric digital experiences with a focus on code quality.
            </p>
            <div className="flex gap-3">
              {userData.contact.socialLinks.map((link, idx) => {
                const iconMap = {
                  Github: <Github size={16} />,
                  Linkedin: <Linkedin size={16} />,
                  Twitter: <Twitter size={16} />,
                  Instagram: <Instagram size={16} />
                };
                const Icon = iconMap[link.icon] || <Mail size={16} />;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    className="p-2 bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-white hover:bg-primary-600 rounded-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 shadow-sm"
                  >
                    {Icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="hidden lg:block pl-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-6 px-1 border-l-2 border-primary-500 leading-none">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors font-bold tracking-tight text-sm duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-6 px-1 border-l-2 border-primary-500 leading-none">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-xs">
                <Mail className="shrink-0 text-primary-500" size={16} />
                <span className="font-medium text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap leading-none tracking-tight">{userData.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-xs">
                <Phone className="shrink-0 text-primary-500" size={16} />
                <span className="font-medium">{userData.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Ready to connect */}
          <div className="flex flex-col justify-end lg:items-end">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-xs font-bold transition-all hover:scale-[1.05] shadow-lg shadow-primary-600/20 active:scale-[0.98] w-fit"
            >
              Start Project
            </a>
          </div>
        </div>

        {/* Improved Bottom line - Small and clean */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span>&copy; {new Date().getFullYear()} {userData.name}</span>
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
            <span>MCA Portfolio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 hover:text-primary-600 transition-colors group"
          >
            <span>Top</span>
            <div className="p-1 px-2 border border-gray-100 dark:border-gray-800 dark:bg-gray-800 rounded-md group-hover:-translate-y-0.5 transition-transform">
              <ChevronUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
