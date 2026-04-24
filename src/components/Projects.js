import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { ExternalLink, Code2, ChevronDown } from 'lucide-react';
// Images
import healthhub from "../assets/Healthhub.png";
import Buycom from "../assets/buycom.png";
import estateflow from "../assets/estateflow.png";
import ceasefiretech from "../assets/ceasefiretech.png";
import tresbontech from "../assets/tresbontech.png";
import tresbontechacademy from "../assets/tresbontechacademy.png";
import hogarHomes from "../assets/hogarHomes.png";
import leadTutors from "../assets/leadTutors.png";
const projects = [
    {
        title: "Cease Fire Tech",
        image: ceasefiretech,
        description: "A fire safety platform providing reliable, high-quality firefighting equipment and safety solutions through timely supply, professional installation, and continuous support to keep clients prepared, compliant, and safe.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://ceasefiretech.ng/",
    },
    {
        title: "Tresbontech Ltd",
        image: tresbontechacademy,
        description: "Tresbontech Academy offers personalised one-on-one online classes in coding, school subjects, exam preparation, and digital skills — for Nigerian students at home and in the diaspora.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://tresbontech.com/",
    },
    {
        title: "Tresbontech Academy",
        image: tresbontech,
        description: "Tresbontech Academy offers personalised one-on-one online classes in coding, school subjects, exam preparation, and digital skills — for Nigerian students at home and in the diaspora.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://tresbontechacademy.com/",
    },
    {
        title: "Hogar Homes",
        image: hogarHomes,
        description: "Hogar Homes provide strategic real estate solutions designed to help individuals and businesses build wealth, secure assets, and manage properties efficiently. Our services are tailored to meet the needs of both first-time investors and experienced property owners.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://holgar-homes-kappa.vercel.app/",
    },
    {
        title: "Lead Tutors Academy",
        image: leadTutors,
        description: "Experience personalized learning plans designed to help you crush your goals. From Grade 1 to University level, we have the perfect match for you.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://lead-tutors-academy-ten.vercel.app/",
    },
    {
        title: "HealthHub – Healthcare System",
        image: healthhub,
        description: "A modern and interactive platform for managing healthcare services, appointments, and patient information.",
        stack: ["React", "Spring Boot", "MongoDB", "CSS"],
        demoUrl: "https://health-care-systems-nine.vercel.app/",
    },
    {
        title: "Estate Flow",
        image: estateflow,
        description: "EstateFlow is a sleek, modern real-estate web application designed to help users browse, filter, and explore properties with a smooth and intuitive experience.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://real-estate-ashen-gamma.vercel.app/",
    },
    {
        title: "BuyCom",
        image: Buycom,
        description: "A modern eCommerce web application built with React, featuring product browsing, dynamic product pages, categories, cart system, responsive UI, and EmailJS-powered newsletter subscription.",
        stack: ["React", "JavaScript", "CSS", "Express.js"],
        demoUrl: "https://buycom-frontend.vercel.app/",
    }
];
export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(3);
    const showMoreProjects = () => {
        setVisibleCount(prev => Math.min(prev + 3, projects.length));
    };
    const showLessProjects = () => {
        setVisibleCount(prev => Math.max(prev - 3, 3));
    };
    return (_jsxs("div", { className: "space-y-12 w-full max-w-full", children: [_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-50", children: "Featured Projects" }), _jsx("div", { className: "h-1 w-20 bg-emerald-500 rounded-full" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full", children: projects.slice(0, visibleCount).map((project) => (_jsxs("div", { className: "glass-panel rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full", children: [_jsx("a", { href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "block h-48 overflow-hidden relative bg-slate-900 cursor-pointer", children: project.image ? (_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })) : (_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center group-hover:from-slate-800 group-hover:to-slate-700 transition-colors", children: _jsx(Code2, { size: 48, className: "text-slate-500 group-hover:text-emerald-400 transition-colors" }) })) }), _jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsx("h3", { className: "text-xl font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors", children: project.title }), _jsx("div", { className: "flex gap-2", children: _jsx("a", { href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "text-slate-400 hover:text-emerald-400", title: "View Live Demo", children: _jsx(ExternalLink, { size: 20 }) }) })] }), _jsx("p", { className: "text-slate-400 text-sm mb-6 flex-grow leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: project.stack.map((tech) => (_jsx("span", { className: "px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/60 text-slate-300 border border-slate-700", children: tech }, tech))) })] })] }, project.title))) }), _jsxs("div", { className: "flex justify-center mt-12 gap-4", children: [visibleCount < projects.length && (_jsxs("button", { onClick: showMoreProjects, className: "group flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-300 font-medium rounded-full shadow-none hover:bg-emerald-500/20 hover:text-emerald-200 transition-all duration-300 border border-emerald-500/40", children: ["Show More Projects", _jsx(ChevronDown, { size: 20, className: "group-hover:translate-y-1 transition-transform" })] })), visibleCount > 3 && (_jsxs("button", { onClick: showLessProjects, className: "group flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-300 font-medium rounded-full shadow-none hover:bg-emerald-500/20 hover:text-emerald-200 transition-all duration-300 border border-emerald-500/40", children: ["Show Less Projects", _jsx(ChevronDown, { size: 20, className: "group-hover:-translate-y-1 transition-transform rotate-180" })] }))] })] }));
}
