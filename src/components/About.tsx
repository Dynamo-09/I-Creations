import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

export default function About() {
  return (
    <>
      <PageHeader title="Architects of Celebration" subtitle="Our Story" />
      <section id="about" className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW-TWL8Q3fUspgaMdR926VB6J-mFbLjCaRCa3dnRLGmgL5Sm2fndSuCD8Ij5Yd8q-Gd918lnLolZV37mUkN3WW6poXtmvRnCfFkC8j8KnydQ4zJzNCkbrE_eYr3v3c2-4nciUsleqf5C19CHsq1QM8On5NZ6K1huYXafS2xZKoVsqqcWXjHG6kYJvVzqOyDU47H9KxHSed3KmuvqRlbm0u1uvFqN32MwbVtHKHDLPCYJdcly8iKwqA" 
                  alt="Event planning team" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0" 
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
            
            <div className="space-y-6 text-accent/70 leading-relaxed text-lg">
              <p>
                Founded in the vibrant heart of Kolkata, I-Creations Event Management was born from a singular vision: to transform fleeting moments into unforgettable, cinematic realities. 
              </p>
              <p>
                We are more than just planners; we are storytellers and designers. Our dedicated team specializes in translating your most ambitious dreams into flawless executions. Whether it is an opulent wedding draped in bespoke floral architecture or a highly calibrated corporate gala, our approach remains the sameâ€”quiet luxury, meticulous attention to detail, and a relentless pursuit of perfection.
              </p>
              <p>
                Over the years, we have cultivated exclusive relationships with top-tier vendors, ensuring that every element of your event, from the ambient lighting to the artisanal catering, is nothing short of spectacular.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="text-center border-r border-accent/20 pr-6">
                <span className="block font-heading text-4xl text-secondary mb-1">10+</span>
                <span className="uppercase tracking-widest text-[10px] text-accent/50 font-bold">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block font-heading text-4xl text-secondary mb-1">500+</span>
                <span className="uppercase tracking-widest text-[10px] text-accent/50 font-bold">Events Curated</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
    </>
  );
}
