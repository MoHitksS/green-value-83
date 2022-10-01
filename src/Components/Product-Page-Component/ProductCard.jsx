import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AddCart from "./AddCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const test = {
//   "id": 2,
//   "category": "jacket",
//   "imagesrc": "https://static.zara.net/photos///2022/I/0/1/p/8491/501/800/2/w/445/8491501800_15_2_1.jpg?ts=1663752056449",
//   "name": "WOOL DOUBLE-FACED JACKET",
//   "colortext": "+2",
//   "price": "₹ 10,990.00",
//   "pricenum": 10990,
//   "watermark": ""
// }

const ProductCtard = ({ item,id }) => {
  return (
    <ProductCardContainer>
      {/* image */}
      <Link to={`/product/${item.id}`}>
        <div>
          <img
            style={{ width: "100%", minHeight: "300px" }}
            src={item.image}
            alt={item.name}
          />
        </div>
        </Link>
        <div style={{ marginTop: "-50px" }}>
          {" "}
          <AddCart id = {id} data={item} />
        </div>
        {/* details */}
        <div className="flexStyling">
          <div className="nameStyling">
          <Link to={`/product/${item.id}`}>
            <div>{item.name || item.producttitle}</div>
          </Link>
            {" "}
            {/* <div className="iconStyling">
              <CircleIcon sx={{ fontSize: "10px" }} />
            </div> */}
          </div>
          <div className="priceS">{item.price}</div>
        </div>

    </ProductCardContainer>
  );
};
const ProductCardContainer = styled.div`
  max-width: 354px;

  .nameStyling {
    display: flex;
    overflow: hidden;
    height: 13px;
    width: 70%;
  }
  .nameStyling a{
    text-decoration: none;
    color: black;
  }
  .nameStyling a:hover{
    text-decoration: underline;
  }
  .flexStyling {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 11px;
    text-align: left;
  }
  .iconStyling {
    padding: 0px 3px 2px 2px;
  }
  .priceS {
    width: 60px;
    text-align: right;
  }
`;

export default ProductCtard;
