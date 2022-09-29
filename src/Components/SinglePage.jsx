import React from 'react'
import './SinglePage.css'
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
              <header className="header" 
              style={{
                isActive: true ? {position:"fixed"}:{display:"none"},
                isActive: true ? {width:"25%"}:{display:"none"},
                isActive: true ? {paddingTop:"10px"}:{display:"none"},
                isActive: true ? {textAlign:"right"}:{display:"none"},
                isActive: true ? {position:"fixed"}:{display:"none"},
                isActive: true ? {position:"fixed"}:{display:"none"},
                isActive: true ? {position:"fixed"}:{display:"none"},
                // width: isActive ? "25%":'',
                // paddingTop: isActive ? "10px":'',
                // paddingBottom: isActive ? "15px":'',
                // textAlign: isActive ? "right":'',
                // float: isActive ? "right":'',
                // fontSize: isActive ? "2em":'',
                // paddingLeft: isActive ? "15px":''
              }}>
                  {/* <input className="menu-btn" type="checkbox" id="menu-btn" onChange={(e) => handleChange(e)} /> */}
                  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                  <div className='menuLogo'>
                      <svg viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
                  </div>
                  <div className='menuTop'>
                      <span>WOMAN</span>
                      <span>MENS</span>
                      <span>KIDS</span>
                      <span>ZARA ORIGINS</span>
                  </div>
              </header>
              </div>
    <div className='main'>
    
      <div className='leftall'>
        <div className='leftdiv'>
            <h4 style={{marginButtom:"30px"}}>MATERIALS, CARE AND ORIGIN</h4>
            <h5 style={{marginButtom:"30px"}}>MATERIALS</h5>
            <p style={{marginButtom:"30px"}}>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.</p>
            <p style={{marginButtom:"30px"}}>To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
            <h5>OUTER SHELL</h5>
            <p>72% cotton · 24% polyamide · 4% </p>
        </div>
      </div>
      <div className='middleall' style={{display:"flex",justifyContent:"space-between"}}>
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
            <h4 style={{marginButtom:"40px"}}>SHIRT DRESS</h4>
            <p style={{marginButtom:"40px"}}>Collared dress with a surplice neckline. Long sleeves with cuffs. Draped fabric on the sides. Invisible zip fastening.</p>
            <p style={{marginButtom:"40px"}}>WHITE | 3067/210</p>
            <p>₹ 2,990.00</p>
            <p style={{marginButtom:"40px"}}>MRP incl. of all taxes</p>
            <div id="size">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",marginButtom:"40px"}}>
                <p>FIND YOUR SIZE</p>
                <p>SIZE GUIDE</p>
            </div>
            <input type="button" className='addbutton menu-btn' value='ADD TO BAG' style={{marginButtom:"50px"}} onClick={handleChange}/>
            <p style={{marginButtom:"40px",fontSize:"12px"}}>CHECK IN-STORE AVAILABILITY</p>
            <p style={{marginButtom:"40px",fontSize:"12px"}}>DELIVERY,EXCHANGES AND RETURNS</p>
        </div>
      </div>
      
    </div>
    
    {/* matchwith section  */}

    <div className='matchwith' style={{width:"95%",margin:"auto"}}>
        <h3>MATCH WITH</h3>
        <div style={{width:"300px"}}>
            <div><img src="https://static.zara.net/photos///2022/I/1/1/p/3012/910/107/2/w/377/3012910107_6_1_1.jpg?ts=1661933664998" alt="" style={{width:"100%"}}/></div>
            <p>SPLIT SUEDE COWBOY BOOTS</p>
            <p>₹ 9,990.00</p>
            <p>MRP incl. of all taxes</p>
            <input type="button" className="bag2btn" value='ADD TO BAG'/>
        </div>
    </div>
    {/* similar items section  */}

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
