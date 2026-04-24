import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Code2, Server, Layout, Wrench } from 'lucide-react';
const skillCategories = [
    {
        name: 'Frontend',
        icon: _jsx(Code2, { size: 20 }),
        skills: ['Angular', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
        name: 'Backend',
        icon: _jsx(Server, { size: 20 }),
        skills: ['Node.js', 'Express', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Authentication (JWT)']
    },
    {
        name: 'Tools & Hosting',
        icon: _jsx(Wrench, { size: 20 }),
        skills: ['Git & GitHub', 'VPS Hosting (Hostinger)', 'Vercel', 'Postman', 'Vite', 'Docker']
    },
    {
        name: 'Design & UI/UX',
        icon: _jsx(Layout, { size: 20 }),
        skills: ['Figma', 'Responsive Design', 'Accessibility', 'Clean Code Principles', 'UI Optimization']
    }
];
export default function Skills() {
    return (_jsxs("div", { className: "space-y-12", children: [_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-50", children: "Technical Skills" }), _jsx("div", { className: "h-1 w-20 bg-emerald-500 rounded-full" })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6", children: skillCategories.map((category) => (_jsxs("div", { className: "glass-panel p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("span", { className: "p-2 rounded-lg bg-emerald-500/10 text-emerald-300", children: category.icon }), _jsx("h3", { className: "text-lg font-semibold text-slate-50", children: category.name })] }), _jsx("ul", { className: "space-y-3", children: category.skills.map((skill) => (_jsxs("li", { className: "flex items-center gap-2 text-slate-300 text-sm", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400/70" }), skill] }, skill))) })] }, category.name))) })] }));
}
