import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Award, ExternalLink, Calendar, GraduationCap } from 'lucide-react';
const education = [
    {
        institution: "NIIT",
        degree: "Application Development, Web Development & Database Management",
        date: "2023 – Present",
        highlight: "Hands-on training building cross-platform mobile apps, responsive web applications, and managing relational and NoSQL databases."
    }
];
const certificates = [
    {
        name: "Angular Course",
        issuer: "Udemy",
        date: "In progress",
        url: "#",
        id: "UDEMY-ANGULAR-COURSE"
    },
    {
        name: "Jira Course",
        issuer: "Udemy",
        date: "In progress",
        url: "#",
        id: "UDEMY-JIRA-COURSE"
    }
];
export default function Certificates() {
    return (_jsxs("div", { className: "space-y-12 w-full max-w-full", children: [_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-50", children: "Education & Certifications" }), _jsx("div", { className: "h-1 w-20 bg-emerald-500 rounded-full" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full", children: [_jsxs("div", { className: "space-y-6 w-full", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("span", { className: "p-2 rounded-lg bg-emerald-500/10 text-emerald-300", children: _jsx(GraduationCap, { size: 20 }) }), _jsx("h3", { className: "text-lg font-semibold text-slate-50", children: "Education" })] }), education.map((edu) => (_jsxs("div", { className: "glass-panel p-5 sm:p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-200 w-full", children: [_jsx("h4", { className: "text-base font-semibold text-slate-50 mb-1", children: edu.degree }), _jsx("p", { className: "text-sm text-slate-400 mb-2", children: edu.institution }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500 mb-3", children: [_jsx(Calendar, { size: 12 }), _jsx("span", { children: edu.date })] }), _jsx("ul", { className: "text-sm text-slate-400 list-disc list-inside space-y-1", children: _jsx("li", { children: edu.highlight }) })] }, `${edu.institution}-${edu.degree}`)))] }), _jsxs("div", { className: "space-y-6 w-full", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("span", { className: "p-2 rounded-lg bg-emerald-500/10 text-emerald-300", children: _jsx(Award, { size: 20 }) }), _jsx("h3", { className: "text-lg font-semibold text-slate-50", children: "Certifications" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full", children: certificates.map((cert) => (_jsxs("div", { className: "glass-panel p-5 sm:p-6 rounded-xl group border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-200 w-full", children: [_jsx("div", { className: "flex items-start justify-between gap-4 mb-3", children: _jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "p-3 rounded-lg bg-emerald-500/10 text-emerald-300 group-hover:bg-emerald-500/20 transition-colors", children: _jsx(Award, { size: 24 }) }), _jsxs("div", { children: [_jsx("h4", { className: "text-base font-semibold text-slate-50 leading-tight mb-1 group-hover:text-emerald-300 transition-colors", children: cert.name }), _jsx("p", { className: "text-slate-400 text-sm mb-2", children: cert.issuer }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [_jsx(Calendar, { size: 12 }), _jsxs("span", { children: ["Issued ", cert.date] })] })] })] }) }), _jsxs("a", { href: cert.url, className: "inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-colors", title: "View Credential", target: "_blank", rel: "noopener noreferrer", children: [_jsx("span", { children: "View Credential" }), _jsx(ExternalLink, { size: 14 })] })] }, cert.id))) })] })] })] }));
}
