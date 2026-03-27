import { useLocation } from 'wouter';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Contact() {
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
              onClick={() => navigate('/')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/products')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
            >
              Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
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
              className="text-xs font-bold uppercase tracking-widest text-red-600"
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
              Get In Touch
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Have questions about our products or need support? We're here to help! Reach out to us through any of our social channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/thecreedlifestyle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-red-600">Instagram</h4>
                      <p className="text-xs text-gray-400 mt-1">@thecreedlifestyle</p>
                      <p className="text-xs text-gray-500 mt-2">5.2K+ followers • Daily grooming tips & product updates</p>
                    </div>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@creed.lifestyle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-red-600">TikTok</h4>
                      <p className="text-xs text-gray-400 mt-1">@creed.lifestyle</p>
                      <p className="text-xs text-gray-500 mt-2">10K+ followers • Trending grooming content</p>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/Creed-Lifestyle-Nepal/61579235975991/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-red-600">Facebook</h4>
                      <p className="text-xs text-gray-400 mt-1">Creed Lifestyle Nepal</p>
                      <p className="text-xs text-gray-500 mt-2">1.2K+ community • Updates & announcements</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Why Contact Us */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    How We Can Help
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Whether you need product recommendations, have questions about orders, or want to share feedback, our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Product Inquiries</h4>
                      <p className="text-xs text-gray-400 mt-2">Learn more about our grooming products and find the perfect solution for your needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Order Support</h4>
                      <p className="text-xs text-gray-400 mt-2">Track your orders, get delivery updates, or resolve any issues quickly.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Feedback & Suggestions</h4>
                      <p className="text-xs text-gray-400 mt-2">We value your opinion and love hearing how we can improve your experience.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-red-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest">Partnerships</h4>
                      <p className="text-xs text-gray-400 mt-2">Interested in collaborating? Let's discuss opportunities together.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300 bg-black/50">
                  <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest mb-3">Response Time</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We typically respond to messages within 24 hours. For urgent matters, please reach out via Instagram DM for faster assistance.
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
              Ready to Order?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Browse our collection and place your order today.
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
                  <button onClick={() => navigate('/about')} className="hover:text-red-600 transition-colors duration-300">
                    About
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
