import "./home.css";

import Nav from "../components/nav";
import Hero from "../sections/hero";
import MenuItem from "../components/menu-item";
import Menu from "../sections/menu";
import FlashSale from "../sections/flashSale";
import Item from "../components/items";
import Promo from "../sections/promo";

function Home() {
  return (
    <div className="homeParent">
      <Nav></Nav>
      <div className="container">
        <Hero></Hero>
        {/* <MenuItem></MenuItem> */}
      </div>
      <Menu></Menu>
      <FlashSale></FlashSale>
      {/* <Item></Item> */}
      <div className="container">
        <Promo></Promo>
      </div>
    </div>
  );
}

export default Home;
