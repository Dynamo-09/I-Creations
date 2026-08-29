import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tLhAaE-n1bzqMZy-CB8mXMtPwHuanw0bTwrYH8Rwafv0luT8LLhMaaxsOq_jVPun9v-kV_sTGZ3iJZFA2uZpl_d8KKEFmds2DSgvJC0QcR9SAyQ52GnUcaYTCGX_GKwIIldNLkfVtAiM92uSskI9BilZMmuaZcPO_zOuVGp2x_s6aceSwZ8J6cQ99BcWOO11-Xy4aCOS8SmvjoS72mmv-KuSzWKLtPTo5dKpf652FxT2yr--R5hU",
    span: "col-span-12 md:col-span-8 row-span-2",
    alt: "Luxury wedding setup"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFT8wgD7Mmz4hi-GC5CqSkiTVTVJZp2LWdWgEJadq-iraEpn8NHXUnhZCrXZB7VgNHupDcn1GkHctpwbISNJEjfK2c8KVoVY7Kcd42d3j3IeHnvKtM2sTfjapO7dSzYV1VuFiRxkYV0LuVqg4msN7zR7ChoHh9dGxnJwUhXSvBM7vEL7ZWBs8Sh8Q8gMK3lkBNPNUSlZ7CJsInzpOaYw8CVKvQTpExihoXEaHCI1KvpHXcH2izsERB",
    span: "col-span-12 md:col-span-4 row-span-1",
    alt: "Event lighting"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMrPc0OeTXmWLYmcUy8SVBwBwf1gvH4cQgbIPjGLKYhfbIgpSHqq6nvJF-r4Z4W4wQlNXta3indg9u01y1HVJUWHYWlG1H_af0YVasTCwj6MhNLnPxGbCqcA6XdBetD6Qks-uo1cc2hRrKAsy_hbkeUWXyl5pjwAm70WGYDO5vmfnM2NvzyMnr-X5f25hjoavD-Wfha9vEhMSwpcOO-O3lATpKx-7UatscYH8jxuFrcLViAqHOsdkY",
    span: "col-span-12 md:col-span-4 row-span-1",
    alt: "Corporate summit decor"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0qjZ3dtKVuM-Mi1E6NB9BH7uVCF89GWewAFxTjxBpfaV_EtRmDi1BJsaoM09HtMT_GdqHpJBxky4lSsqZ_4kLiBK8BtXijqI1ivoOZBsjLFLrcYBy7oyj1i_egEi-yZhcP1h85flHH2xSHqgetfbSiDB3g9c7oG19UiITGXH-YdDBQR-BvJ0-47c7_vOm8v8cc8BDb9MgzcUJaH4YPgAw892z8IAXfMhx0YeMqnXwsybbUNWF2pY",
    span: "col-span-12 md:col-span-4 row-span-2",
    alt: "Gala dinner tables"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9Sy3eVouTpeZM6Cig5Kj7rBV_6Y7huP6tBAbMFVbPKQBjAhgk5ImfyYdRX74wfTBKAaRD-l9LWb-9ySEDqBEh_ZOW2Sk_8HCwPc0mZoSEUohf_dcf-YbBg9sHz_YF7-3gkVIYr21Di79Pvv9SUqqrbHGutplW0ejTQ0smOhTJsWaAevCpZA03AnAyxYN51g4s0Ck9ArGp7qinlszmqI4lh0O4usOX5XbeE0a3ZfccydbD5WPuK-u",
    span: "col-span-12 md:col-span-8 row-span-2",
    alt: "Corporate event stage"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUzOYWRmX5V3OKzwhpirDZ6GtFaW9HZdQmfboy_adBnhIeRf4_G5imy2WWK3W5BSvdNqgMfcVAZLx5syzfKTm8UqzIIDXPr9mvwqlV7zpbDYzUf0xdP2jNIx2QhfMTb94MoOCKnLwhaKCNgibGfufUfbI1EFXlJOrsXAZY3Q5qElgn9H_yBv4MNVeeJoliTjUjwFoPsWyClxP7EoEBp6jE_zXilkGGDWBP0ayhun4T88gzyU1R9ScS",
    span: "col-span-12 md:col-span-4 row-span-1",
    alt: "Abstract event decor"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACffizPCdCXIOT76C1DfHRmGvrSAicQtDP2AQLaq-Hwvjq8X3lYb2SXkx5xFoQUVfIMD3E3L2EbsQ2i82_fCJvQv8BZFdspbHDYPlY__FpWxBcT_vuqd_xxKq2tyg4IXFvvKCUshVFgcS7-c3mz4NhZKicvx9NDOu8MHCZTG7oVDF5Eqenh2ttPVtr-DmFHP2IULzFbg07spYES5dA0SRKZNKV16kawF40h6RS_iBpPZSCn5uAGwNg",
    span: "col-span-12 md:col-span-4 row-span-1",
    alt: "Floral centerpiece"
  }
];

export default function Gallery() {
  return (
    <>
      <PageHeader title="Visual Diary" subtitle="The Gallery" />
      <section id="gallery" className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-12 auto-rows-[250px] gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${img.span} relative group overflow-hidden bg-primary/50 cursor-pointer rounded-sm`}
            >
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="uppercase tracking-[0.2em] text-xs font-bold border-b border-secondary pb-2 text-secondary hover:text-accent hover:border-accent transition-colors duration-300">
            Follow our Instagram
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
