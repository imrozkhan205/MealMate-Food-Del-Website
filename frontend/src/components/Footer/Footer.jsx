import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo-footer" src={assets.foodlogo2} alt="" />
          <p>
            MealMate - Your Foodie Friend 🍲
            <br />
            Hungry? We've got your back! Whether you’re craving something cheesy, spicy, or sweet, MealMate is here to make sure you never go hangry. 🍕🌮🍩
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61564434071386" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9653451490</li>
            <li onClick={handleContactUsClick} className="footer-link">
              Contact Us
            </li>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJQwcpNBcLkkQBWwvJCtCVTDpqSXkLjfdVWQnTSGbcnzfrNWggmxrQjNKrjKjdcDJTZv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>contact@mealmate.com</li>
            </a>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © MealMate.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
