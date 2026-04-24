import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
export default function GithubCalendarSection() {
    const [calendarConfig, setCalendarConfig] = useState({
        blockSize: 12,
        blockMargin: 4,
        fontSize: 14
    });
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // Mobile
                setCalendarConfig({
                    blockSize: 9,
                    blockMargin: 2,
                    fontSize: 12
                });
            }
            else { // Desktop
                setCalendarConfig({
                    blockSize: 12,
                    blockMargin: 4,
                    fontSize: 14
                });
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (_jsxs("div", { className: "space-y-8 w-full max-w-full", children: [_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-50", children: "GitHub Activity" }), _jsx("div", { className: "h-1 w-20 bg-emerald-500 rounded-full" })] }), _jsxs("div", { className: "glass-panel p-4 sm:p-8 rounded-xl w-full max-w-full flex flex-col items-center gap-4", children: [_jsx("div", { className: "w-full max-w-full overflow-x-auto pb-4 custom-scrollbar", children: _jsx("div", { className: "min-w-max flex justify-center mx-auto", children: _jsx(GitHubCalendar, { username: "Nodstan", colorScheme: "dark", theme: {
                                    light: ['#0f172a', '#14532d', '#166534', '#22c55e', '#bbf7d0'],
                                    dark: ['#020617', '#14532d', '#166534', '#22c55e', '#bbf7d0'],
                                }, fontSize: calendarConfig.fontSize, blockSize: calendarConfig.blockSize, blockMargin: calendarConfig.blockMargin }) }) }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-slate-400 md:hidden", children: [_jsx("span", { className: "animate-pulse", children: "\u2190" }), _jsx("span", { children: "Swipe to see more" }), _jsx("span", { className: "animate-pulse", children: "\u2192" })] })] })] }));
}
