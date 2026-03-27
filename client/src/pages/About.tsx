import { Link } from 'wouter';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/about" />

      {/* Page Header */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
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
      <section className="relative py-12 sm:py-20 lg:py-28 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
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

                <div className="space-y-3 lg:space-y-4 pt-4">
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

                <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300 bg-black/50">
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
      <section className="relative py-12 sm:py-16 lg:py-20 bg-black border-t border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Ready to Elevate Your Grooming?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Explore our premium collection and experience the difference quality makes.
            </p>
            <Link href="/products">
              <a className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95">
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/30 bg-black py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
                  alt="Creed Lifestyle Nepal logo in footer"
                  className="w-6 h-6 rounded-full"
                />
                <h3 className="font-bold text-sm uppercase tracking-widest">Creed Lifestyle</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Premium men's grooming for the modern man.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><Link href="/"><a className="hover:text-red-600 transition-colors duration-300">Home</a></Link></li>
                <li><Link href="/products"><a className="hover:text-red-600 transition-colors duration-300">Products</a></Link></li>
                <li><Link href="/reviews"><a className="hover:text-red-600 transition-colors duration-300">Reviews</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/creedlifestyle.np/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@creed.lifestyle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-red-600/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; 2026 Creed Lifestyle Nepal. All rights reserved.</p>
            <p>Built for Men Who Move Different</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
