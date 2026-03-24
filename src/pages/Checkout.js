import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    deliveryInstructions: '',
    paymentMethod: 'cash'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartCount === 0) return;
    
    console.log('Order placed:', { formData, cart, total: cartTotal });
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow text-center py-5">
              <div className="card-body">
                <span className="display-1 text-success">✅</span>
                <h2 className="mt-3">Order Received!</h2>
                <p className="text-muted">
                  Thank you for your order. We will contact you shortly to confirm delivery.
                </p>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => {
                    setOrderPlaced(false);
                    navigate('/menu');
                  }}
                >
                  Place New Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Checkout</h1>
      <div className="flex items-center justify-content-center">
        <div className={cartCount > 0 ? 'mb-4' : 'mb-4'}>
          <div className="card shadow">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <Cart showCheckoutButton={false} />
            </div>
          </div>
        </div>
        {cartCount > 0 && (
        <div className="">
          <div className="card shadow">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0">Delivery Information</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Delivery Address *</label>
                    <textarea
                      className="form-control"
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address, apartment, suite, etc."
                    />
                  </div>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label className="form-label">City *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label className="form-label">ZIP Code *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        placeholder="12345"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Delivery Instructions (optional)</label>
                    <textarea
                      className="form-control"
                      name="deliveryInstructions"
                      rows="2"
                      value={formData.deliveryInstructions}
                      onChange={handleChange}
                      placeholder="Gate code, building name, floor, etc."
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Payment Method</label>
                    <select
                      className="form-select"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                    >
                      <option value="cash">Cash on Delivery</option>
                      <option value="card">Credit/Debit Card</option>
                      <option value="online">Online Payment</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Total:</h5>
                    <h5 className="text-danger">${cartTotal.toFixed(2)}</h5>
                  </div>
                  <button type="submit" className="btn btn-danger w-100 btn-lg">
                    Place Order
                  </button>
                </form>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
