import React from 'react';
import { User } from 'lucide-react';
import { userData } from '../data';

const About = () => (
  <section id="about" className="bg-white dark:bg-gray-950 py-16 px-6">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-1/3 group">
        <div className="relative aspect-square max-w-[280px] mx-auto overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-700">
          <img
            src={userData.profileImage}
            alt={userData.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </div>
      <div className="lg:w-2/3">
        <div className="flex items-center space-x-2 mb-4">
          <User className="text-primary-600" size={18} />
          <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-600">About Me</h3>
        </div>
        <h2 className="text-3xl font-black mb-4 leading-tight">Crafting Excellence through MCA.</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium whitespace-pre-line">
          {userData.aboutMe}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h4 className="font-bold text-sm mb-0.5">MCA Student</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Professional Path</p>
          </div>
          <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h4 className="font-bold text-sm mb-0.5">Full-Stack Goal</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Technical Vision</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
