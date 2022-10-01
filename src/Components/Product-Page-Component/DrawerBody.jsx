import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCart } from '../../Redux/App/action'


const Addcartbody = styled.div`
width: 318px;
margin: auto;
text-align: left;
padding: 0px 32px 32px;


.addcartname{
    margin: auto;
    font-size: 12px;
    font-weight: bold;
}

.addcartflex{
    margin: auto;
    display: flex;
    font-size: 12px;
    color: grey;
}
.addcartimage{
    width: 60%;
}
.addcartrightflex{
    width: 40%;
    padding-left: 16px;
}
.addcartrightflex div{
    padding: 0px 0px 8px
}

`
const Addcart = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 16px 20px 40px;
`

const Addcartscroll = styled.div`
    height: 450px;
    overflow: auto;
    width: 382px;

.addcartname::-webkit-scrollbar {
    width: 3px;
  }

 .addcartname::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
  }

  .addcartname::-webkit-scrollbar-thumb {
    background-color: rgb(40, 39, 39);
  }

`

const DrawerBody = () => {
    const dispatch = useDispatch();
    const cartdata = useSelector((store) => store.AppReducer.cart);
    console.log(cartdata)
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch]);
    return (

        <div>
            <Addcart>CART</Addcart>
            <Addcartscroll>
                {cartdata?.map((cart) => {
                    return (
                        <Addcartbody key={cart.id}>
                            <div className='addcartname'>{cart.producttitle}</div>
                            <div className='addcartflex'>
                                <div className='addcartimage'>
                                    <img style={{ width: "90%", height: "305px" }} src={cart.image} alt={cart.producttitle} />
                                </div>
                                <div className='addcartrightflex'>
                                    <div style={{ paddingTop: "30px" }}>{cart.color}</div>
                                    <div>size</div>
                                    <div style={{ paddingTop: "100px" }}>{cart.price}</div>
                                </div>
                            </div>
                        </Addcartbody>
                    )
                })}
            </Addcartscroll>
        </div>
    )
}

export default DrawerBody;


// const test =    {
//     "id": 12,
//     "image": "https://static.zara.net/photos///2022/I/0/2/p/0077/306/401/2/w/219/0077306401_6_1_1.jpg?ts=1663862431592",
//     "name": "100I CASHMERE KNIT HOODIE",
//     "name_url": "https://www.zara.com/in/en/100-cashmere-knit-hoodie-p00077306.html",
//     "price": "₹ 16,990.00",
//     "heading": "MATERIALS, CARE AND ORIGIN",
//     "producttitle": "100% CASHMERE KNIT HOODIE",
//     "desc": "Knit hoodie in spun cashmere fabric. Collar with an adjustable hood and long sleeves. Front pouch pockets. Ribbed trims. Front zip fastening.\nOrigins special collection.",
//     "coloravailable": "Grey marl\nNavy blue\nBlack",
//     "color": "Grey marl | 0077/306",
//     "materialdesc": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
//     "materialshell": "OUTER SHELL",
//     "materialtype": "100% cashmere",
//     "care": "CARE\nCaring for your clothes is caring for the environment.\nKnit garments have elasticity, which makes them susceptible to losing their original shape when hung up. To prevent them from becoming deformed, dry them on a flat surface and fold them for storage.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
//     "origin": "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China"
//    };