import "./menu.css";
import food from "../resources/images/foodstuffs.png";
import toilet from "../resources/images/toiletries.png";
import drink from "../resources/images/drink.png";
import MenuItem from "../components/menu-item";
import left from "../resources/images/left.png";
import right from "../resources/images/right.png";

function Menu() {
  return (
    <div className="menuParent d-flex justify-content-between">
      <img src={left} alt="" />
      <div className="child1 d-flex justify-content-around">
        <MenuItem pics={food} title="Foodstuffs"></MenuItem>
        <MenuItem pics={toilet} title="Toiletries"></MenuItem>
        <MenuItem pics={drink} title="Drinks"></MenuItem>
        <MenuItem pics={drink} title="Drinks"></MenuItem>
        <MenuItem pics={drink} title="Drinks"></MenuItem>
      </div>
      <img src={right} alt="" />
    </div>
  );
}

export default Menu;
