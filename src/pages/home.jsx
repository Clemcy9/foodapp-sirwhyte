import "./home.css";

import Nav from "../components/nav";
import Hero from "../sections/hero";
import MenuItem from "../components/menu-item";
import Menu from "../sections/menu";
import FlashSale from "../sections/flashSale";

function Home() {
  return (
    <div className="homeParent">
      <Nav></Nav>
      <div className="container">
        <Hero></Hero>
        {/* <MenuItem></MenuItem> */}
        <Menu></Menu>
      </div>
      <FlashSale></FlashSale>
    </div>
  );
}

export default Home;
