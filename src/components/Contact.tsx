import React, { useState } from 'react';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-10 w-full max-w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-50 mb-3">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Have a project in mind or need a reliable software engineer? Let&apos;s build something great together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-slate-50">Let&apos;s Work Together</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I collaborate with brands, startups, and agencies to design and build modern, performant web experiences. 
              Share a bit about your idea, and I&apos;ll get back to you with how we can bring it to life.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                <p className="text-sm text-slate-100">Stanleyobitunwase@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                <p className="text-sm text-slate-100">+234 814 169 1876</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
                <p className="text-sm text-slate-100">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#020617] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.65)] w-full max-w-full">
          <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70 transition-all placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70 transition-all placeholder:text-slate-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-slate-300">Project details</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70 transition-all placeholder:text-slate-500"
                placeholder="Tell me about your project, timeline, and goals..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 text-slate-950 text-sm font-medium py-3 px-6 rounded-lg hover:bg-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_20px_40px_rgba(16,185,129,0.4)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {submitted && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs text-center">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
