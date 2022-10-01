import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AddCart from "./AddCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCtard = ({ item }) => {
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
        <div style={{ marginTop: "-50px" }}>
          {" "}
          <AddCart data={item} />
        </div>
        {/* details */}
        <div className="flexStyling">
          <div className="nameStyling">
            <div>{item.name}</div>{" "}
            <div className="iconStyling">
              <CircleIcon sx={{ fontSize: "10px" }} />
            </div>
          </div>
          <div className="priceS">{item.price}</div>
        </div>
      </Link>
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
