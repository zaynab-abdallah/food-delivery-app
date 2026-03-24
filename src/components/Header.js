import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="ms-2">NomNom Express</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
          </ul>
          <Link to="/checkout" className="btn btn-light position-relative">
            🛒 Cart
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark cart-badge">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
