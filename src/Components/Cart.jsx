
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";
import { deleteCart, getCart } from "../Redux/App/action";
import Footer from "./Footer";


const Cart = () => {
  const cartData = useSelector(state=>state.AppReducer.cart)
  const dispatch=useDispatch()
  const deletehandle=(id)=>{
dispatch(deleteCart(id)).then((res)=>{
  dispatch(getCart())
})
  }
console.log(cartData)
  return (
    <>
      <div className="container">
        <div className="heading">
          <span>CART({cartData && cartData.length})</span>
          <span>WISHLIST</span>
        </div>
        <div className="shoping-cart-msg">
          Items in the basket are not reserved until completing the purchase.
        </div>

        <div className="cart-item-flex">
          {cartData.length === 0 ?
           <div>cart data is empty</div> 
           :
           cartData?.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-header">
                {" "}
                <b>{item.producttitle} </b>{" "}
              </div>
              <div className="cart-item-container">
                <div >
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-description">
                    <div>REF. | {item.color ? item.color.split("|")[1] : "453/2"}</div>
                    <div style={{textTransform:"uppercase"}}>{item.color ? item.color.split("|")[0] : "orange"}</div>
                    <div>M (UK M)</div>
                    <div>
                      {" "}
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </div>
                  <div className="item-quantity">
                    <div>{item.price}</div>
                  </div>
                  <div>
                    <button onClick={()=>{deletehandle(item.id)}}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-btn">
          <p>
            <div>
              <b>TOTAL ₹{cartData.reduce((acc, el) => {
      return acc + el.pricenum;
    }, 0)}.00 </b>
            </div>
            <div>INCLUDING GST</div>
            <div>* EXCL SHIPPING COST</div>
          </p>
          <Link to="/checkout"><button className="checkout-btn">CONTINUE</button></Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
