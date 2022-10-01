import React, { useState } from "react";
import "../Routes/SignIn.css"
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { AddData, GetProducts } from "../Redux/Auth/action";
const SignIn = () => {
 const [data,setData]=useState({
  email:"",
  state:"",
  password:"",
  name:""
 })
  const naviagte=useNavigate()
  const dispatch=useDispatch()
//  id, category,imageSrc,price,title

 const onchnageHandler=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
 }
 const onclickhandler=()=>{
dispatch(AddData(data)).then((res)=>{
  dispatch(GetProducts())
  naviagte("/login")
})
 }
  return (
    // <div>
    //   <h3>Add Product</h3>
    //   <div>
    //     <div>
    //       <label>Product title</label>
    //       <input data-cy="add-product-title" name="email" type="email" onChange={onchnageHandler}  />
    //     </div>
    //     <div>
    //       <label>Product Category</label>
    //       <select data-cy="add-product-category" name="state"  onChange={onchnageHandler}>
    //         <option value="">Select Category</option>
    //         <option value="Electronics">Electronics</option>
    //         <option value="Cosmetics">Cosmetics</option>
    //         <option value="Shoes">Shoes</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label>Product Image</label>
    //       <input
    //         data-cy="add-product-image"
    //         type="text"
    //         placeholder="name"
    //         name="name"
    //         onChange={onchnageHandler}
    //       />
    //     </div>
    //     <div>
    //       <label>Product Price</label>
    //       <input data-cy="add-product-price" name="password" type="password"  onChange={onchnageHandler} />
    //     </div>
    //     <div>
    //       <button data-cy="add-product-button" onClick={onclickhandler}>Add</button>
    //     </div>
    //   </div>
    // </div>



    <>
    <div className='navbar_space'></div>
      <div className='signin_main_box'>
        <h3>PERSONAL DETAILS</h3>
        <div className='personal_company_toggle'>
            <div >
                <input type="radio" />
                <label htmlFor="">PERSONAL</label>
            </div>
            <div>
                <input type="radio" />
                <label htmlFor="">COMPANY</label>
            </div>
        </div>

        <div className='signin_second_box'>
              <div>
              <form action="">
                    <label htmlFor="">E-MAIL</label><br />
                    {/* <input type="email" placeholder='Enter Email' name="email" onChange={onchnageHandler}/><br /><br /> */}
                    <input name="email" type="email" onChange={onchnageHandler} placeholder='Enter Email' /><br /><br />
                    <hr />

                    <label htmlFor="">PASSWORD</label><br />
                    {/* <input type="password" placeholder='Enter Password' name="password" onChange={onchnageHandler} /><br /><br /> */}
                    <input name="password" type="password" placeholder="Enter Password"  onChange={onchnageHandler} /><br /><br />
                    <hr />
                    <label htmlFor="">NAME</label><br />
                    <input type="text" placeholder='NAME' name="name" onChange={onchnageHandler}/><br /><br />
                    <hr />
                    <label htmlFor="">ADDRESS</label><br />
                    <input type="text" placeholder='ADDRESS'/><br /><br />
                    <hr />
                    <label htmlFor="">LOCALITY</label><br />
                    <input type="text" placeholder='LOCALITY'/><br /><br />
                    <hr />
                    <label htmlFor="">STATE</label><br />
                    <select name="state"  onChange={onchnageHandler}>
                    {/* <select  id="" name="state" onChange={onchnageHandler}> */}
                    <option value="--">---</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select> <br /><br />
                    <hr />
                    
                    <div className='prefix_telephone'>
                        <div>
                            PREFIX <br />
                            +91
                        </div>
                        <div>
                            <label htmlFor="">TELEPHONE</label><br />
                            <input type="text" placeholder='TELEPHONE'/>
                            <hr />
                        </div>
                    </div>

                    <input type="checkbox" /><label htmlFor="">I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL</label><br />
                    <input type="checkbox" /><label htmlFor="">I ACCEPT THE PRIVACY STATEMENT</label>
                    <button onClick={onclickhandler}>CREATE ACCOUNT</button>
                  </form>
              </div>
              <div >
                    <label htmlFor=""></label><br />
                    {/* <input type="email" placeholder=''/><br /><br /> */}
                    <hr /><br /><br />

                    <label htmlFor="">REPEAT PASSWORD</label><br />
                    <input required type="email" placeholder='REPEAT PASSWORD'/><br /><br />
                    <hr />

                    <label htmlFor="">PINCODE</label><br />
                    <input type="email" placeholder='PINCODE'/><br /><br />
                    <hr />

                    <label htmlFor="">MORE INFO</label><br />
                    <input type="email" placeholder='OPTIONAL'/><br /><br />
                    <hr />

                    <label htmlFor="">CITY</label><br />
                    <input type="email" placeholder='CITY'/><br /><br />
                    <hr />

                    <label htmlFor="">REGION</label><br />
                    <input type="email" placeholder='INDIA' value="INDIAI"/><br /><br />
                    <hr />
                
              </div>
              <div></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
