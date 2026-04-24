import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Calendar, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
const timelineData = [
    {
        type: 'education',
        title: "Application Development, Web Development & Database Management",
        subtitle: "NIIT",
        date: "2023 – Present", //
        details: [
            "Hands-on training building cross-platform mobile apps and responsive web applications.",
            "Expertise in managing relational and NoSQL databases."
        ]
    },
    {
        type: 'experience',
        title: "Full-Stack Software Engineer(Intern)", //
        subtitle: "Tresbontech LTD", //
        date: "2026 – Present",
        details: [
            "Spearheading UI/UX refactoring for web platforms, including navigation restructuring and minimalist header redesigns.", //
            "Implementing scalable front-end solutions using modern frameworks to enhance user experience."
        ]
    }
];
export default function IndustryExperience() {
    return (_jsxs("div", { className: "w-full px-4 py-12", children: [_jsxs("div", { className: "flex flex-col gap-4 mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-slate-50 tracking-tight", children: "Education & Experience" }), _jsx("div", { className: "h-1.5 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" })] }), _jsx("div", { className: "relative border-l-2 border-slate-800 ml-3 space-y-10", children: timelineData.map((item, index) => (_jsxs("div", { className: "relative pl-8 group", children: [_jsx("div", { className: "absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.8)] group-hover:scale-125 transition-transform duration-200" }), _jsxs("div", { className: "glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [item.type === 'education' ? (_jsx(GraduationCap, { size: 18, className: "text-emerald-400" })) : (_jsx(Briefcase, { size: 18, className: "text-emerald-400" })), _jsx("h3", { className: "text-xl font-bold text-slate-50 group-hover:text-emerald-400 transition-colors", children: item.title })] }), _jsx("p", { className: "text-emerald-400 font-medium", children: item.subtitle })] }), _jsxs("div", { className: "flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs font-medium border border-slate-700/50 h-fit", children: [_jsx(Calendar, { size: 14 }), _jsx("span", { children: item.date })] })] }), _jsx("ul", { className: "space-y-3", children: item.details.map((detail, idx) => (_jsxs("li", { className: "flex items-start gap-3 text-slate-400 text-sm leading-relaxed", children: [_jsx(ChevronRight, { size: 14, className: "text-emerald-500 mt-1 shrink-0" }), _jsx("span", { children: detail })] }, idx))) })] })] }, index))) })] }));
}
