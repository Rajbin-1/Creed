import { useLocation } from 'wouter';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <section className="relative bg-black border-t border-red-600/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
            {[
              { label: 'Home', action: () => navigate('/') },
              { label: 'Products', action: () => navigate('/products') },
              { label: 'About', action: () => navigate('/about') },
              { label: 'Reviews', action: () => navigate('/reviews') },
              { label: 'Contact', action: () => navigate('/contact') },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors duration-200 py-2 text-center"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-6">
            <a 
              href="https://www.instagram.com/thecreedlifestyle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/share/1FHbzcrj9v/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          <div className="border-t border-red-600/20 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-500">
              &copy; 2026 Creed Lifestyle Nepal. Built for Men Who Move Different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
