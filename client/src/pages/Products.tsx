import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Zap, Droplet, Scissors, ShoppingBag, Instagram, Plus, Minus } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

/**
 * Products Page with Instagram Order System
 * Pre-filled messages with product details, price, timestamp, username, and location
 * 
 * UX IMPROVEMENTS:
 * - Clarified that users need to send the message themselves
 * - Instagram button redirects to Creed's account with message copied to clipboard
 * - Added location field for better order tracking
 * - Message includes: product, price, time, username, and location
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
}

export default function Products() {
  const [, navigate] = useLocation();
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const usernameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Hair Volumizing Powder',
      feature: 'Instant Lift & All-Day Matte Hold',
      price: 'Rs. 1,499',
      priceNPR: 1499,
      icon: Zap,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-powder_a39967b7.jpg',
      darazLink: 'https://www.daraz.com.np/products/creed-hair-volumizing-powder',
      description: 'Instant volume without greasiness. Perfect for daily use and all-day hold.',
    },
    {
      id: 2,
      name: 'Ball & Body Trimmer',
      feature: 'All-in-One Waterproof Grooming Tool',
      price: 'Rs. 3,299',
      priceNPR: 3299,
      icon: Scissors,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-trimmer_12027949.jpg',
      darazLink: 'https://www.daraz.com.np/products/creed-ball-body-trimmer',
      description: 'Waterproof, 7000 RPM, 16 dial lengths. Perfect for smooth trimming.',
    },
    {
      id: 3,
      name: 'Silicone Scalp Massager',
      feature: 'Soft food-grade silicone to boost circulation',
      price: 'Rs. 1,050',
      priceNPR: 1050,
      icon: Droplet,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-massager_36df39c6.jpg',
      darazLink: 'https://www.daraz.com.np/products/creed-scalp-massager',
      description: 'Boosts blood circulation. Reduces hair fall and promotes scalp health.',
    },
    {
      id: 4,
      name: 'Body Exfoliator',
      feature: 'Original Viscose Fiber Glove for deep skin renewal',
      price: 'Rs. 1,099',
      priceNPR: 1099,
      icon: Zap,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/creed-exfoliator_c21280b1.png',
      darazLink: 'https://www.daraz.com.np/products/creed-body-exfoliator',
      description: 'Deep exfoliation for smoother skin. Unclogs pores and reduces ingrown hairs.',
    },
  ];

  const handleInstagramOrder = (product: Product) => {
    // Validate username
    if (!username.trim()) {
      toast.error('Please enter your Instagram username');
      usernameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      usernameRef.current?.focus();
      return;
    }

    // Validate location
    if (!location.trim()) {
      toast.error('Please enter your location');
      locationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      locationRef.current?.focus();
      return;
    }

    const quantity = quantities[product.id] || 1;
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const userInfo = username.trim();
    const locationInfo = location.trim();
    const totalPrice = product.priceNPR * quantity;

    const message = `Hi Creed Lifestyle! 🙋‍♂️

I'd like to order:
📦 Product: ${product.name}
📊 Quantity: ${quantity}
💰 Price per unit: Rs. ${product.priceNPR}
💵 Total: Rs. ${totalPrice}
📍 Location: ${locationInfo}
👤 Username: ${userInfo}
⏰ Time: ${timestamp}

Please confirm availability and delivery details. Thanks!`;

    // Copy message to clipboard for easy pasting
    navigator.clipboard.writeText(message).then(() => {
      toast.success('Order message copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy message');
    });

    // Redirect to Creed's Instagram account
    const instagramLink = 'https://www.instagram.com/thecreedlifestyle/';
    
    window.open(instagramLink, '_blank');
  };

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[productId] || 1) + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/products" />

      {/* Page Header */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
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

      {/* Order Information Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-black border-b border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Username Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  Your Instagram Username
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  placeholder="@yourusername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-red-600/30 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors duration-200"
                />
                <p className="text-xs text-gray-400">
                  This will be included in your order message for tracking.
                </p>
              </div>

              {/* Location Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  Your Location (City/Area)
                </label>
                <input
                  ref={locationRef}
                  type="text"
                  placeholder="e.g., Kathmandu, Pokhara"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-red-600/30 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors duration-200"
                />
                <p className="text-xs text-gray-400">
                  General location for delivery coordination.
                </p>
              </div>

              {/* Clarification Note */}
              <div className="p-4 border border-red-600/30 bg-red-600/5 rounded-sm">
                <p className="text-xs text-gray-300 leading-relaxed">
                  <span className="font-bold text-red-600">How to Order via Instagram:</span> Click the button below to visit Creed's Instagram. Your order message will be copied to your clipboard. Open their DMs and paste the message to send your order request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 sm:py-20 lg:py-28 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group relative overflow-hidden border border-red-600/30 bg-black hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/50">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.feature} - Creed Lifestyle Nepal`}
                      title={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="relative z-10 space-y-6 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300" title="Product Category">
                        <Icon className="w-5 h-5 text-red-600 group-hover:text-white" aria-label={product.feature} />
                      </div>
                      <span className="text-xs font-bold text-red-600/70 uppercase tracking-widest">Premium</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{product.feature}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-red-600/20">
                      <span className="text-xl sm:text-2xl font-bold text-red-600">{product.price}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 pt-4 border-t border-red-600/30">
                      <span className="text-xs text-gray-400 uppercase tracking-widest">Qty:</span>
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600 hover:bg-red-600/10 transition-colors duration-200 rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} className="text-red-600" />
                      </button>
                      <span className="w-8 text-center font-bold text-red-600">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600 hover:bg-red-600/10 transition-colors duration-200 rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} className="text-red-600" />
                      </button>
                    </div>

                    {/* Order Buttons */}
                    <div className="space-y-3 pt-4">
                      <button
                        onClick={() => handleInstagramOrder(product)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-wider active:scale-95 px-4 py-3"
                      >
                        <Instagram size={14} />
                        Message on Instagram
                      </button>

                      <a
                        href={product.darazLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 border border-red-600/50 text-red-600 hover:bg-red-600/10 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-wider active:scale-95 px-4 py-3"
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

      {/* Footer */}
      <footer className="border-t border-red-600/30 bg-black py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
                  alt="Creed"
                  className="w-6 h-6 rounded-full"
                />
                <h3 className="font-bold text-sm uppercase tracking-widest">Creed Lifestyle</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed text-sm">
                Premium men's grooming for the modern man.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
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
              <h4 className="font-bold mb-3 text-xs uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/thecreedlifestyle/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-xs">
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
