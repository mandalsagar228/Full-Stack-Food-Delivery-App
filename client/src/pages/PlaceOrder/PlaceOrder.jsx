import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { GetTotalCartItem } = useContext(StoreContext);

  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Dielivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multifields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotals</p>
                <p>${GetTotalCartItem()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{GetTotalCartItem() ? +2 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${GetTotalCartItem() + (GetTotalCartItem() ? +2 : 0)}</p>
              </div>
            </div>
            <button className="cart-total-button">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
