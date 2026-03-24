import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = ({ showCheckoutButton = true }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="text-center py-5">
        <h4 className="text-muted">Your cart is empty</h4>
        <p className="text-muted">Add some items from the menu!</p>
        <Link to="/menu" className="btn btn-danger">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="cart-content">
      <div className="list-group mb-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center flex-grow-1">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="ms-3">
                <h6 className="mb-0">{item.name}</h6>
                <small className="text-muted">${item.price.toFixed(2)} × {item.quantity}</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="btn-group btn-group-sm">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="btn btn-outline-secondary disabled">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
                title="Remove"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-top pt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Total:</h5>
          <h5 className="text-danger">${cartTotal.toFixed(2)}</h5>
        </div>
        {showCheckoutButton && (
          <Link to="/checkout" className="btn btn-danger w-100">
            Proceed to Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
