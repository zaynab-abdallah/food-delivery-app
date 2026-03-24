import React from 'react';

const Filter = ({ categories, activeCategory, onFilter }) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
      {categories.map(cat => (
        <button
          key={cat}
          className={`btn ${activeCategory === cat ? 'btn-danger border-bold' : 'btn-outline-danger fw-bold'}`}
          onClick={() => onFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filter;
