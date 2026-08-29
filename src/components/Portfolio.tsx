import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import PageHeader from './PageHeader';

const projects = [
  {
    title: "The Crystal Symphony",
    category: "Gala Dinner",
    location: "Kolkata, India",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[21/9]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tLhAaE-n1bzqMZy-CB8mXMtPwHuanw0bTwrYH8Rwafv0luT8LLhMaaxsOq_jVPun9v-kV_sTGZ3iJZFA2uZpl_d8KKEFmds2DSgvJC0QcR9SAyQ52GnUcaYTCGX_GKwIIldNLkfVtAiM92uSskI9BilZMmuaZcPO_zOuVGp2x_s6aceSwZ8J6cQ99BcWOO11-Xy4aCOS8SmvjoS72mmv-KuSzWKLtPTo5dKpf652FxT2yr--R5hU"
  },
  {
    title: "Apex Leadership Forum",
    category: "Corporate Summit",
    location: "New Delhi, India",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[3/4] md:aspect-[3/4]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMrPc0OeTXmWLYmcUy8SVBwBwf1gvH4cQgbIPjGLKYhfbIgpSHqq6nvJF-r4Z4W4wQlNXta3indg9u01y1HVJUWHYWlG1H_af0YVasTCwj6MhNLnPxGbCqcA6XdBetD6Qks-uo1cc2hRrKAsy_hbkeUWXyl5pjwAm70WGYDO5vmfnM2NvzyMnr-X5f25hjoavD-Wfha9vEhMSwpcOO-O3lATpKx-7UatscYH8jxuFrcLViAqHOsdkY"
  },
  {
    title: "Twilight Sonata",
    category: "Private Celebration",
    location: "Goa, India",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0qjZ3dtKVuM-Mi1E6NB9BH7uVCF89GWewAFxTjxBpfaV_EtRmDi1BJsaoM09HtMT_GdqHpJBxky4lSsqZ_4kLiBK8BtXijqI1ivoOZBsjLFLrcYBy7oyj1i_egEi-yZhcP1h85flHH2xSHqgetfbSiDB3g9c7oG19UiITGXH-YdDBQR-BvJ0-47c7_vOm8v8cc8BDb9MgzcUJaH4YPgAw892z8IAXfMhx0YeMqnXwsybbUNWF2pY"
  },
  {
    title: "Noir Collection Launch",
    category: "Brand Activation",
    location: "Mumbai, India",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUzOYWRmX5V3OKzwhpirDZ6GtFaW9HZdQmfboy_adBnhIeRf4_G5imy2WWK3W5BSvdNqgMfcVAZLx5syzfKTm8UqzIIDXPr9mvwqlV7zpbDYzUf0xdP2jNIx2QhfMTb94MoOCKnLwhaKCNgibGfufUfbI1EFXlJOrsXAZY3Q5qElgn9H_yBv4MNVeeJoliTjUjwFoPsWyClxP7EoEBp6jE_zXilkGGDWBP0ayhun4T88gzyU1R9ScS"
  }
];

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Curated Masterpieces" subtitle="Selected Works" />
      <section id="portfolio" className="bg-primary/95 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-end mb-12">
            <button className="uppercase tracking-[0.2em] text-xs font-bold border-b border-accent/30 pb-2 text-accent hover:text-secondary hover:border-secondary transition-colors duration-300">
              View Full Gallery
            </button>
          </div>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${proj.span} relative group overflow-hidden ${proj.aspect} cursor-pointer`}
            >
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="uppercase tracking-widest text-secondary text-xs font-bold mb-2 block">{proj.category}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">{proj.title}</h3>
                  <p className="text-white/70 flex items-center gap-2 text-sm">
                    <MapPin size={14} /> {proj.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
