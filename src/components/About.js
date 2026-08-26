import React from 'react';
import { User, GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { userData } from '../data';

const About = () => (
  <section id="about" className="bg-white dark:bg-gray-950 py-16 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Top Part: Profile & Intro */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
        <div className="lg:w-1/3 group shrink-0">
          <div className="relative aspect-square max-w-[260px] mx-auto overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-700">
            <img
              src={userData.profileImage}
              alt={userData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="flex items-center space-x-2 mb-3">
            <User className="text-primary-600" size={18} />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-600">About Me</h3>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
            Crafting Excellence through Innovation & Learning.
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium whitespace-pre-line">
            {userData.aboutMe}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h4 className="font-bold text-sm mb-0.5">MCA Candidate</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Professional Path</p>
            </div>
            <div className="p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h4 className="font-bold text-sm mb-0.5">Full-Stack Goal</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Technical Vision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Qualification Section */}
      <div className="pt-8 border-t border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <GraduationCap className="text-primary-600" size={18} />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-600">Academic Background</h3>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">Education Qualification</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.education?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900/60 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-xl group-hover:scale-105 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    <span className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-[10px] rounded-lg font-black uppercase tracking-wider">
                      {item.status}
                    </span>
                    {item.grade && (
                      <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] rounded-lg font-black uppercase tracking-wider flex items-center gap-1">
                        <Award size={11} />
                        {item.grade}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                  {item.degree}
                </h4>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                  <Building2 size={14} className="text-gray-400 shrink-0" />
                  <span>{item.institution}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Calendar size={12} className="text-primary-500" />
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
