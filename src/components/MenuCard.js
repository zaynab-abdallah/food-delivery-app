import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const getFallbackImage = (name) =>
  `https://placehold.co/400x300/e74c3c/ffffff?text=${encodeURIComponent(name)}`;

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);

  const imgSrc = imgError ? getFallbackImage(item.name) : item.image;

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imgSrc}
          className="card-img-top"
          alt={item.name}
          style={{ height: '200px', objectFit: 'cover' }}
          onError={() => setImgError(true)}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text text-muted small flex-grow-1">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold text-danger fs-5">${item.price}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => addToCart(item)}
            >
              + Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
