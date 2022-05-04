import "./nav.css";
import car from "../resources/images/foodcar.png";
import help from "../resources/images/warning.png";
import heart from "../resources/images/heart.png";
import contact from "../resources/images/contact.png";
import cart from "../resources/images/cart.png";

function Nav() {
  return (
    <div className="d-flex navParent justify-content-around align-items-center">
      <div className="child1 d-flex  align-items-center">
        <div className=" ">
          <i className="drop-menu fa fa-bars" aria-hidden="true"></i>
        </div>
        <div>
          <a href="#">
            <img src={car} alt="" />
          </a>
        </div>
      </div>
      <div className="child2 d-flex justify-content-center align-items-center">
        {/* <form action=""> */}
        <input
          type="text"
          className="search-icon form-control"
          placeholder="Search for Grocery items"
        />
        {/* </form> */}
        <button className="btn btn-outline-info">
          <i className="fa fa-map-marker"></i> Location
        </button>
      </div>
      <div className="child3 d-flex align-items-center justify-content-around">
        <a href="#" className="d-flex align-items-center my-auto flex-column">
          <img src={help} alt="" />
          Help
        </a>

        <a href="#" className="d-flex align-items-center flex-column ">
          <img src={cart} alt="" />
          Cart
        </a>

        <a href="#" className="d-flex align-items-center flex-column">
          <img src={heart} alt="" />
          Saved
        </a>

        <a href="#" className="d-flex align-items-center flex-column">
          <img src={contact} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
