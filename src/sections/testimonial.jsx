import Comments from "../components/comments";
import "./testimonial.css";

function Testimonial() {
  return (
    <div className="testimonialParent mx-auto row d-flex justify-content-center containr">
      <Comments></Comments>
      <Comments></Comments>
    </div>
  );
}

export default Testimonial;
