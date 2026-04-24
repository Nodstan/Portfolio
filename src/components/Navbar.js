import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Nodstans.png';
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Activity', href: '#activity' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];
    return (_jsxs("nav", { className: "glass-nav fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10", children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx("div", { className: "flex-shrink-0", children: _jsxs("a", { href: "#home", className: "inline-flex items-center", children: [_jsx("img", { src: logo, alt: "Nodstan logo", className: "h-8 w-auto sm:h-9" }), _jsx("span", { className: "ml-2 text-base sm:text-lg font-semibold text-slate-100", children: "Nodstan." })] }) }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: _jsx("div", { className: "flex items-baseline space-x-8", children: navItems.map((item) => (_jsx("a", { href: item.href, className: `text-sm font-medium px-3 py-2 transition-all duration-200 border-b-2 border-transparent ${item.href === '#home'
                                        ? 'text-emerald-300 border-emerald-400'
                                        : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-md'}`, children: item.name }, item.name))) }) }), _jsx("div", { className: "md:hidden flex items-center gap-4", children: _jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors", children: isMobileMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }) })] }) }), isMobileMenuOpen && (_jsx("div", { className: "md:hidden glass-panel border-t border-emerald-500/30", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: navItems.map((item) => (_jsx("a", { href: item.href, onClick: () => setIsMobileMenuOpen(false), className: `block px-3 py-2 rounded-md text-base font-medium ${item.href === '#home'
                            ? 'text-emerald-300 bg-emerald-500/10'
                            : 'text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10'}`, children: item.name }, item.name))) }) }))] }));
}
