import "./hero.css";
import pic1 from "../resources/images/frame1.png";
import pic2 from "../resources/images/frame2.png";
import pic3 from "../resources/images/frame3.png";

function Hero() {
  return (
    <div className="parentHero">
      <div className="container">
        <div className="row">
          <div className="col child1">
            <div className="row gchild1">
              <img src={pic1} className="img-fluid" alt="" />
            </div>
            <div className="row mt-5 gchild2">
              <img src={pic3} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col child2">
            <img src={pic2} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
