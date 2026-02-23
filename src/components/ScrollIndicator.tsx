import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sectionOrder = [
  'home',
  'about',
  'projects',
  'skills',
  'tech-stack',
  'activity',
  'certificates',
  'contact',
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: Element | null = null;
        let bestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry.target;
          }
        });

        if (bestEntry) {
          setActiveSection(bestEntry.id);
        }
      },
      { threshold: [0.35, 0.5, 0.75] }
    );

    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const currentIndex = sectionOrder.indexOf(activeSection);
    const nextId = sectionOrder[currentIndex + 1] || sectionOrder[0];
    const el = document.getElementById(nextId);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-4 sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto z-40"
      aria-label="Scroll to next section"
    >
      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-emerald-400/70 bg-slate-900/70 text-emerald-300 hover:text-emerald-200 hover:border-emerald-300 transition-colors animate-bounce-slow">
        <ChevronDown size={18} />
      </span>
    </button>
  );
}
