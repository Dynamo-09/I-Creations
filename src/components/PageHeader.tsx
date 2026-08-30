import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
      {/* Global Background Video is used, no local background needed */}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4 mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent font-semibold leading-tight tracking-wide"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body text-base md:text-lg text-accent/80 max-w-2xl mx-auto uppercase tracking-widest"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
