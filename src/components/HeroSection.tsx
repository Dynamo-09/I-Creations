import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW-TWL8Q3fUspgaMdR926VB6J-mFbLjCaRCa3dnRLGmgL5Sm2fndSuCD8Ij5Yd8q-Gd918lnLolZV37mUkN3WW6poXtmvRnCfFkC8j8KnydQ4zJzNCkbrE_eYr3v3c2-4nciUsleqf5C19CHsq1QM8On5NZ6K1huYXafS2xZKoVsqqcWXjHG6kYJvVzqOyDU47H9KxHSed3KmuvqRlbm0u1uvFqN32MwbVtHKHDLPCYJdcly8iKwqA")' }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-10 mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-accent font-semibold leading-tight tracking-wide"
        >
          Curating Extraordinary <span className="text-gradient-gold italic">Moments</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-body text-lg md:text-xl text-accent/80 max-w-2xl mx-auto leading-relaxed"
        >
          Meticulously designed events that transcend the ordinary. We craft experiences of unparalleled elegance and sophistication for discerning clients in Kolkata and beyond.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/portfolio" className="inline-block mt-8 border border-secondary/50 bg-secondary/10 hover:bg-secondary text-secondary hover:text-primary px-12 py-5 uppercase tracking-[0.25em] text-sm font-bold transition-all duration-500 backdrop-blur-sm">
            Explore Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link to="/services" className="text-secondary/60 hover:text-secondary transition-colors inline-block">
          <div className="w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent mx-auto" />
        </Link>
      </motion.div>
    </section>
  );
}
