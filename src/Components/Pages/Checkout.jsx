import styled from "styled-components";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Button, Drawer } from "@mui/material";




const Checkout = () => {
  return (
    <Container>
   <div className="layout-content">
        <div className="main-content">
        <span>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</span>
        <div className="delivery-group-head">
            <div>
                <p><AccountBalanceIcon /></p>
                <div>Home</div>
            </div>
            <div>
            <p><AccountBalanceIcon /></p>
            <div>Zara Store
            
                </div>     
                
            </div>
        </div>
        <div className="delivery-address">
            <span>Address</span>
            <span>EDIT</span>
         
        </div>
        <div className="delivery-group">
       <h2>ITEMS</h2>
        <img src="https://static.zara.net/photos///2022/I/0/1/p/1023/302/615/32/w/91/1023302615_1_1_1.jpg?ts=1664205140763" alt="" />

        </div>
        <div className="delivery-details">
            <hr />
            <div>
            <div>
                
                <div className="delivery-details-address">
                   <div> <b>
                   THURSDAY 06, OCTOBER - FRIDAY 07, OCTOBER</b>
                   </div>
                   <div>
                   FREE SHIPPING FOR ORDERS OVER ₹ 2,990
                   </div>
                   <br />
                   <div>
                   DELIVERY TIME FRAMES
                    </div> 
                </div>
            </div>
            <div className="delivery-free">
                FREE
            </div>
            </div>
            <hr />
        </div>
        <div className="bottom-btn">
            <p>SHIPPING FREE</p>
            <button>CONTINUE</button>
        </div>
        </div>
   </div>


    </Container>
  )
}
const Container = styled.div`
 width: 100%;
 font-size:smaller;
    height: 100vh;
    position:relative;
    cursor:pointer;
    padding-top:120px;
.layout-content{
    width:90%;
    height:100vh;
    margin:auto;
}
.main-content{
    text-align:left;
    margin-top:20px;
    height:100vh;
}
.delivery-group-head{
    display:flex;
    gap:10px;
    justify-content:flex-start;
}
.delivery-group-head>div{
    border:1px solid black;
    height:100px;
    width:100px;
    font-size:smaller;
}
.delivery-group-head>div>p{
    text-align:center;
     padding-top:30px;
}
.delivery-group-head>div>div{
  text-align:center;
   margin-top:-15px;
   font-size:smaller;
}
.delivery-address{
    display:flex;
    gap:10px;
    flex-direction:column;
    font-size:smaller;
    margin-top:20px;
}
.delivery-group{
    margin:64px 0 40px;
    display:flex;
    flex-direction:column;

}
.delivery-group>h2{
    margin:0 0 16px;
}
.delivery-group>img{
    height:150px;
    width:100px;
}
.delivery-details{
    padding:32px 0;
}
.delivery-details>div{
    display:flex;
    justify-content:space-between;
}

.delivery-details-address>div{
    font-size:smaller;
}
.delivery-free{
    font-size:smaller;
    padding-top:20px; 
}
.bottom-btn{
    position:fixed;
    bottom: 0;
    right: 0;
    font-size:smaller;
    display:flex;
    justify-content:flex-end;
    gap:20px;
    padding:20px 20px 20px 65px;
}
.bottom-btn>p{
    padding-top:-10px;
    font-size:smaller;
}
.bottom-btn>button{
    font-size:small;
    width:200px;
    background:black;
    color:white;
}
`
export default Checkout