import React, { useState, useMemo } from 'react';
import { menuItems, categories } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import Filter from '../components/Filter';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">NomNom <span className="text-danger"> Express</span></h1>
        <p className="">Choose from our variety of delicious dishes</p>
      </div>
      <Filter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
      />
      <div className="row">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
