import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';

export default function Contact() {
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
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
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
                    type="date" 
                    id="date" 
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
