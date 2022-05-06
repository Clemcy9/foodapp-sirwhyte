import Item from "../components/items";
import "./promo.css";
import banana from "../resources/images/banana.png";
import tomato from "../resources/images/tomato.png";
import oat from "../resources/images/oat.png";

function Promo({ heading, amount, quauntity }) {
  return (
    <div className="container mx-auto  promoParent justify-content-center row">
      <Item title="tomato" pics={tomato} rating="3.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "7%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="oat" pics={oat} rating="3.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "30%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="banana" pics={banana} rating="3">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "50%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="tomato" pics={tomato} rating="2.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="tomato" pics={tomato} rating="3.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "7%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="oat" pics={oat} rating="3.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "30%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="banana" pics={banana} rating="3">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "50%", height: "10px" }}
          ></div>
        </div>
      </Item>
      <Item title="tomato" pics={tomato} rating="2.5">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </Item>
    </div>
  );
}

export default Promo;
