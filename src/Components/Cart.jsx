
import { Link } from "react-router-dom";
import "../CSS/Cart.css";
import Footer from "./Footer";
const data = [
  {
    id: 11,
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/8491/501/401/2/w/219/8491501401_6_1_1.jpg?ts=1663862015692",
    name: "WOOL DOUBLE-FACED JACKET",
    name_url:
      "https://www.zara.com/in/en/wool-double-faced-jacket-p08491501.html",
    price: "₹ 10,990.00",
    heading: "MATERIALS, CARE AND ORIGIN",
    producttitle: "WOOL DOUBLE-FACED JACKET",
    desc: "Boxy fit collared jacket made of wool. Long sleeves with buttoned cuffs. Hip patch pockets with flaps. Button-up front hidden by a placket.\nOrigins special collection.",
    coloravailable: "Black\nNavy blue\nLight mink",
    color: "Black | 8491/501",
    materialdesc:
      "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
    materialshell: "OUTER SHELL",
    materialtype: "100% wool",
    care: "CARE\nCaring for your clothes is caring for the environment.\nTo keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.\nDo not wash\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
    origin:
      "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China",
  },
  {
    id: 12,
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/0077/306/401/2/w/219/0077306401_6_1_1.jpg?ts=1663862431592",
    name: "100I CASHMERE KNIT HOODIE",
    name_url:
      "https://www.zara.com/in/en/100-cashmere-knit-hoodie-p00077306.html",
    price: "₹ 16,990.00",
    heading: "MATERIALS, CARE AND ORIGIN",
    producttitle: "100% CASHMERE KNIT HOODIE",
    desc: "Knit hoodie in spun cashmere fabric. Collar with an adjustable hood and long sleeves. Front pouch pockets. Ribbed trims. Front zip fastening.\nOrigins special collection.",
    coloravailable: "Grey marl\nNavy blue\nBlack",
    color: "Grey marl | 0077/306",
    materialdesc:
      "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
    materialshell: "OUTER SHELL",
    materialtype: "100% cashmere",
    care: "CARE\nCaring for your clothes is caring for the environment.\nKnit garments have elasticity, which makes them susceptible to losing their original shape when hung up. To prevent them from becoming deformed, dry them on a flat surface and fold them for storage.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
    origin:
      "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China",
  },
  {
    id: 12,
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/0077/306/401/2/w/219/0077306401_6_1_1.jpg?ts=1663862431592",
    name: "100I CASHMERE KNIT HOODIE",
    name_url:
      "https://www.zara.com/in/en/100-cashmere-knit-hoodie-p00077306.html",
    price: "₹ 16,990.00",
    heading: "MATERIALS, CARE AND ORIGIN",
    producttitle: "100% CASHMERE KNIT HOODIE",
    desc: "Knit hoodie in spun cashmere fabric. Collar with an adjustable hood and long sleeves. Front pouch pockets. Ribbed trims. Front zip fastening.\nOrigins special collection.",
    coloravailable: "Grey marl\nNavy blue\nBlack",
    color: "Grey marl | 0077/306",
    materialdesc:
      "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
    materialshell: "OUTER SHELL",
    materialtype: "100% cashmere",
    care: "CARE\nCaring for your clothes is caring for the environment.\nKnit garments have elasticity, which makes them susceptible to losing their original shape when hung up. To prevent them from becoming deformed, dry them on a flat surface and fold them for storage.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
    origin:
      "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China",
  },
  {
    id: 14,
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/0077/306/401/2/w/219/0077306401_6_1_1.jpg?ts=1663862431592",
    name: "100I CASHMERE KNIT HOODIE",
    name_url:
      "https://www.zara.com/in/en/100-cashmere-knit-hoodie-p00077306.html",
    price: "₹ 16,990.00",
    heading: "MATERIALS, CARE AND ORIGIN",
    producttitle: "100% CASHMERE KNIT HOODIE",
    desc: "Knit hoodie in spun cashmere fabric. Collar with an adjustable hood and long sleeves. Front pouch pockets. Ribbed trims. Front zip fastening.\nOrigins special collection.",
    coloravailable: "Grey marl\nNavy blue\nBlack",
    color: "Grey marl | 0077/306",
    materialdesc:
      "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
    materialshell: "OUTER SHELL",
    materialtype: "100% cashmere",
    care: "CARE\nCaring for your clothes is caring for the environment.\nKnit garments have elasticity, which makes them susceptible to losing their original shape when hung up. To prevent them from becoming deformed, dry them on a flat surface and fold them for storage.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
    origin:
      "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China",
  },
];
const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <span>CART(1)</span>
          <span>WISHLIST</span>
        </div>
        <div className="shoping-cart-msg">
          Items in the basket are not reserved until completing the purchase.
        </div>

        <div className="cart-item-flex">
          {data.map((item) => (
            <div className="cart-item">
              <div className="cart-item-header">
                {" "}
                <b>{item.name} </b>{" "}
              </div>
              <div className="cart-item-container">
                <div >
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-description">
                    <div>REF. | 1023/30</div>
                    <div>ORANGE</div>
                    <div>M (UK M)</div>
                    <div>
                      {" "}
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </div>
                  <div className="item-quantity">
                    <div>{item.price}</div>
                  </div>
                  <div>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-btn">
          <p>
            <div>
              <b>TOTAL $399.00</b>
            </div>
            <div>INCLUDING GST</div>
            <div>* EXCL SHIPPING COST</div>
          </p>
          <Link to="/checkout"><button className="checkout-btn">CONTINUE</button></Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
