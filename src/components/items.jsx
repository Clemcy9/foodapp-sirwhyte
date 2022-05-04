import "./items.css";
import love from "../resources/images/loveColor.png";
import star from "../resources/images/star.png";

function Item({ pics, title, rating }) {
  return (
    <div className="container itemParent d-flex flex-column my-2">
      <div className="child1 d-flex justify-content-between align-items-center">
        <img src={love} className="img-fluid" alt="" />
        <p>Promo</p>
      </div>
      <div className="child2">
        <a href={title}>
          <img src={pics} alt="" />
        </a>
      </div>
      <div className="child3 d-flex justify-content-end ">
        <p>
          <img
            src={star}
            style={{ marginBottom: "0.2em", padding: ".5em" }}
            alt=""
          />
          {rating}
        </p>
      </div>
    </div>
  );
}

export default Item;
