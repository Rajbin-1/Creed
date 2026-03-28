import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { Zap, Droplet, Scissors, ShoppingBag, Instagram, Facebook, ShoppingCart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useStock } from '@/hooks/useStock';
import Navbar from '@/components/Navbar';

/**
 * Products Page with Shopping Cart, Stock Management & Daraz Integration
 * - All 8 products with real Daraz links
 * - Premium combo card styling with shimmer effect
 * - Stock status from useStock hook
 */

interface Product {
  id: number;
  name: string;
  feature: string;
  price: string;
  priceNPR: number;
  icon: any;
  image: string;
  darazLink: string;
  description: string;
  isCombo?: boolean;
  stockId: string;
}

export default function Products() {
  const [, navigate] = useLocation();
  const { addToCart, getTotalItems } = useCart();
  const { stock, loading: stockLoading, getStockStatus, isInStock } = useStock();
  const [addedItem, setAddedItem] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Hair Volumizing Powder',
      feature: 'Instant Lift & All-Day Matte Hold',
      price: 'Rs. 1,499',
      priceNPR: 1499,
      icon: Zap,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-powder_a39967b7.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00Jl',
      description: 'Instant volume without greasiness. Perfect for daily use and all-day hold.',
      stockId: 'hair-volumizing-powder',
    },
    {
      id: 2,
      name: 'Ball & Body Trimmer',
      feature: 'All-in-One Waterproof Grooming Tool',
      price: 'Rs. 3,299',
      priceNPR: 3299,
      icon: Scissors,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-trimmer_12027949.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00Jr',
      description: 'Waterproof, 7000 RPM, 16 dial lengths. Perfect for smooth trimming.',
      stockId: 'ball-body-trimmer',
    },
    {
      id: 3,
      name: 'Beard Groomer Pro',
      feature: 'Professional Precision Beard Styling',
      price: 'Rs. 2,799',
      priceNPR: 2799,
      icon: Zap,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-trimmer_12027949.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00JC',
      description: 'Professional-grade beard grooming with precision settings.',
      stockId: 'beard-groomer-pro',
    },
    {
      id: 4,
      name: 'Silicone Scalp Massager',
      feature: 'Soft food-grade silicone to boost circulation',
      price: 'Rs. 1,050',
      priceNPR: 1050,
      icon: Droplet,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-massager_36df39c6.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00rY',
      description: 'Boosts blood circulation. Reduces hair fall and promotes scalp health.',
      stockId: 'silicone-scalp-massager',
    },
    {
      id: 5,
      name: 'Body Exfoliator',
      feature: 'Original Viscose Fiber Glove for deep skin renewal',
      price: 'Rs. 1,099',
      priceNPR: 1099,
      icon: Zap,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-exfoliator_c21280b1.png',
      darazLink: 'https://s.daraz.com.np/s.Z00rf',
      description: 'Deep exfoliation for smoother skin. Unclogs pores and reduces ingrown hairs.',
      stockId: 'exfoliator',
    },
    {
      id: 6,
      name: 'Back Exfoliator',
      feature: 'Extended reach for full-body exfoliation',
      price: 'Rs. 1,299',
      priceNPR: 1299,
      icon: Droplet,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-exfoliator_c21280b1.png',
      darazLink: 'https://s.daraz.com.np/s.Z00Ia',
      description: 'Reach your back with ease. Premium exfoliation for hard-to-reach areas.',
      stockId: 'back-exfoliator',
    },
    {
      id: 7,
      name: 'Power Trio Combo',
      feature: 'Ultimate Grooming Bundle - Save 25%',
      price: 'Rs. 5,499',
      priceNPR: 5499,
      icon: Sparkles,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-powder_a39967b7.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00I4',
      description: 'Hair Powder + Trimmer + Scalp Massager. The complete grooming solution.',
      isCombo: true,
      stockId: 'power-trio',
    },
    {
      id: 8,
      name: 'Scalp Massager & Body Exfoliator Combo',
      feature: 'Essential Duo - Save 15%',
      price: 'Rs. 3,999',
      priceNPR: 3999,
      icon: Sparkles,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-massager_36df39c6.jpg',
      darazLink: 'https://s.daraz.com.np/s.Z00rN',
      description: 'Scalp Massager + Body Exfoliator. Perfect starter combo for daily grooming.',
      isCombo: true,
      stockId: 'grooming-duo',
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceNPR,
      image: product.image,
      quantity: 1,
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/products" />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-black border-b border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Our Collection
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Crafted for precision. Engineered for performance.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative py-8 bg-black border-b border-red-600/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <a
              href="https://www.instagram.com/thecreedlifestyle?igsh=MWs1cmJiM21rMHNtaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors duration-300"
              title="Follow on Instagram"
            >
              <Instagram size={24} className="text-red-600" />
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Instagram</span>
            </a>
            <div className="w-px h-6 bg-red-600/30"></div>
            <a
              href="https://www.facebook.com/share/1FHbzcrj9v/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors duration-300"
              title="Follow on Facebook"
            >
              <Facebook size={24} className="text-red-600" />
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => {
              const Icon = product.icon;
              const inStock = isInStock(product.stockId);
              const stockStatus = getStockStatus(product.stockId);

              return (
                <div
                  key={product.id}
                  className={`group relative overflow-hidden border transition-all duration-300 ${
                    product.isCombo
                      ? 'border-yellow-500/50 bg-gradient-to-br from-black via-black to-yellow-900/10 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 animate-pulse-slow'
                      : 'border-red-600/30 bg-black hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20'
                  }`}
                >
                  {/* Combo Premium Badge */}
                  {product.isCombo && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <Sparkles size={14} />
                      Premium Combo
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="relative z-10 space-y-6 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 flex items-center justify-center ${
                          product.isCombo
                            ? 'bg-yellow-500/20 group-hover:bg-yellow-500'
                            : 'bg-red-600/20 group-hover:bg-red-600'
                        } transition-colors duration-300`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            product.isCombo
                              ? 'text-yellow-500 group-hover:text-black'
                              : 'text-red-600 group-hover:text-white'
                          }`}
                        />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${
                        inStock ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className={`text-lg sm:text-xl font-bold leading-tight transition-colors duration-300 ${
                        product.isCombo
                          ? 'group-hover:text-yellow-400'
                          : 'group-hover:text-red-600'
                      }`}>
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{product.feature}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
                    </div>

                    <div className={`flex items-center justify-between pt-6 border-t ${
                      product.isCombo ? 'border-yellow-500/20' : 'border-red-600/20'
                    }`}>
                      <span className={`text-xl sm:text-2xl font-bold ${
                        product.isCombo ? 'text-yellow-500' : 'text-red-600'
                      }`}>
                        {product.price}
                      </span>
                    </div>

                    {/* Order Buttons */}
                    <div className="space-y-3 pt-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!inStock}
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-wider active:scale-95 px-4 py-3 ${
                          !inStock
                            ? 'bg-gray-600 cursor-not-allowed opacity-50'
                            : addedItem === product.id
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : product.isCombo
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                            : 'bg-red-600 hover:bg-red-700 text-white'
                        }`}
                      >
                        <ShoppingCart size={14} />
                        {addedItem === product.id ? 'Added!' : 'Add to Cart'}
                      </button>

                      <a
                        href={product.darazLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 border rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-wider active:scale-95 px-4 py-3 ${
                          product.isCombo
                            ? 'border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10'
                            : 'border-red-600/50 text-red-600 hover:bg-red-600/10'
                        }`}
                      >
                        <ShoppingBag size={14} />
                        Shop on Daraz
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-black border-t border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            {getTotalItems() > 0 ? (
              <>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  You have {getTotalItems()} item{getTotalItems() > 1 ? 's' : ''} in your cart
                </h2>
                <button
                  onClick={() => navigate('/checkout')}
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95"
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  Ready to Elevate Your Grooming?
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                  Add items to your cart and order via Instagram.
                </p>
              </>
            )}
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
                  <button onClick={() => navigate('/about')} className="hover:text-red-600 transition-colors duration-300">
                    About Us
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
                <a href="https://www.facebook.com/share/1FHbzcrj9v/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
                  Facebook
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
