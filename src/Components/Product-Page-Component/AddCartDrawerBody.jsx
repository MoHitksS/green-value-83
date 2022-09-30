import React from 'react';
import styled from 'styled-components';

const test =    {
    "id": 12,
    "image": "https://static.zara.net/photos///2022/I/0/2/p/0077/306/401/2/w/219/0077306401_6_1_1.jpg?ts=1663862431592",
    "name": "100I CASHMERE KNIT HOODIE",
    "name_url": "https://www.zara.com/in/en/100-cashmere-knit-hoodie-p00077306.html",
    "price": "₹ 16,990.00",
    "heading": "MATERIALS, CARE AND ORIGIN",
    "producttitle": "100% CASHMERE KNIT HOODIE",
    "desc": "Knit hoodie in spun cashmere fabric. Collar with an adjustable hood and long sleeves. Front pouch pockets. Ribbed trims. Front zip fastening.\nOrigins special collection.",
    "coloravailable": "Grey marl\nNavy blue\nBlack",
    "color": "Grey marl | 0077/306",
    "materialdesc": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
    "materialshell": "OUTER SHELL",
    "materialtype": "100% cashmere",
    "care": "CARE\nCaring for your clothes is caring for the environment.\nKnit garments have elasticity, which makes them susceptible to losing their original shape when hung up. To prevent them from becoming deformed, dry them on a flat surface and fold them for storage.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
    "origin": "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China"
   };

const AddCartDrawerBody = () => {
  return (
    <Addcartbody>
    <div className='addcartheading'>CART</div>
    <div className='addcartname'>{test.name}</div>

    <div className='addcartflex'>
        <div className='addcartimage'>
       <img style={{width:"100%"}} src={test.image} alt={test.name} />
        </div>
        <div className='addcartrightflex'>
        <div>{test.color}</div>
        <div>size</div>
        <div style={{paddingTop:"100px"}}>{test.price}</div>
        </div>
    </div>

    </Addcartbody>
  )
}

const Addcartbody = styled.div`
width: 382px;
margin: auto;
border: 1px solid black;
text-align: left;

.addcartheading{
    width: 318px;
    font-size: 16px;
    font-weight: bold;
    margin: auto;
    justify-content: center;
    padding: 16px 20px 40px;
}

.addcartname{
    width: 318px;
    margin: auto;
    font-size: 11px;
    font-weight: bold;
}

.addcartflex{
    width: 318px;
    margin: auto;
    display: flex;
    font-size: 11px;
    color: grey;
    border: 1px solid red;
}
.addcartimage{
    width: 60%;
}
.addcartrightflex{
    width: 40%;
    padding-left: 16px;
    border: 1px solid red;
}
.addcartrightflex div{
    padding: 0px 0px 8px
}

`

export default AddCartDrawerBody