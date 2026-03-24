import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-4 fw-bold">NomNom Express</h5>
            <p className="text-secondary mb-3">
              Order your favorite meals from the comfort of your home. We deliver fresh,
              delicious food straight to your door with fast and reliable service.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white text-decoration-none">Facebook</a>
              <a href="#" className="text-white text-decoration-none">Instagram</a>
              <a href="#" className="text-white text-decoration-none">Twitter</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase mb-4 fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/menu" className="text-secondary text-decoration-none">Menu</Link></li>
              <li className="mb-2"><Link to="/checkout" className="text-secondary text-decoration-none">Checkout</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase mb-4 fw-bold">Contact Us</h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">📞 +1 (555) 123-4567</li>
              <li className="mb-2">✉️ support@fooddelivery.com</li>
              <li className="mb-2">📍 123 Main Street, City, State 12345</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase mb-4 fw-bold">Opening Hours</h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Mon - Fri: 10:00 AM - 11:00 PM</li>
              <li className="mb-2">Saturday: 11:00 AM - 12:00 AM</li>
              <li className="mb-2">Sunday: 12:00 PM - 10:00 PM</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-0 small">
              © {currentYear} NomNom Express. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="text-secondary mb-0 small">
              Free delivery on orders over $25 • Minimum order $10
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
