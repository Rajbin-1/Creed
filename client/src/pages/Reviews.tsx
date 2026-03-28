import { Link } from 'wouter';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Review {
  id: number;
  author: string;
  product: string;
  rating: number;
  text: string;
  source: string;
}

export default function Reviews() {
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
      <Navbar currentPage="/reviews" />

      {/* Page Header */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
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
      <section className="relative py-12 sm:py-20 lg:py-28 bg-black">
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
      <section className="relative py-12 sm:py-16 lg:py-20 bg-black border-t border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Experience the Creed Lifestyle difference today.
            </p>
            <Link href="/products">
              <a className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95">
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
