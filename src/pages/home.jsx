import "./home.css";

import Nav from "../components/nav";
import Hero from "../sections/hero";
import MenuItem from "../components/menu-item";
import Menu from "../sections/menu";
import FlashSale from "../sections/flashSale";
import Item from "../components/items";
import Promo from "../sections/promo";
import HotDeals from "../sections/hotdeals";
import Foodstuffs from "../sections/foodstuffs";
import Drinks from "../sections/drinks";
import Comments from "../components/comments";
import Testimonial from "../sections/testimonial";
import LongText from "../sections/longtext";

function Home() {
  return (
    <div className="homeParent ">
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
      <HotDeals></HotDeals>
      <Foodstuffs></Foodstuffs>
      <Drinks></Drinks>
      {/* <Comments></Comments> */}
      <Testimonial></Testimonial>
      <LongText></LongText>
    </div>
  );
}

export default Home;
