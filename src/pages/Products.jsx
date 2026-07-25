import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Pagination } from '../components/Pagination';
import { EmptyState } from '../components/EmptyState';
import { Breadcrumb } from '../components/Breadcrumb';
import { useProducts } from '../context/ProductsContext';

export function Products() {
  const { filteredProducts, resetFilters } = useProducts();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        {/* Breadcrumb Path */}
        <Breadcrumb items={[{ label: 'All Fragrances' }]} />

        {/* Page Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: 'var(--text-white)' }}>
            Haute Parfumerie Catalog
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Showing {filteredProducts.length} luxury perfumes handcrafted with authentic natural essences.
          </p>
        </div>

        {/* Live Search Bar */}
        <div style={{ marginBottom: '36px', maxWidth: '700px' }}>
          <SearchBar placeholder="ابحث بالاسم أو العلامة أو الملاحظات (عود، ورد، زعفران، فانيليا)..." />
        </div>

        {/* Main Products Grid Layout */}
        <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
          {/* Left Sidebar Filter */}
          <FilterSidebar />

          {/* Right Product Grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <EmptyState
                title="No Fragrances Found"
                description="We couldn't find any perfumes matching your exact search filters. Try widening your price range or clearing filters."
                actionText="Reset All Filters"
                onActionClick={resetFilters}
              />
            ) : (
              <>
                <div
                  className="grid-3"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
                >
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default Products;

