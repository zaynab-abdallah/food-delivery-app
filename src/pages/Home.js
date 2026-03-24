import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import SidebarFoodCard from '../components/SidebarFoodCard';

const featuredItems = menuItems.slice(0, 6);

const Home = () => {
  return (
    <div>
      {/* Hero Row */}
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="py-3 text-center mb-3">
                <h1 className="display-4 fw-bold mb-4">
                  NomNom
                  <span className="text-danger"> Express</span>
                </h1>
                <p className="fs-5 fw-normal mb-4 lh-lg">
                  Zooming your food quickly to your door.
                  <br />
                  Emphasizes both deliciousness and speed.
                  <br />
                  Your friendly companion for meals.
                </p>
                <Link to="/menu" className="btn btn-danger btn-lg px-3">
                  Browse Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar - Full width under the hero row */}
      <section className="w-100  py-4 border-top border-bottom">
        <div className="container-fluid px-4">
          <h5 className="mb-3 fw-bold px-2">Featured Items</h5>
          <div className="row g-3">
            {featuredItems.map((item) => (
              <div key={item.id} className="col-6 col-sm-4 col-lg-2">
                <SidebarFoodCard item={item} />
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/menu" className="btn btn-outline-danger btn-sm">
              View All Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-danger h-100 text-center">
                <span className="display-4 d-block mb-2">🚀</span>
                <h5>Fast Delivery</h5>
                <p className="text-light small mb-0">We deliver your order in 30-45 minutes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-danger h-100 text-center">
                <span className="display-4 d-block mb-2">🍽️</span>
                <h5>Wide Variety</h5>
                <p className="text-light small mb-0">From pizzas to pasta, burgers to breakfast.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-danger h-100 text-center">
                <span className="display-4 d-block mb-2">✨</span>
                <h5>Fresh Ingredients</h5>
                <p className="text-light small mb-0">We use only the freshest ingredients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-danger">
        <div className="container mb-5 text-center">
          <h2 className="mb-3">Ready to Order?</h2>
          <p className="text-light mb-4">Start browsing our menu and get your favorite food delivered.</p>
          <Link to="/menu" className="btn btn-light btn-lg mb-3">View Full Menu</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
