import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Navbar Component - Reusable Navigation Bar
 * Mobile-optimized with hamburger menu for better UX
 * Desktop: Full horizontal navigation
 * Mobile: Collapsible menu with smooth scrolling
 */

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-600/30">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
              alt="Creed Lifestyle Nepal Logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-sm tracking-widest uppercase hidden sm:inline">Creed</span>
          </a>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                  currentPage === item.path
                    ? 'text-red-600'
                    : 'hover:text-red-600'
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex items-center justify-center w-10 h-10 hover:bg-red-600/10 rounded-sm transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={20} className="text-red-600" />
          ) : (
            <Menu size={20} className="text-red-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-red-600/30 bg-black/95 backdrop-blur-sm max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="container px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors duration-200 ${
                    currentPage === item.path
                      ? 'bg-red-600/20 text-red-600'
                      : 'hover:bg-red-600/10 text-gray-300 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
