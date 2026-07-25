import React from 'react';
import { formatPrice } from '../utils/formatters';

export function PriceSlider({ min = 0, max = 500, value, onChange }) {
  const [minVal, maxVal] = value || [min, max];

  const handleMaxChange = (e) => {
    const val = Number(e.target.value);
    onChange([minVal, val]);
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.88rem' }}>
        <span style={{ color: 'var(--text-muted)' }}>Price Range:</span>
        <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
          {formatPrice(minVal)} - {formatPrice(maxVal)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={10}
        value={maxVal}
        onChange={handleMaxChange}
        style={{
          width: '100%',
          accentColor: 'var(--gold-primary)',
          cursor: 'pointer',
          height: '6px'
        }}
      />
    </div>
  );
}

export default PriceSlider;

