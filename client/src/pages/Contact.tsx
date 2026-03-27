import { Link } from 'wouter';
import { Instagram, Facebook, MessageSquare, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Contact() {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/contact" />

      {/* Page Header */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
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
      <section className="relative py-12 sm:py-20 lg:py-28 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Contact Info */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Have questions about our products or need support? We're here to help! Reach out to us through any of our social channels.
                  </p>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/creedlifestyle.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-red-600">Instagram</h4>
                      <p className="text-xs text-gray-400 mt-1">@creedlifestyle.np</p>
                      <p className="text-xs text-gray-500 mt-2">Daily grooming tips & product updates</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/9779800000000" // Placeholder
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-red-600">WhatsApp</h4>
                      <p className="text-xs text-gray-400 mt-1">Direct Message</p>
                      <p className="text-xs text-gray-500 mt-2">Quick customer support for orders and inquiries</p>
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
                      <p className="text-xs text-gray-500 mt-2">Community updates & announcements</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Why Contact Us */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    How We Can Help
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Whether you need product recommendations, have questions about orders, or want to share feedback, our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-3 lg:space-y-4">
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
                </div>

                <div className="p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300 bg-black/50">
                  <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest mb-3">Response Time</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We typically respond to messages within 24 hours. For urgent matters, please reach out via Instagram DM or WhatsApp for faster assistance.
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
              Ready to Order?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Browse our collection and place your order today.
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
                <li><Link href="/about"><a className="hover:text-red-600 transition-colors duration-300">About</a></Link></li>
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
