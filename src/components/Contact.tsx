import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHeader from './PageHeader';

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'draft_opened' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    budget: '',
    vision: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmissionStatus('idle');
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const { name, email, phone, date, budget, vision } = formData;
      if (!name || !email || !date || !budget || !vision) {
        throw new Error('Please fill in all required fields.');
      }

      // Generate mailto link and trigger same-tab dispatch
      const subject = encodeURIComponent(`Bespoke Event Inquiry - ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nEvent Date: ${date}\nEstimated Budget: ${budget}\n\nVision & Details:\n${vision}`
      );

      const mailtoLink = `mailto:inquiries@icreations.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      setSubmissionStatus('draft_opened');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Failed to prepare email draft. Please try again.');
      setSubmissionStatus('error');
    }
  };

  return (
    <>
      <PageHeader title="Let's Curate Your Masterpiece" subtitle="Inquiries" />
      <section id="contact" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent/60 max-w-2xl mx-auto text-lg">
              For inquiries regarding bespoke event management, styling, and coordination, please share your vision with us. We accept a limited number of commissions annually to ensure uncompromising quality.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-12">
            {[
              { icon: MapPin, title: "Atelier", content: "730 Fifth Avenue, Suite 400\nKolkata, WB 700001" },
              { icon: Phone, title: "Direct", content: "+91 98765 43210" },
              { icon: Mail, title: "Electronic", content: "inquiries@icreations.com" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <item.icon className="text-secondary mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="uppercase tracking-widest text-secondary text-sm font-bold mb-2">{item.title}</h3>
                  <p className="text-accent/80 whitespace-pre-line leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              {submissionStatus === 'draft_opened' && (
                <motion.div 
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 border border-secondary/30 bg-secondary/10 rounded-sm flex items-start gap-4 text-sm"
                >
                  <CheckCircle2 size={24} className="text-secondary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-secondary">Email Draft Triggered</p>
                    <p className="text-accent/80 leading-relaxed">
                      Your default email application was prompted with your pre-filled inquiry. You can review and click send there, or copy your message below to send directly to <span className="text-secondary font-semibold">inquiries@icreations.com</span>.
                    </p>
                  </div>
                </motion.div>
              )}

              {submissionStatus === 'error' && (
                <div 
                  role="alert"
                  aria-live="assertive"
                  className="p-4 border border-red-500/30 bg-red-500/10 rounded text-red-400 flex items-center gap-3 text-sm"
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage || 'Failed to process inquiry. Please check your inputs.'}</span>
                </div>
              )}

              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors peer placeholder-transparent"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-accent/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs">
                  Your Full Name
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-accent/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-accent/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs">
                    Phone Number (Optional)
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors text-accent/50 focus:text-accent"
                  />
                  <label htmlFor="date" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest">
                    Event Date
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="budget" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors peer placeholder-transparent"
                    placeholder="Budget"
                  />
                  <label htmlFor="budget" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-accent/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs">
                    Estimated Budget
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  id="vision" 
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  required 
                  rows={4}
                  className="w-full bg-transparent border-b border-accent/20 py-4 text-accent focus:outline-none focus:border-secondary transition-colors peer resize-none placeholder-transparent"
                  placeholder="Vision"
                />
                <label htmlFor="vision" className="absolute left-0 -top-3.5 text-secondary text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-accent/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs">
                  Your Vision
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="self-end mt-4 bg-secondary text-primary px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm flex items-center gap-3 hover:bg-[#e0bb43] transition-colors"
              >
                Submit Inquiry <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
