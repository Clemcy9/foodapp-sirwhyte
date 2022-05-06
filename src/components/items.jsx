import "./items.css";
import love from "../resources/images/loveColor.png";
import star from "../resources/images/star.png";

function Item({ pics, title, rating, heading, quauntity, amount, children }) {
  return (
    <div className="itemParent1 d-flex flex-column mx-1 my-1 align-items-center">
      <div className="itemParent px-2 d-flex flex-column my-2">
        <div className="child1 d-flex justify-content-between align-items-center">
          <img src={love} className="img-fluid" alt="" />
          <p>Promo</p>
        </div>
        <div className="child2 mx-auto">
          <a href={title}>
            <img src={pics} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="child3 d-flex justify-content-end">
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
      <div className="content">
        <p>{heading} Foreign perboiled rice.</p>
        <p>{quauntity} 500g</p>
        <p style={{ color: "#D55015" }}>{amount} N2055</p>
      </div>
      <div className="mb-2" style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  );
}

export default Item;
