import React from 'react';
import { Cpu, Code2, Server, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Code2 size={20} />,
    skills: ['Angular', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: <Server size={20} />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Authentication (JWT)']
  },
  {
    name: 'Tools & Hosting',
    icon: <Wrench size={20} />,
    skills: ['Git & GitHub', 'VPS Hosting (Hostinger)', 'Vercel', 'Postman', 'Vite', 'Docker']
  },
  {
    name: 'Design & UI/UX',
    icon: <Layout size={20} />,
    skills: ['Figma', 'Responsive Design', 'Accessibility', 'Clean Code Principles', 'UI Optimization']
  }
];

export default function Skills() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-slate-50">Technical Skills</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="glass-panel p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-300">
                {category.icon}
              </span>
              <h3 className="text-lg font-semibold text-slate-50">{category.name}</h3>
            </div>
            
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}