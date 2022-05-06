import Item from "../components/items";
import "./hotdeals.css";

import banana from "../resources/images/banana.png";
import tomato from "../resources/images/tomato.png";
import oat from "../resources/images/oat.png";

function Foodstuffs() {
  return (
    <div className="hotdealsParent mx-auto container">
      <div className="child1" style={{ background: "#ECFFFF" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <p>Food Stuffs</p>
          <a href="#" style={{ color: "black" }}>
            See more
          </a>
        </div>
      </div>
      <div className="mx-auto child2 container  row justify-content-center">
        <Item title="banana" pics={banana} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="tomato" pics={tomato} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="oat" pics={oat} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="banana" pics={banana} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="banana" pics={banana} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="tomato" pics={tomato} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="oat" pics={oat} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
        <Item title="banana" pics={banana} rating="3">
          <button className="btn ">Add to Cart</button>
        </Item>
      </div>
    </div>
  );
}

export default Foodstuffs;
