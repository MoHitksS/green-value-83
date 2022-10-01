import React from 'react'
import './SinglePage.css'
import { useEffect, useState } from 'react'
const SinglePage = () => {
    const [size,setSize] = useState(false);
    const [sizeval,setSizeval] = useState("")
    const handleClick = () => {
      if(sizeval==""){
        alert("Please Select A size")
      }
      else{
        alert("Product is added to cart")
      }
    }
    console.log(sizeval)
    let data = [
      {
       "image": "https://static.zara.net/photos///2022/I/0/2/p/8491/501/401/2/w/219/8491501401_6_1_1.jpg?ts=1663862015692",
       "name": "WOOL DOUBLE-FACED JACKET",
       "name_url": "https://www.zara.com/in/en/wool-double-faced-jacket-p08491501.html",
       "price": "₹ 10,990.00",
       "heading": "MATERIALS, CARE AND ORIGIN",
       "producttitle": "WOOL DOUBLE-FACED JACKET",
       "desc": "Boxy fit collared jacket made of wool. Long sleeves with buttoned cuffs. Hip patch pockets with flaps. Button-up front hidden by a placket.\nOrigins special collection.",
       "coloravailable": "Black\nNavy blue\nLight mink",
       "color": "Black | 8491/501",
       "materialdesc": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.",
       "materialshell": "OUTER SHELL",
       "materialtype": "100% wool",
       "care": "CARE\nCaring for your clothes is caring for the environment.\nTo keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.\nDo not wash\nDo not use bleach\nIron at a maximum of 110ºC/230ºF\nDry clean with tetrachloroethylene\nDo not tumble dry",
       "origin": "ORIGIN\nWe work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.\nMade in China"
      }]
  return (
    <>
    {/* <div className='menuContainer' >
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
                  <input className="menu-btn" type="checkbox" id="menu-btn" onChange={(e) => handleChange(e)} />
                  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                  <div className='menuTop'>
                      <span>WOMAN</span>
                      <span>MENS</span>
                      <span>KIDS</span>
                      <span>ZARA ORIGINS</span>
                  </div>
              </header>
              </div> */}
    {data.map((item) => {return (

    <div className='main'>
      <div className='leftall'>
        <div className='leftdiv'>
            <h4 style={{marginButtom:"30px"}}>{item.heading}</h4>
            <h5 style={{marginButtom:"30px"}}>MATERIALS</h5>
            <p style={{marginButtom:"30px"}}>{item.materialdesc}</p>
            <p style={{marginButtom:"30px"}}>To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
            <h5>{item.materialshell}</h5>
            <p>{item.materialtype}</p>
        </div>
      </div>
      <div className='middleall' style={{display:"flex",justifyContent:"space-between"}}>
        <div className='middlediv1'>
            <img src={item.image} alt="" />
        </div>
        <div className='middlediv2'>
            <img src={item.image} alt="" />
        </div>
      </div>
      <div className='rightall'>
        <div className='rightdiv'>
            <h4 style={{marginButtom:"40px"}}>{item.name}</h4>
            <p style={{marginButtom:"40px"}}>{item.desc}</p>
            <p style={{marginButtom:"40px"}}>{item.color}</p>
            <p>{item.price}</p>
            <p style={{marginButtom:"40px"}}>MRP incl. of all taxes</p>
            <div id="size">
              {/* <ul style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingRight:"20px"}}  onClick={(e)=>setSizeval(e.target.outertext)}>
                <li style={{cursor:"pointer",listStyle:"none"}} value="XS">XS</li>
                <li style={{cursor:"pointer",listStyle:"none"}} value="S">S</li>
                <li style={{cursor:"pointer",listStyle:"none"}}>M</li>
                <li style={{cursor:"pointer",listStyle:"none"}}>L</li>
                <li style={{cursor:"pointer",listStyle:"none"}}>XL</li>
              </ul> */}
              <select className='selectsize' value={sizeval} onChange={(e)=>setSizeval(e.target.value)}>
                <option>Select A Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",marginButtom:"40px"}}>
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
            <input type="button" className='addbutton menu-btn' value='ADD TO BAG' style={{marginButtom:"50px"}} onClick={handleClick}/>
            <p style={{marginButtom:"40px",fontSize:"12px"}}>CHECK IN-STORE AVAILABILITY</p>
            <p style={{marginButtom:"40px",fontSize:"12px"}}>DELIVERY,EXCHANGES AND RETURNS</p>
        </div>
      </div>
      
    </div>
    )
    })}
    
    {/* matchwith section  */}

    <div className='matchwith' style={{width:"95%",margin:"auto"}}>
        <h3>MATCH WITH</h3>
        <div className="mw1">
            <div><img src="https://static.zara.net/photos///2022/I/1/1/p/3012/910/107/2/w/377/3012910107_6_1_1.jpg?ts=1661933664998" alt="" style={{width:"100%"}}/></div>
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
