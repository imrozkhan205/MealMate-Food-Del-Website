import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, getDiscountedTotal, applyPromoCode,url } = useContext(StoreContext);
  const navigate = useNavigate();

  const promoCodes = [
    { code: "SAVE10", discount: 10 },
    { code: "DISCOUNT5", discount: 5 },
    { code: "FREESHIP", discount: 2 },
  ];

  const [promoCodeError, setPromoCodeError] = useState("");

  const handlePromoSelect = (code) => {
    const promo = promoCodes.find((p) => p.code === code);
    if (promo) {
      applyPromoCode(promo); // Apply the promo code here
      setPromoCodeError("");
    } else {
      setPromoCodeError("Invalid promo code");
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getDiscountedTotal()}</p> {/* Display discounted total */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getDiscountedTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getDiscountedTotal() === 0 ? 0 : getDiscountedTotal() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, select one below:</p>
            <div className="cart-promocode-select">
              <select onChange={(e) => handlePromoSelect(e.target.value)}>
                <option value="">Select Promo Code</option>
                {promoCodes.map((promo, index) => (
                  <option key={index} value={promo.code}>
                    {promo.code} - {promo.discount}% off
                  </option>
                ))}
              </select>
            </div>
            {promoCodeError && <p className="promo-error">{promoCodeError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
