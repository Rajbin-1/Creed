/**
 * SEO Metadata Utility for Creed Lifestyle Nepal
 * Provides structured data and meta tags for better search engine optimization
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
  robots?: string;
}

const baseUrl = 'https://creed-lifestyle.manus.space';
const siteName = 'Creed Lifestyle Nepal';
const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg';

export const defaultSEO: SEOMetadata = {
  title: 'Creed Lifestyle Nepal - Premium Men\'s Grooming Products',
  description: 'Discover premium men\'s grooming products by Creed Lifestyle Nepal. Hair volumizing powder, body trimmers, scalp massagers, and exfoliators for the modern man.',
  keywords: [
    'mens grooming',
    'hair volumizing powder',
    'body trimmer',
    'scalp massager',
    'body exfoliator',
    'Nepal grooming',
    'premium grooming products',
    'mens care',
    'grooming tools',
  ],
  ogImage: logoUrl,
  ogType: 'website',
  author: 'Creed Lifestyle Nepal',
  robots: 'index, follow',
};

export const pageSEO: Record<string, SEOMetadata> = {
  '/': {
    title: 'Creed Lifestyle Nepal - Premium Men\'s Grooming Products',
    description: 'Discover premium men\'s grooming products by Creed Lifestyle Nepal. Hair volumizing powder, body trimmers, scalp massagers, and exfoliators for the modern man.',
    keywords: [
      'mens grooming',
      'hair volumizing powder',
      'body trimmer',
      'scalp massager',
      'body exfoliator',
      'Nepal grooming',
      'premium grooming products',
    ],
    ogImage: logoUrl,
    ogType: 'website',
    canonical: baseUrl,
  },
  '/products': {
    title: 'Our Collection - Premium Grooming Products | Creed Lifestyle',
    description: 'Browse our collection of premium men\'s grooming products. Hair Volumizing Powder, Ball & Body Trimmer, Silicone Scalp Massager, and Body Exfoliator. Order now via Instagram or Daraz.',
    keywords: [
      'grooming products',
      'hair powder',
      'body trimmer',
      'scalp massager',
      'exfoliator',
      'mens grooming tools',
      'premium grooming',
      'Nepal grooming products',
    ],
    ogImage: logoUrl,
    ogType: 'product.group',
    canonical: `${baseUrl}/products`,
  },
  '/about': {
    title: 'About Creed Lifestyle Nepal - Premium Men\'s Grooming Brand',
    description: 'Learn about Creed Lifestyle Nepal, Nepal\'s premier men\'s grooming brand. Discover our mission, values, and commitment to excellence in grooming products.',
    keywords: [
      'about creed',
      'grooming brand',
      'Nepal grooming',
      'mens lifestyle',
      'premium grooming',
      'creed lifestyle',
    ],
    ogImage: logoUrl,
    ogType: 'website',
    canonical: `${baseUrl}/about`,
  },
  '/reviews': {
    title: 'Customer Reviews - Creed Lifestyle Nepal',
    description: 'Read authentic customer reviews and testimonials about Creed Lifestyle Nepal\'s premium grooming products. See what our customers are saying.',
    keywords: [
      'reviews',
      'customer testimonials',
      'grooming reviews',
      'product reviews',
      'creed reviews',
    ],
    ogImage: logoUrl,
    ogType: 'website',
    canonical: `${baseUrl}/reviews`,
  },
  '/contact': {
    title: 'Contact Us - Creed Lifestyle Nepal',
    description: 'Get in touch with Creed Lifestyle Nepal. Find our contact information, social media channels, and reach out for product inquiries or support.',
    keywords: [
      'contact',
      'customer support',
      'grooming support',
      'creed contact',
      'social media',
    ],
    ogImage: logoUrl,
    ogType: 'website',
    canonical: `${baseUrl}/contact`,
  },
};

export const getPageSEO = (pathname: string): SEOMetadata => {
  return pageSEO[pathname] || defaultSEO;
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: logoUrl,
    description: 'Premium men\'s grooming products for the modern man in Nepal',
    sameAs: [
      'https://www.instagram.com/thecreedlifestyle/',
      'https://www.tiktok.com/@creed.lifestyle',
      'https://www.facebook.com/people/Creed-Lifestyle-Nepal/61579235975991/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: `${baseUrl}/contact`,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Nepal',
    },
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: siteName,
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/products`,
      priceCurrency: 'NPR',
      price: product.price.toString(),
      availability: 'https://schema.org/InStock',
    },
  };
};
