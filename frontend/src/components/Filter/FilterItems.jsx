import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FilterItems.css';

const FoodListWithPriceFilter = () => {
  const { food_list } = useContext(StoreContext); 
  const [priceRange, setPriceRange] = useState('0');

  const filteredFoods = food_list.filter(item => {
    if (priceRange === '0') return item.price<0;
    if (priceRange === 'low') return item.price < 5;
    if (priceRange === 'medium') return item.price >= 5 && item.price < 10;
    if (priceRange === 'high') return item.price >= 10;
    return true; // 'all' case, show all items
  });

  return (
    <div className="food-list-container">
      <div className="price-filter">
        <h3>Sort by Price</h3>
        <div className="radio-group">

        <label>
            <input
              type="radio"
              value="none"
              checked={priceRange === '0'}
              onChange={() => setPriceRange('0')}
            />
            None
          </label>

          <label>
            <input
              type="radio"
              value="all"
              checked={priceRange === 'all'}
              onChange={() => setPriceRange('all')}
            />
            All Prices
          </label>
          <label>
            <input
              type="radio"
              value="low"
              checked={priceRange === 'low'}
              onChange={() => setPriceRange('low')}
            />
            Low (&lt; $5)
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={priceRange === 'medium'}
              onChange={() => setPriceRange('medium')}
            />
            Medium ($5 - $10)
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={priceRange === 'high'}
              onChange={() => setPriceRange('high')}
            />
            High (&gt; $10)
          </label>
        </div>
      </div>
      <div className="food-items-list">
        {filteredFoods.map(item => (
          <FoodItem
            key={item._id} 
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodListWithPriceFilter;
