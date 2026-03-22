import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { userData } from '../data';

const Projects = () => (
  <section id="projects" className="py-12 px-6 max-w-6xl mx-auto overflow-hidden bg-white dark:bg-gray-950">
    <div className="flex justify-between items-center mb-6 pb-2">
      <div>
        <h2 className="text-lg font-black tracking-widest uppercase text-gray-900 dark:text-white flex items-center gap-3">
          Projects <span className="w-1 h-1 bg-primary-600 rounded-full animate-ping"></span>
        </h2>
      </div>
      <a href="/" className="text-[9px] font-black uppercase text-gray-400 hover:text-primary-600 transition-colors tracking-[0.2em] flex items-center gap-1">
        EXPLORE <ArrowRight size={8} />
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {userData.projects.map((project, idx) => (
        <article key={idx} className="group/item flex flex-col bg-white dark:bg-gray-900/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 dark:border-gray-800 relative">
          
          {/* Entire Image is now a Link */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-800 border-b border-gray-50 dark:border-gray-800">
             <div className="absolute inset-0 bg-primary-600/30 opacity-0 group-hover/item:opacity-100 transition-all duration-300 flex items-center justify-center z-10 gap-2 backdrop-blur-[1px]">
               <div className="bg-white/90 p-1.5 rounded-lg backdrop-blur-sm shadow-xl">
                 <ExternalLink size={12} className="text-primary-600" />
               </div>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000" />
            
            <div className="absolute top-2 left-2 z-20">
              <span className="px-1 py-0.5 bg-black/60 backdrop-blur-md text-white rounded font-black text-[6px] border border-white/20 uppercase">P{idx + 1}</span>
            </div>
          </a>

          <div className="p-2.5 flex flex-grow flex-col">
            {/* Title is now a Link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <h4 className="text-[9px] font-black mb-1 uppercase tracking-tight text-gray-900 dark:text-gray-100 group-hover/item:text-primary-600 transition-colors">
                {project.title}
              </h4>
            </a>
            
            <p className="text-[7.5px] text-gray-500 dark:text-gray-400 font-medium leading-[1.4] mb-3">
              {project.description}
            </p>

            {/* Single Line Links strengthened */}
            <div className="mt-auto pt-2.5 flex items-center justify-between border-t border-gray-50 dark:border-gray-800 gap-1">
               <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[7.5px] font-black uppercase tracking-widest text-primary-600 flex items-center gap-1 hover:brightness-110 transition-all whitespace-nowrap shrink-0"
               >
                 Live <ExternalLink size={9} />
               </a>
               <a 
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[7.5px] font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
               >
                 Git <Github size={9} />
               </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
