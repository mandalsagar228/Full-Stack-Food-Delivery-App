import { menu_list } from "../../assets/assets";
import "./ExplorMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          Choose from a divers menu featuring a delectable array
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt="menu-image"
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </>
  );
};

export default ExploreMenu;
