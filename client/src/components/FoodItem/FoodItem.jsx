import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
import "./FoodItem.css";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, AddToCart, RemoveFromCart } = useContext(StoreContext);
  return (
    <>
      <div className="food-item">
        <div className="food-item-image-container">
          <img src={image} alt="image" className="food-item-image" />
          <div className="item-count">
            {!cartItems[id] ? (
              <img
                className="add"
                onClick={() => AddToCart(id)}
                src={assets.add_icon_white}
              />
            ) : (
              <div className="food-item-counter">
                <img
                  onClick={() => RemoveFromCart(id)}
                  src={assets.remove_icon_red}
                  alt="remove_icoc"
                />
                <p>{cartItems[id]}</p>
                <img
                  onClick={() => AddToCart(id)}
                  src={assets.add_icon_green}
                  alt="add_icon"
                />{" "}
              </div>
            )}
          </div>

          <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="alt" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Prop validation
FoodItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
