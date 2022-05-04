import Item from "../components/items";
import "./promo.css";
import banana from "../resources/images/banana.png";
import tomato from "../resources/images/tomato.png";
import oat from "../resources/images/oat.png";

function Promo({ heading, amount, quauntity }) {
  return (
    <div className="container mx-auto promoParent d-flex  justify-content-between row">
      <div className="content ">
        <Item title="banana" pics={banana} rating="4.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="oat" pics={oat} rating="3.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="tomato" pics={tomato} rating="2.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="banana" pics={banana} rating="4.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="tomato" pics={tomato} rating="2.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="oat" pics={oat} rating="3.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="tomato" pics={tomato} rating="2.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="banana" pics={banana} rating="4.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="content ">
        <Item title="tomato" pics={tomato} rating="2.5"></Item>
        <div>
          <p>{heading} Foreign perboiled rice.</p>
          <p>{quauntity} 500g</p>
          <p style={{ color: "#D55015" }}>{amount} N2055</p>
        </div>
        <p style={{ margin: "0em" }}>1 items left</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger"
            style={{ width: "70%", height: "10px" }}
          ></div>
        </div>
      </div>

      {/* <Item title="tomato" pics={tomato} rating="3.5"></Item>
      <Item title="oat" pics={oat} rating="3.5"></Item>
      <Item title="banana" pics={banana} rating="3"></Item>
      <Item title="tomato" pics={tomato} rating="2.5"></Item>
      <Item title="banana" pics={banana} rating="4.5"></Item>
      <Item title="tomato" pics={tomato} rating="3.5"></Item>
      <Item title="oat" pics={oat} rating="3.5"></Item>
      <Item title="banana" pics={banana} rating="3"></Item>
      <Item title="tomato" pics={tomato} rating="2.5"></Item> */}
    </div>
  );
}

export default Promo;
