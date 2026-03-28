import { useEffect, useState } from 'react';

export interface StockProduct {
  id: string;
  name: string;
  stock: 'in-stock' | 'out-of-stock' | 'low-stock';
  quantity: number;
  isCombo?: boolean;
}

export interface StockData {
  lastUpdated: string;
  products: Record<string, StockProduct>;
}

/**
 * Custom hook to fetch and manage product stock data
 * This is the SINGLE SOURCE OF TRUTH for product availability
 * Fetches from client/public/stock.json on every page load
 */
export function useStock() {
  const [stock, setStock] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setLoading(true);
        const response = await fetch('/stock.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch stock: ${response.statusText}`);
        }
        const data: StockData = await response.json();
        setStock(data);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        console.error('Stock fetch error:', errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  const getProductStock = (productId: string): StockProduct | undefined => {
    return stock?.products[productId];
  };

  const isInStock = (productId: string): boolean => {
    const product = getProductStock(productId);
    return product?.stock === 'in-stock' && (product?.quantity ?? 0) > 0;
  };

  const getStockStatus = (productId: string): string => {
    const product = getProductStock(productId);
    if (!product) return 'Unknown';
    if (product.stock === 'out-of-stock') return 'Out of Stock';
    if (product.stock === 'low-stock') return `Only ${product.quantity} left`;
    return `${product.quantity} in stock`;
  };

  return {
    stock,
    loading,
    error,
    getProductStock,
    isInStock,
    getStockStatus,
  };
}
