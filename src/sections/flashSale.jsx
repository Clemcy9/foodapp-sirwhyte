import "./flashSale.css";
import flash from "../resources/images/flash.png";
import MenuItem from "../components/menu-item";

function FlashSale() {
  return (
    <div className="flashParent">
      <div className="child1 container d-flex justify-content-between align-items-center">
        <MenuItem pics={flash} title="Flash Sales" background={true}></MenuItem>
        <p style={{ margin: "auto" }}>Time Left: 12h : 23m : 23s</p>
        <a href="#">See all</a>
      </div>
    </div>
  );
}

export default FlashSale;
