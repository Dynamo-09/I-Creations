export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-heading text-3xl text-secondary italic mb-6">I Creations</h2>
          <p className="text-accent/50 max-w-sm leading-relaxed">
            Elevating moments into timeless narratives through meticulous design, flawless execution, and quiet luxury.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-secondary text-xs font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-accent/70">
            {['About Us', 'Our Process', 'Careers', 'Press'].map(link => (
              <li key={link}><a href="#" className="hover:text-secondary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-secondary text-xs font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-accent/70">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <li key={link}><a href="#" className="hover:text-secondary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-accent/40 uppercase tracking-widest">
        <p>© 2024 I Creations Event Management. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary transition-colors">YouTube</a>
          <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
