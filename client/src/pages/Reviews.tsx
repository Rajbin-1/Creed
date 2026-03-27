import { useLocation } from 'wouter';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  product: string;
  rating: number;
  text: string;
  source: string;
}

export default function Reviews() {
  const [, navigate] = useLocation();

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Rajesh K.',
      product: 'Hair Volumizing Powder',
      rating: 5,
      text: 'Best hair product I\'ve used! Instant volume without any greasiness. Perfect for daily use.',
      source: 'Daraz',
    },
    {
      id: 2,
      author: 'Amit P.',
      product: 'Ball & Body Trimmer',
      rating: 5,
      text: 'Smooth trimming, waterproof, and the battery lasts forever. Worth every rupee!',
      source: 'Daraz',
    },
    {
      id: 3,
      author: 'Pradeep S.',
      product: 'Scalp Massager',
      rating: 5,
      text: 'Reduced my hair fall significantly. The massage is so relaxing and effective.',
      source: 'Instagram',
    },
    {
      id: 4,
      author: 'Deepak M.',
      product: 'Body Exfoliator',
      rating: 5,
      text: 'My skin feels so smooth and clean after using this. Highly recommended!',
      source: 'Daraz',
    },
    {
      id: 5,
      author: 'Suresh B.',
      product: 'Hair Volumizing Powder',
      rating: 5,
      text: 'No more flat hair! This powder is a game-changer for my styling routine.',
      source: 'TikTok',
    },
    {
      id: 6,
      author: 'Vikram N.',
      product: 'Scalp Massager',
      rating: 5,
      text: 'Great quality, boosts blood circulation, and my scalp feels healthier than ever.',
      source: 'Instagram',
    },
  ];

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
              className="text-xs font-bold uppercase tracking-widest text-red-600"
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
              What Our Customers Say
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Real reviews from real men who trust Creed Lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-6 sm:p-8 border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10 bg-black/50"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-red-600 text-red-600" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-red-600/20 pt-4 space-y-2">
                  <p className="font-bold text-sm text-white">{review.author}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{review.product}</p>
                    <span className="text-xs bg-red-600/20 text-red-600 px-2 py-1 rounded-sm font-bold">{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-black border-t border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Experience the Creed Lifestyle difference today.
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
