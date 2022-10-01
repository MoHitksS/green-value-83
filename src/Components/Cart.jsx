
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";
import Footer from "./Footer";


const Cart = () => {
  const cartData = useSelector(state=>state.AppReducer.cart)
  console.log(cartData)
  return (
    <>
      <div className="container">
        <div className="heading">
          <span>CART(1)</span>
          <span>WISHLIST</span>
        </div>
        <div className="shoping-cart-msg">
          Items in the basket are not reserved until completing the purchase.
        </div>

        <div className="cart-item-flex">
          
          {cartData.map((item) => (
            <div className="cart-item">
              <div className="cart-item-header">
                {" "}
                <b>{item.name} </b>{" "}
              </div>
              <div className="cart-item-container">
                <div >
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-description">
                    <div>REF. | 1023/30</div>
                    <div>ORANGE</div>
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
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="bottom-btn">
          <p>
            <div>
              <b>TOTAL $399.00</b>
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
