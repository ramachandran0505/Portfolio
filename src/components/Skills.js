import React from 'react';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';
import { userData } from '../data';

const Skills = () => {
  const getIcon = (type) => {
    switch(type) {
      case 'Frontend': return <Code size={18} className="text-blue-500" />;
      case 'Backend': return <Database size={18} className="text-green-500" />;
      case 'Tools': return <Wrench size={18} className="text-orange-500" />;
      default: return <Sparkles size={18} className="text-primary-500" />;
    }
  };

  return (
    <section id="skills" className="bg-white dark:bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 inline-block rounded-full"> Expertise</h3>
          <h2 className="text-3xl font-black tracking-tight">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:scale-105 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 transition-all">
                {getIcon(skillGroup.name)}
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-tighter">{skillGroup.name}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-[10px] rounded-lg font-black uppercase tracking-widest text-gray-500 hover:bg-primary-600 hover:text-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
