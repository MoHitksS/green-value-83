import React from 'react'
import '../CSS/SinglePage.css'
import { useEffect, useState } from 'react'
const SinglePage = () => {
  const [colorB, setColor] = useState('white');
  const [theme, setTheme] = useState("")
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(current => !current);
  }
  return (
    <>
      <div className='menuContainer' >
        <div className='main'>

          <div className='leftall'>
            <div className='leftdiv'>
              <h4 style={{ marginButtom: "30px" }}>MATERIALS, CARE AND ORIGIN</h4>
              <h5 style={{ marginButtom: "30px" }}>MATERIALS</h5>
              <p style={{ marginButtom: "30px" }}>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.</p>
              <p style={{ marginButtom: "30px" }}>To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
              <h5>OUTER SHELL</h5>
              <p>72% cotton · 24% polyamide · 4% </p>
            </div>
          </div>
          <div className='middleall' style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='middlediv1'>
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_1_1_1.jpg?ts=1661419029817" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_2_1_1.jpg?ts=1661358482915" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_2_5_1.jpg?ts=1661416303442" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_6_1_1.jpg?ts=1661250716789" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_6_1_1.jpg?ts=1661250716789" alt="" />
            </div>
            <div className='middlediv2'>
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_1_1_1.jpg?ts=1661419029817" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_2_1_1.jpg?ts=1661358482915" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_2_5_1.jpg?ts=1661416303442" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_6_1_1.jpg?ts=1661250716789" alt="" />
              <img src="https://static.zara.net/photos///2022/I/0/1/p/3067/210/250/2/w/750/3067210250_6_1_1.jpg?ts=1661250716789" alt="" />
            </div>
          </div>
          <div className='rightall'>
            <div className='rightdiv'>
              <h4 style={{ marginButtom: "40px" }}>SHIRT DRESS</h4>
              <p style={{ marginButtom: "40px" }}>Collared dress with a surplice neckline. Long sleeves with cuffs. Draped fabric on the sides. Invisible zip fastening.</p>
              <p style={{ marginButtom: "40px" }}>WHITE | 3067/210</p>
              <p>₹ 2,990.00</p>
              <p style={{ marginButtom: "40px" }}>MRP incl. of all taxes</p>
              <div id="size">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginButtom: "40px" }}>
                <p>FIND YOUR SIZE</p>
                <p>SIZE GUIDE</p>
              </div>
              <input type="button" className='addbutton menu-btn' value='ADD TO BAG' style={{ marginButtom: "50px" }} onClick={handleChange} />
              <p style={{ marginButtom: "40px", fontSize: "12px" }}>CHECK IN-STORE AVAILABILITY</p>
              <p style={{ marginButtom: "40px", fontSize: "12px" }}>DELIVERY,EXCHANGES AND RETURNS</p>
            </div>
          </div>

        </div>

        {/* matchwith section  */}

        <div className='matchwith' style={{ width: "95%", margin: "auto" }}>
          <h3>MATCH WITH</h3>
          <div style={{ width: "300px" }}>
            <div><img src="https://static.zara.net/photos///2022/I/1/1/p/3012/910/107/2/w/377/3012910107_6_1_1.jpg?ts=1661933664998" alt="" style={{ width: "100%" }} /></div>
            <p>SPLIT SUEDE COWBOY BOOTS</p>
            <p>₹ 9,990.00</p>
            <p>MRP incl. of all taxes</p>
            <input type="button" className="bag2btn" value='ADD TO BAG' />
          </div>
        </div>
      </div>
        {/* similar items section  */ }

  {/* <div style={{width:"95%",margin:"auto",marginTop:"50px"}}>
    <h3>SIMILAR ITEMS</h3>
    <div className="similaritem">
        <div style={{width:"300px"}}>
            <div><img src="https://static.zara.net/photos///2022/I/0/1/p/9878/170/251/2/w/377/9878170251_6_1_1.jpg?ts=1662113384160" alt="" style={{width:"100%"}}/></div>
            <p>SPLIT SUEDE COWBOY BOOTS</p>
            <p>₹ 9,990.00</p>
            <p>MRP incl. of all taxes</p>
            <button className="bag2btn">ADD TO BAG</button>
        </div>
        <div style={{width:"300px"}}>
            <div><img src="https://static.zara.net/photos///2022/I/0/1/p/3564/215/250/2/w/377/3564215250_6_1_1.jpg?ts=1661499545877" alt="" style={{width:"100%"}}/></div>
            <p>SPLIT SUEDE COWBOY BOOTS</p>
            <p>₹ 9,990.00</p>
            <p>MRP incl. of all taxes</p>
            <button className="bag2btn">ADD TO BAG</button>
        </div>
        <div style={{width:"300px"}}>
            <div><img src="https://static.zara.net/photos///2022/I/0/1/p/8619/707/250/2/w/377/8619707250_6_1_1.jpg?ts=1661850689731" alt="" style={{width:"100%"}}/></div>
            <p>SPLIT SUEDE COWBOY BOOTS</p>
            <p>₹ 9,990.00</p>
            <p>MRP incl. of all taxes</p>
            <button className="bag2btn">ADD TO BAG</button>
        </div>
    </div> 
    </div>*/}
      </>
      )
}

export default SinglePage
