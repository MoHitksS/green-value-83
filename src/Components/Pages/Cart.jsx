import './Cart.css';

const Cart = () => {
  return (
<>
 <div className="container">
    <div className='heading'>
        <span>CART(1)</span>
        <span>WISHLIST</span>
    </div>
    <div className='shoping-cart-msg'>
    Items in the basket are not reserved until completing the purchase.
    </div>
   <div className='cart-item'>
<div className='cart-item-header'>CONTRAST STRIPED SWEATER</div>
<div className='cart-item-container'>
    <div>
    <img src="https://static.zara.net/photos///2022/I/0/1/p/1023/302/615/32/w/227/1023302615_1_1_1.jpg?ts=1664205140763" alt="" />
    </div>
    <div className='cart-item-details'>
        <div>
            <div>REF. | 1023/30</div>
            <div>ORANGE</div>
            <div>M (UK M)</div>
        </div>
        <div className='item-quantity'>
         <span>-</span><span>1</span><span>+</span>
         <span>$150</span>
        </div>
        <div><button>Delete</button></div>
    </div>
</div>
    </div> 
</div> 
</>
  )
}

export default Cart