import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Skills from './components/Skills';
import TechnologyStack from './components/TechnologyStack';
import GithubCalendar from './components/GithubCalendar';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import MouseGlow from './components/MouseGlow';
function Footer() {
    const year = new Date().getFullYear();
    return (_jsx("footer", { className: "relative z-10 border-t border-slate-800 bg-[#020617]/95", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [_jsxs("div", { className: "space-y-1 text-center md:text-left", children: [_jsxs("p", { className: "text-xs sm:text-sm text-slate-500", children: ["\u00A9 ", year, " Stanley Obitunwase. All rights reserved."] }), _jsx("p", { className: "text-[11px] sm:text-xs text-slate-600", children: "Built with React, TypeScript, Vite & Tailwind CSS." })] }), _jsxs("nav", { className: "flex flex-col items-center gap-3 md:flex-row md:gap-6", children: [_jsxs("div", { className: "flex gap-4 text-xs sm:text-sm text-slate-500", children: [_jsx("a", { href: "#home", className: "hover:text-emerald-300 transition-colors", children: "Home" }), _jsx("a", { href: "#projects", className: "hover:text-emerald-300 transition-colors", children: "Projects" }), _jsx("a", { href: "#about", className: "hover:text-emerald-300 transition-colors", children: "About" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("a", { href: "https://github.com/NodStan", target: "_blank", rel: "noopener noreferrer", className: "p-2 text-slate-500 hover:text-emerald-300 transition-colors", "aria-label": "GitHub", children: _jsx(FaGithub, { size: 18 }) }), _jsx("a", { href: "https://www.linkedin.com/in/stanley-obitunwase-a11668308/", target: "_blank", rel: "noopener noreferrer", className: "p-2 text-slate-500 hover:text-emerald-300 transition-colors", "aria-label": "LinkedIn", children: _jsx(FaLinkedin, { size: 18 }) })] })] })] }) }));
}
export default function App() {
    return (_jsxs("div", { className: "min-h-screen relative overflow-x-hidden max-w-full selection:bg-emerald-500/20 flex flex-col", children: [_jsx(MouseGlow, {}), _jsx("section", { id: "home", className: "w-full mx-auto max-w-[90rem]", children: _jsx(Hero, {}) }), _jsxs("main", { className: "relative z-10 px-0 space-y-20 md:space-y-32 pb-32 flex-1 w-full max-w-full", children: [_jsx("section", { id: "about", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(About, {}) }), _jsx("section", { id: "projects", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(Projects, {}) }), _jsx("section", { id: "skills", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(Skills, {}) }), _jsx("section", { id: "tech-stack", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(TechnologyStack, {}) }), _jsx("section", { id: "activity", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(GithubCalendar, {}) }), _jsx("section", { id: "certificates", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(Certificates, {}) }), _jsx("section", { id: "why-hire-me", className: "scroll-mt-28 w-full mx-auto max-w-[90rem]", children: _jsx(WhyHireMe, {}) }), _jsx("section", { id: "contact", className: "scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]", children: _jsx(Contact, {}) })] }), _jsx(ScrollIndicator, {}), _jsx(Footer, {})] }));
}
