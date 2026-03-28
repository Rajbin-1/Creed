import { ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';

export default function CartBadge() {
  const { totalItems } = useCart();

  if (totalItems === 0) {
    return null;
  }

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
    >
      <ShoppingCart className="w-5 h-5 text-red-600" />
      <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-red-600/50">
        {totalItems}
      </span>
    </Link>
  );
}
