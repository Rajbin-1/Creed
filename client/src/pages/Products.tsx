import { Link } from 'wouter';
import { Zap, Droplet, Scissors, ShoppingBag, Plus, Minus, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import { useCart } from '@/contexts/CartContext';
import { useLocation } from '@/contexts/LocationContext';

/**
 * Products Page with Shopping Cart & Daraz Integration
 */

interface Product {
  id: number;
  name: string;
  feature: string;
  price: string;
  priceNPR: number;
  icon: any;
  image: string;
  darazId: string;
  darazWebLink: string;
  description: string;
}

export default function Products() {
  const { addToCart } = useCart();
  const { location, setLocation, requestLocation, isLoadingLocation } = useLocation();
  const [quantities, setQuantities] = useState<Record<number, number>>({});
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
      darazId: '131103607',
      darazWebLink: 'https://www.daraz.com.np/products/creed-hair-volumizing-powder-i131103607.html',
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
      darazId: '131102927',
      darazWebLink: 'https://www.daraz.com.np/products/creed-back-scrubber-i131102927.html',
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
      darazId: '419080369',
      darazWebLink: 'https://www.daraz.com.np/products/creed-silicone-scalp-massager-i419080369.html',
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
      darazId: '418959547',
      darazWebLink: 'https://www.daraz.com.np/products/creed-exfoliator-glove-i418959547.html',
      description: 'Deep exfoliation for smoother skin. Unclogs pores and reduces ingrown hairs.',
    },
  ];

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceNPR,
      quantity,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const handleViewOnDaraz = (product: Product) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const deepLink = `daraz://www.daraz.com.np/products/i${product.darazId}.html`;
      window.location.href = deepLink;
      setTimeout(() => {
        window.open(product.darazWebLink, '_blank');
      }, 500);
    } else {
      window.open(product.darazWebLink, '_blank');
    }
  };

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/products" />

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

      {/* Location Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-black border-b border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-300 flex items-center gap-2">
                <MapPin size={16} className="text-red-600" />
                Your Location (City/Area)
              </label>
              <div className="flex gap-2">
                <input
                  ref={locationRef}
                  type="text"
                  placeholder="e.g., Kathmandu, Pokhara"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-3 bg-black border border-red-600/30 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors duration-200"
                />
                <button
                  onClick={requestLocation}
                  disabled={isLoadingLocation}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors duration-200"
                >
                  {isLoadingLocation ? 'Detecting...' : 'Auto Detect'}
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We'll use this for delivery coordination.
              </p>
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
                  <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/50">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.feature} - Creed Lifestyle Nepal Premium Grooming`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 space-y-6 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-red-600 group-hover:text-white" />
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
                        className="w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold">{quantities[product.id] || 1}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-[10px] uppercase tracking-widest transition-all duration-200"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleViewOnDaraz(product)}
                        className="flex items-center justify-center gap-2 bg-black border border-red-600 text-red-600 hover:bg-red-600/10 font-bold py-3 text-[10px] uppercase tracking-widest transition-all duration-200"
                      >
                        View on Daraz
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-red-600/30 py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/">
                <a className="flex items-center gap-3">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
                    alt="Creed Lifestyle Nepal Footer Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-bold text-lg tracking-widest uppercase">Creed</span>
                </a>
              </Link>
              <p className="text-xs text-gray-500 uppercase tracking-widest">© 2026 Creed Lifestyle Nepal</p>
            </div>
            
            <div className="flex gap-8">
              <Link href="/"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Home</a></Link>
              <Link href="/products"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Products</a></Link>
              <Link href="/contact"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Contact</a></Link>
            </div>

            <div className="flex gap-6">
              <a href="https://www.instagram.com/creedlifestyle.np/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@creed.lifestyle" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
