
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section ref={ref} className="py-24 bg-neutral-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/5">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-5xl font-black text-neutral-text mb-8 leading-tight">
                Let's build <br />
                <span className="gradient-text">something great</span> <br />
                together.
              </h2>
              <p className="text-lg text-gray-500 mb-12">
                Have a project in mind or just want to chat? I'm currently available for freelance work and new opportunities.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white text-primary shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email me at</p>
                    <p className="text-lg font-bold text-neutral-text">patriciaeziashi1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white text-primary shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Based in</p>
                    <p className="text-lg font-bold text-neutral-text">Lagos, Nigeria (Remote Friendly)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        placeholder="patricia eziashi"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-background border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 ml-1">Your Email</label>
                      <input 
                        required
                        type="email" 
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        placeholder="patricia@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-background border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-background border border-transparent focus:border-primary/30 focus:bg-white outline-none transition-all resize-none"
                    />
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className={`w-full py-5 rounded-2xl font-black text-white shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3 ${
                      status === 'success' ? 'bg-green-500 shadow-green-500/20' : 'bg-primary hover:-translate-y-1 hover:shadow-primary/30'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        Send Message
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                    {status === 'loading' && (
                      <div className="h-6 w-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    )}
                    {status === 'success' && (
                      <>
                        Sent Successfully!
                        <span className="material-symbols-outlined">check_circle</span>
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
