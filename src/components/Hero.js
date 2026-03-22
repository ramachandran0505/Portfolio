import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { userData } from '../data';

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 bg-white dark:bg-gray-950">
    {/* Refined Background Elements */}
    <div className="absolute top-20 left-1/4 w-48 h-48 bg-primary-400/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl" />

    <div className="px-6 text-center max-w-4xl mx-auto">
      {/* Scaled Down Headlines */}
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-[1.1] text-gray-900 dark:text-white">
        Hi, I'm <span className="text-primary-600 dark:text-primary-500 relative">
          {userData.name}
          <span className="absolute bottom-1 left-0 w-full h-1 bg-primary-600/20 -z-10"></span>
        </span>
      </h1>

      <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 font-bold uppercase tracking-tight">
        {userData.title} & MCA Professional
      </h2>

      {/* Compact Intro */}
      <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium">
        {userData.shortIntro}
      </p>

      {/* Small Precision Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-primary-600/20 flex items-center gap-2">
          View My Work <ArrowRight size={14} />
        </a>
        <a href="#contact" className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
          Get in Touch
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-[8px] font-black tracking-[0.3em] uppercase mb-2">Explore</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </div>
  </section>
);

export default Hero;
