import "./menu-item.css";
import foodstuff from "../resources/images/foodstuffs.png";

function MenuItem({ pics, title, background }) {
  return (
    <div
      className="menuItemParent"
      style={{ backgroundColor: background ? "inherit" : "" }}
    >
      <a href={title}>
        <img src={pics} alt="" className="rounded-circle" />
        {title}
      </a>
    </div>
  );
}

export default MenuItem;
