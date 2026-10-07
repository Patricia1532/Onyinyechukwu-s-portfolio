
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section ref={ref} id="contact" className="py-24 sm:py-32 bg-creme-light/80 border-t border-creme relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:w-2/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/30 border border-sand/50 text-burgundy text-xs font-bold uppercase tracking-widest mb-4">
                <span>03</span>
                <span>•</span>
                <span>Get In Touch</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy mb-6 leading-tight">
                Let's build <br />
                <span className="font-editorial italic font-normal text-dustyPink-dark">something timeless</span> <br />
                together.
              </h2>
              <p className="text-base sm:text-lg text-neutral-muted mb-10 leading-relaxed font-sans">
                Have an exciting project, a role, or simply want to talk design systems, typography, or frontend craft? My inbox is always open.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/90 border border-creme shadow-sm">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-creme text-burgundy shadow-inner shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-sand-dark uppercase tracking-widest">Email Patricia</p>
                    <a href="mailto:patricia.eziashi@example.com" className="text-sm sm:text-base font-bold text-burgundy hover:underline">
                      patricia.eziashi@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/90 border border-creme shadow-sm">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-creme text-burgundy shadow-inner shrink-0">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-sand-dark uppercase tracking-widest">Location</p>
                    <p className="text-sm sm:text-base font-bold text-burgundy">Lagos, Nigeria (Worldwide Remote)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:w-3/5 w-full">
              <div className="bg-white p-8 sm:p-12 rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-burgundy/5 border border-creme">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-burgundy ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-5 py-4 rounded-2xl bg-creme-light/60 border border-creme focus:border-burgundy/40 focus:bg-white text-burgundy outline-none transition-all placeholder:text-neutral-muted/50 text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-burgundy ml-1">Your Email</label>
                      <input 
                        required
                        type="email" 
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        placeholder="alex@example.com"
                        className="w-full px-5 py-4 rounded-2xl bg-creme-light/60 border border-creme focus:border-burgundy/40 focus:bg-white text-burgundy outline-none transition-all placeholder:text-neutral-muted/50 text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-burgundy ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      placeholder="Tell me a bit about your idea, timeline, or what you'd like to collaborate on..."
                      className="w-full px-5 py-4 rounded-2xl bg-creme-light/60 border border-creme focus:border-burgundy/40 focus:bg-white text-burgundy outline-none transition-all resize-none placeholder:text-neutral-muted/50 text-sm font-medium"
                    />
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className={`w-full py-4 sm:py-5 rounded-2xl font-bold uppercase tracking-widest text-xs sm:text-sm text-creme shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
                      status === 'success' ? 'bg-emerald-700 shadow-emerald-700/20' : 'bg-burgundy hover:bg-burgundy-light shadow-burgundy/20'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                    {status === 'loading' && (
                      <div className="h-5 w-5 border-2 border-creme/30 border-t-creme rounded-full animate-spin" />
                    )}
                    {status === 'success' && (
                      <>
                        <span>Message Sent Successfully!</span>
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

