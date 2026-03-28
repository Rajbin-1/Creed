import { Link } from 'wouter';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import { useCart } from '@/contexts/CartContext';
import { useLocation } from '@/contexts/LocationContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { location, setLocation, requestLocation, isLoadingLocation } = useLocation();
  const [username, setUsername] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const handleOrderViaInstagram = () => {
    if (!username.trim()) {
      toast.error('Please enter your Instagram username');
      usernameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      usernameRef.current?.focus();
      return;
    }

    if (!location.trim()) {
      toast.error('Please enter your location');
      locationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      locationRef.current?.focus();
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const itemsList = items
      .map((item) => `📦 ${item.name} x${item.quantity} = Rs. ${item.price * item.quantity}`)
      .join('\n');

    const message = `Hi Creed Lifestyle! 🙋‍♂️

I'd like to order the following items:
${itemsList}

💰 Total: Rs. ${totalPrice}
📍 Location: ${location.trim()}
👤 Username: ${username.trim()}
⏰ Time: ${timestamp}

Please confirm availability and delivery details. Thanks!`;

    navigator.clipboard.writeText(message).then(() => {
      toast.success('Order message copied to clipboard!');
      clearCart();
      setTimeout(() => {
        window.open('https://www.instagram.com/creedlifestyle.np/', '_blank');
      }, 500);
    }).catch(() => {
      toast.error('Failed to copy message');
    });
  };

  const handleViewAllOnDaraz = () => {
    window.open('https://www.daraz.com.np/', '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar currentPage="/cart" />
        
        <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Shopping Cart
              </h1>
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-28 lg:py-36 bg-black">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <ShoppingBag className="w-16 h-16 mx-auto text-red-600/50" />
                <h2 className="text-2xl sm:text-3xl font-bold">Your cart is empty</h2>
                <p className="text-gray-400">Start shopping to add items to your cart</p>
              </div>
              <Link href="/products">
                <a className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200">
                  Continue Shopping
                </a>
              </Link>
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
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/cart" />

      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black border-b border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Review your items before checkout
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-20 lg:py-28 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300 bg-black/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-sm"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-400">Rs. {item.price.toLocaleString()}</p>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 uppercase tracking-widest">Qty:</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-red-600/30 hover:border-red-600 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-red-600/30 hover:border-red-600 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <p className="font-bold text-lg text-red-600">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success('Item removed from cart');
                      }}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary & Checkout */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="p-6 border border-red-600/30 bg-black/50 space-y-4">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <div className="space-y-2 border-t border-red-600/20 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal:</span>
                    <span>Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping:</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-red-600/20 pt-4">
                    <span>Total:</span>
                    <span className="text-red-600">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Location Input */}
              <div className="p-6 border border-red-600/30 bg-black/50 space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  Delivery Location
                </label>
                <div className="flex gap-2">
                  <input
                    ref={locationRef}
                    type="text"
                    placeholder="e.g., Kathmandu"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 px-3 py-2 bg-black border border-red-600/30 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors duration-200 text-sm"
                  />
                  <button
                    onClick={requestLocation}
                    disabled={isLoadingLocation}
                    className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 disabled:bg-red-600/10 text-red-600 font-bold text-xs uppercase tracking-widest rounded-sm transition-colors duration-200"
                  >
                    {isLoadingLocation ? '...' : 'Auto'}
                  </button>
                </div>
              </div>

              {/* Instagram Username */}
              <div className="p-6 border border-red-600/30 bg-black/50 space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  Instagram Username
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  placeholder="@yourusername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-red-600/30 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors duration-200 text-sm"
                />
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleOrderViaInstagram}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200"
                >
                  Order via Instagram
                </button>
                <button
                  onClick={handleViewAllOnDaraz}
                  className="w-full bg-black border border-red-600 text-red-600 hover:bg-red-600/10 font-bold py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200"
                >
                  View on Daraz
                </button>
              </div>

              <Link href="/products">
                <a className="block w-full text-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors py-3">
                  Continue Shopping
                </a>
              </Link>
            </div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
