import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const getFallbackImage = (name) =>
  `https://placehold.co/300x200/e74c3c/ffffff?text=${encodeURIComponent(name)}`;

const SidebarFoodCard = ({ item }) => {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);

  const imgSrc = imgError ? getFallbackImage(item.name) : item.image;

  return (
    <div className="card shadow-sm h-100">
      <img
        src={imgSrc}
        className="card-img-top"
        alt={item.name}
        style={{ height: '190px', objectFit: 'cover' }}
        onError={() => setImgError(true)}
      />
      <div className="card-body p-2">
        <h6 className="card-title mb-1 small">{item.name}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-danger small">${item.price}</span>
          <div className="d-flex gap-1">
            <button
              className="btn btn-danger btn-sm py-0 px-1"
              onClick={() => addToCart(item)}
              title="Add to Cart"
            >
              +
            </button>
            <Link to="/menu" className="btn btn-outline-danger btn-sm py-0 px-1" title="View">
              →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFoodCard;
