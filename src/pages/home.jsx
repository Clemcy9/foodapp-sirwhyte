import "./home.css";

import Nav from "../components/nav";
import Hero from "../sections/hero";

function Home() {
  return (
    <div className="containr parentHome">
      <h1>Hello</h1>
      <Nav></Nav>
      <Hero></Hero>
    </div>
  );
}

export default Home;
