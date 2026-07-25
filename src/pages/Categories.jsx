import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CategoryCard } from '../components/CategoryCard';
import { categoriesList } from '../data/perfumes';

export function Categories() {
  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Categories' }]} />

        <div className="section-header">
          <div className="section-subtitle">Curated Olfactory Realms</div>
          <h2 className="section-title">Fragrance Categories</h2>
          <p className="section-description">
            Explore our artisanal perfume categories tailored for every mood, season, and occasion.
          </p>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {categoriesList.slice(1).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

