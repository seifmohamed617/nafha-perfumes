import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export function RatingStars({ rating = 5, reviewsCount, size = 16, showScore = true }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', color: 'var(--gold-light)' }}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" stroke="none" />
        ))}
        {hasHalfStar && <StarHalf size={size} fill="currentColor" stroke="none" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={size} color="var(--text-dim)" strokeWidth={1.5} />
        ))}
      </div>
      {showScore && (
        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '4px', fontWeight: 500 }}>
          {rating.toFixed(1)} {reviewsCount !== undefined && `(${reviewsCount})`}
        </span>
      )}
    </div>
  );
}

export default RatingStars;

