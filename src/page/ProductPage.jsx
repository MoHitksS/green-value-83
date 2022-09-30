import React from 'react'
import ProductNav from '../Components/Product-Page-Component/ProductNav'
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getProduct } from "../Redux/App/action"
import ProductCard from '../Components/Product-Page-Component/ProductCard'

const ProductPage = () => {
    const products = useSelector((state) => state.products)
console.log(products)
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(getProduct())

  },[dispatch]);
  return (
    <div>
        <ProductNav/>
        <div>
            {products.map((item)=>{
                return ( <ProductCard key={item.id} item={item}/> )
            })}
        </div>

    </div>
  )
}

export default ProductPage