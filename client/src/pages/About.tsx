import { useLocation } from 'wouter';

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-red-600/30">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
              alt="Creed Lifestyle"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-sm tracking-widest uppercase hidden sm:inline">Creed</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={() => navigate('/products')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
            >
              Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-xs font-bold uppercase tracking-widest text-red-600"
            >
              About
            </button>
            <button
              onClick={() => navigate('/reviews')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-black border-b border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              About Creed Lifestyle
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Built for Men Who Move Different
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Creed Lifestyle is Nepal's premier men's grooming brand, dedicated to delivering professional-grade products that empower modern men to take control of their appearance and confidence.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    We understand that grooming is not just about looking good—it's about feeling good. Every product in our collection is carefully engineered with precision and quality at its core.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    From our flagship Hair Volumizing Powder to our precision Ball & Body Trimmer, each product represents our commitment to excellence and innovation in men's grooming.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Our Promise</h4>
                      <p className="text-xs text-gray-400 mt-2">Premium quality grooming products that deliver real results, every single time.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Our Values</h4>
                      <p className="text-xs text-gray-400 mt-2">Precision, quality, innovation, and a commitment to the modern man's lifestyle.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Our Vision</h4>
                      <p className="text-xs text-gray-400 mt-2">To be Nepal's most trusted grooming brand for men who refuse to compromise.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-red-600">5K+</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Happy Customers</p>
                    </div>
                  </div>

                  <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-red-600">4</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Premium Products</p>
                    </div>
                  </div>

                  <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-red-600">100%</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Quality Assured</p>
                    </div>
                  </div>

                  <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-red-600">Nepal</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Nationwide Delivery</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                  <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest mb-3">Our Mission</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We believe in the power of precision grooming. Every product is engineered for the man who refuses to compromise on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-black border-t border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Ready to Elevate Your Grooming?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Explore our premium collection and experience the difference quality makes.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/30 bg-black py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
                  alt="Creed"
                  className="w-6 h-6 rounded-full"
                />
                <h3 className="font-bold text-sm uppercase tracking-widest">Creed Lifestyle</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Premium men's grooming for the modern man.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <button onClick={() => navigate('/')} className="hover:text-red-600 transition-colors duration-300">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/products')} className="hover:text-red-600 transition-colors duration-300">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/reviews')} className="hover:text-red-600 transition-colors duration-300">
                    Reviews
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/thecreedlifestyle/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@creed.lifestyle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-red-600/20 pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; 2026 Creed Lifestyle Nepal. All rights reserved.</p>
            <p>Built for Men Who Move Different</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
