import React from 'react';
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from '../Components/Product-Page-Component/ProductCard';
import styled from 'styled-components';

const ProductPage = () => {
    const products = useSelector((state) => state.AppReducer.products)
//console.log(products)
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(getProduct())

  },[dispatch]);
  return (
    <ProdContainer>
        <div className="gridlayout">

            {products.map((item)=>{
                return ( <ProductCard key={item.id} item={item}/> )
            })}
        </div>

    </ProdContainer>
  )
}

export default ProductPage

const ProdContainer = styled.div`
    width: 90%;
    margin: auto;



 ${'' /* @media (min-width: 480px) {
  .gridlayout { grid-template-columns: repeat(2, 1fr);
     }
}
@media (min-width: 900px) {
    .gridlayout { grid-template-columns: repeat(6, 1fr);
         }
} */}
    .gridlayout {
    display: grid;
    width: 100%;
    gap: 15px;
    grid-template-columns: repeat(auto-fit,minmax(200px,max-content));
    }


`