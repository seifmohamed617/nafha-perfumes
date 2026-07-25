import React, { createContext, useContext, useState, useMemo } from 'react';
import { perfumes } from '../data/perfumes';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // newest | highestRated | priceLowHigh | priceHighLow

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return perfumes.filter((product) => {
      // 1. Search Query (matching name, brand, category, topNotes, middleNotes, baseNotes, description)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesNotes = [
          ...(product.topNotes || []),
          ...(product.middleNotes || []),
          ...(product.baseNotes || [])
        ].some((note) => note.toLowerCase().includes(query));

        if (!matchesName && !matchesBrand && !matchesCategory && !matchesNotes) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // 3. Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // 4. Rating Filter
      if (product.rating < minRating) {
        return false;
      }

      // 5. Stock Filter
      if (inStockOnly && product.stock <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceLowHigh') return a.price - b.price;
      if (sortBy === 'priceHighLow') return b.price - a.price;
      if (sortBy === 'highestRated') return b.rating - a.rating;
      // Default: newest / id desc
      return b.id - a.id;
    });
  }, [searchQuery, selectedCategory, priceRange, minRating, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 500]);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('newest');
  };

  return (
    <ProductsContext.Provider
      value={{
        products: perfumes,
        filteredProducts,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        minRating,
        setMinRating,
        inStockOnly,
        setInStockOnly,
        sortBy,
        setSortBy,
        resetFilters
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}

