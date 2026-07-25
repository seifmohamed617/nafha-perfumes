import React from 'react';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProductsProvider } from './context/ProductsContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { AppRouter } from './router/AppRouter';
import './styles/index.css';

export function App() {
  return (
    <ToastProvider>
      <ThemeProvider>
        <ProductsProvider>
          <WishlistProvider>
            <CartProvider>
              <AppRouter />
            </CartProvider>
          </WishlistProvider>
        </ProductsProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;

