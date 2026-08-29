import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW-TWL8Q3fUspgaMdR926VB6J-mFbLjCaRCa3dnRLGmgL5Sm2fndSuCD8Ij5Yd8q-Gd918lnLolZV37mUkN3WW6poXtmvRnCfFkC8j8KnydQ4zJzNCkbrE_eYr3v3c2-4nciUsleqf5C19CHsq1QM8On5NZ6K1huYXafS2xZKoVsqqcWXjHG6kYJvVzqOyDU47H9KxHSed3KmuvqRlbm0u1uvFqN32MwbVtHKHDLPCYJdcly8iKwqA")' }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

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
