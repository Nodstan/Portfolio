import React from 'react';
import { Award, ExternalLink, Calendar, GraduationCap } from 'lucide-react';

const education = [
  {
    institution: "NIIT",
    degree: "Application Development, Web Development & Database Management",
    date: "2023 – Present",
    highlight:
      "Hands-on training building cross-platform mobile apps, responsive web applications, and managing relational and NoSQL databases."
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
  return (
    <div className="space-y-12 w-full max-w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-slate-50">Education & Certifications</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full">
        <div className="space-y-6 w-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-300">
              <GraduationCap size={20} />
            </span>
            <h3 className="text-lg font-semibold text-slate-50">Education</h3>
          </div>

          {education.map((edu) => (
            <div
              key={`${edu.institution}-${edu.degree}`}
              className="glass-panel p-5 sm:p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-200 w-full"
            >
              <h4 className="text-base font-semibold text-slate-50 mb-1">
                {edu.degree}
              </h4>
              <p className="text-sm text-slate-400 mb-2">
                {edu.institution}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <Calendar size={12} />
                <span>{edu.date}</span>
              </div>
              <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>{edu.highlight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-6 w-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-300">
              <Award size={20} />
            </span>
            <h3 className="text-lg font-semibold text-slate-50">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-5 sm:p-6 rounded-xl group border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-200 w-full"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-50 leading-tight mb-1 group-hover:text-emerald-300 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-slate-400 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar size={12} />
                        <span>Issued {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={cert.url}
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-colors"
                  title="View Credential"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
