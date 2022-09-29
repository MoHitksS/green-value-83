import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import AddCart from './AddCart';

const test = {
  "id": 2,
  "category": "jacket",
  "imagesrc": "https://static.zara.net/photos///2022/I/0/1/p/8491/501/800/2/w/445/8491501800_15_2_1.jpg?ts=1663752056449",
  "name": "WOOL DOUBLE-FACED JACKET",
  "colortext": "+2",
  "price": "₹ 10,990.00",
  "pricenum": 10990,
  "watermark": ""
}

const ProductCtard = () => {
  return (
    <div>
    {/* image */}
    <div>
      <img style={{maxWidth:"355px", maxHeight:"534px"}} src={test.imagesrc} alt={test.category}/>
    </div>
    <div style={{marginTop:"-50px"}}> < AddCart/></div>
    {/* details */}
    <div style={{display:"flex", justifyContent:"space-between", gap:"30px", fontSize:"11px", maxWidth:"355px", margin:"auto"}}>
    <div style={{display:"flex"}}><div>{test.name}</div>  <div style={{padding:"0px 10px"}}><span><CircleIcon sx={{fontSize:"11px",paddingTop:"2px"}}/></span> {test.colortext}</div></div>
    <div>{test.price}</div>
    </div>
    </div>
  )
}

export default ProductCtard