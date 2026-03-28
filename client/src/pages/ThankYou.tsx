import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle, Instagram, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ThankYou() {
  const [location, navigate] = useLocation();
  
  // Parse query params to determine where to redirect
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const url = params.get('url');

  useEffect(() => {
    if (!url) return;

    const timer = setTimeout(() => {
      window.location.href = decodeURIComponent(url);
    }, 3000);

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
      <Navbar currentPage="/thank-you" />
      
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-md w-full text-center space-y-8 py-20">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-pulse"></div>
              <CheckCircle className="w-20 h-20 text-red-600 relative z-10" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Thank You!
            </h1>
            <p className="text-gray-400 text-sm sm:text-base uppercase tracking-widest">
              Your order request has been prepared
            </p>
          </div>

          <div className="p-6 border border-red-600/30 bg-red-600/5 rounded-sm space-y-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              {type === 'instagram' 
                ? "We've copied your order details to the clipboard. You'll be redirected to Instagram in a few seconds to paste and send your message."
                : "You're being redirected to Daraz to complete your purchase."}
            </p>
            
            <div className="flex items-center justify-center gap-3 text-red-600">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <a 
              href={url ? decodeURIComponent(url) : '#'}
              className="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-xs uppercase tracking-widest rounded-sm transition-all duration-200 active:scale-95"
            >
              {type === 'instagram' ? <Instagram size={16} /> : <ShoppingBag size={16} />}
              Redirecting Now...
            </a>
            
            <button 
              onClick={() => navigate('/products')}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-red-600/30 py-8">
        <div className="container px-4 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            &copy; 2026 Creed Lifestyle Nepal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
