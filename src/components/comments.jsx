import "./comments.css";
import stars from "../resources/images/star.png";
import profile from "../resources/images/profilePic.png";

function Comments() {
  return (
    <div className="col-sm-8 col-md-5 commentParent d-flex justify-content-between px-4 py-2 my-2 mx-2">
      <div className="child1">
        <img src={profile} className="img-fluid" alt="" />
      </div>
      <div className="child2">
        <h6>Adeniyi Micheal</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum,
          quidem impedit minus earum tenetur nobis totam ratione voluptas.
        </p>
        <div className="gchild1 d-flex justify-content-between">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Comments;
