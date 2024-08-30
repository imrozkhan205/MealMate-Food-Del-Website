import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getDiscountedTotal, getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required/>
        </div>
        <input type="email" placeholder="Email Address" required/>
        <input type="text" placeholder="Street"required />
        <div className="multi-fields">
          <input type="text" placeholder="City"required />
          <input type="text" placeholder="State"required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required/>
          <input type="text" placeholder="Country"required />
        </div>
        <input type="text" placeholder="Phone"required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getDiscountedTotal()}</p> {/* Display discounted subtotal */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getDiscountedTotal() === 0 ? 0 : 2}</p> {/* Adjust delivery fee based on subtotal */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getDiscountedTotal() === 0 ? 0 : getDiscountedTotal() + 2}</b> {/* Calculate total including delivery */}
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
