import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

const services = [
  {
    num: "01",
    title: "Luxury Weddings",
    desc: "A bespoke journey tailored to your unique love story. From grand ballrooms to intimate destination affairs, we orchestrate every nuance with precision. Our comprehensive approach covers styling, floral architecture, and seamless day-of coordination.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFT8wgD7Mmz4hi-GC5CqSkiTVTVJZp2LWdWgEJadq-iraEpn8NHXUnhZCrXZB7VgNHupDcn1GkHctpwbISNJEjfK2c8KVoVY7Kcd42d3j3IeHnvKtM2sTfjapO7dSzYV1VuFiRxkYV0LuVqg4msN7zR7ChoHh9dGxnJwUhXSvBM7vEL7ZWBs8Sh8Q8gMK3lkBNPNUSlZ7CJsInzpOaYw8CVKvQTpExihoXEaHCI1KvpHXcH2izsERB"
  },
  {
    num: "02",
    title: "Corporate Galas",
    desc: "Elevating brand presence through exceptional live events. We design high-impact corporate galas, product launches, and milestone celebrations that resonate with stakeholders and guests alike.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9Sy3eVouTpeZM6Cig5Kj7rBV_6Y7huP6tBAbMFVbPKQBjAhgk5ImfyYdRX74wfTBKAaRD-l9LWb-9ySEDqBEh_ZOW2Sk_8HCwPc0mZoSEUohf_dcf-YbBg9sHz_YF7-3gkVIYr21Di79Pvv9SUqqrbHGutplW0ejTQ0smOhTJsWaAevCpZA03AnAyxYN51g4s0Ck9ArGp7qinlszmqI4lh0O4usOX5XbeE0a3ZfccydbD5WPuK-u"
  },
  {
    num: "03",
    title: "Floral Architecture",
    desc: "Avant-garde floral installations that redefine spaces. We blend pure blooms with structural elements to create breathtaking focal points that speak of modern luxury and artistic vision.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACffizPCdCXIOT76C1DfHRmGvrSAicQtDP2AQLaq-Hwvjq8X3lYb2SXkx5xFoQUVfIMD3E3L2EbsQ2i82_fCJvQv8BZFdspbHDYPlY__FpWxBcT_vuqd_xxKq2tyg4IXFvvKCUshVFgcS7-c3mz4NhZKicvx9NDOu8MHCZTG7oVDF5Eqenh2ttPVtr-DmFHP2IULzFbg07spYES5dA0SRKZNKV16kawF40h6RS_iBpPZSCn5uAGwNg"
  }
];

export default function Services() {
  return (
    <>
      <PageHeader title="Curated Offerings" subtitle="Our Expertise" />
      <section id="services" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">

      <div className="space-y-32">
        {services.map((svc, idx) => (
          <div key={svc.num} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col items-start"
            >
              <span className="text-secondary/50 font-heading text-6xl opacity-30 absolute -mt-12 -ml-6">{svc.num}</span>
              <h3 className="font-heading text-3xl md:text-4xl text-accent mb-6 relative z-10">{svc.title}</h3>
              <p className="text-accent/70 leading-relaxed mb-8 max-w-md">
                {svc.desc}
              </p>
              <button className="uppercase tracking-[0.2em] text-xs font-bold border-b border-secondary pb-2 text-secondary hover:text-accent hover:border-accent transition-colors duration-300">
                Discover More
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
