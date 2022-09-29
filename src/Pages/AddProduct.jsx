import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { AddProducts, GetProducts } from "../Redux/Auth/action";
const AddProduct = () => {
 const [product,setProduct]=useState({
  title:"",
  category:"",
  imageSrc:"",
  price:""
 })
  const naviagte=useNavigate()
  const dispatch=useDispatch()
//  id, category,imageSrc,price,title

 const onchnageHandler=(e)=>{
    const {name,value}=e.target
    setProduct({
      ...product,
      [name]:value
    })
 }
 const onclickhandler=()=>{
dispatch(AddProducts(product)).then((res)=>{
  dispatch(GetProducts())
//   naviagte("/")
})
 }
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input data-cy="add-product-title" name="title" type="text" onChange={onchnageHandler}  />
        </div>
        <div>
          <label>Product Category</label>
          <select data-cy="add-product-category" name="category"  onChange={onchnageHandler}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            name="imageSrc"
            onChange={onchnageHandler}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" name="price" type="text"  onChange={onchnageHandler} />
        </div>
        <div>
          <button data-cy="add-product-button" onClick={onclickhandler}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
