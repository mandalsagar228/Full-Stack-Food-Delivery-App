import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, RemoveFromCart, GetTotalCartItem } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="cart">
        <div className="cart-item">
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
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />

                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => RemoveFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="cart-bottom ">
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
          <button
            className="cart-total-button"
            onClick={() => navigate("/placeorder")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode,enter it here.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
