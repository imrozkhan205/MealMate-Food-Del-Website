import React, { useState, useEffect } from 'react';
import './Header.css';
import biryani from '../../../assets/biryani.jpg'
import paneer from '../../../assets/paneer.jpg'
import burger from '../../../assets/burger.jpg'
import pizza from '../../../assets/pizza.jpg'
import chickenroll from '../../../assets/chickenroll.jpg'


const images = [
  biryani,paneer, burger,pizza,chickenroll
  
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className='header'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="header-contents">

        <h2>Order your <br></br>favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable <br></br> array of dishes
          crafted with the finest ingredients <br></br> to satisfy your cravings and
          elevate your dining experience,<br></br> one delicious meal at a time.
        </p>
        <div className="slider-buttons">
          <button className='prev-button' onClick={handlePrev}>⬅️ Previous</button>
          <button className='next-button' onClick={handleNext}>Next ➡️</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
