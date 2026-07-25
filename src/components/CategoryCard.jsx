import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, User, Heart, Users, Crown, Feather, Sun, Flame, Gem } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

const iconMap = {
  Sparkles,
  User,
  Heart,
  Users,
  Crown,
  Feather,
  Sun,
  Flame,
  Gem
};

const categoryImages = {
  Men: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
  Women: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
  Unisex: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80',
  Arabic: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
  French: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
  Summer: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
  Winter: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80',
  'Luxury Collection': 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80'
};

export function CategoryCard({ category }) {
  const navigate = useNavigate();
  const { setSelectedCategory } = useProducts();

  const IconComponent = iconMap[category.icon] || Sparkles;
  const bgImage = categoryImages[category.id] || categoryImages['Men'];

  const handleClick = () => {
    setSelectedCategory(category.id);
    navigate('/products');
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <div
        className="category-card-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="category-card-overlay">
        <div className="category-icon-box">
          <IconComponent size={22} />
        </div>
        <h3 className="category-card-title">{category.name}</h3>
        <p className="category-card-count">{category.count} Fragrances</p>
      </div>
    </div>
  );
}

export default CategoryCard;

