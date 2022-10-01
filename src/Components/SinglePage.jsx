import React from 'react'
import '../CSS/SinglePage.css'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';
const SinglePage = () => {
  const [size, setSize] = useState(false);
  const [sizeval, setSizeval] = useState("")
  const navigate = useNavigate()
  const handleClick = () => {
    if (sizeval == "") {
      alert("Please Select A size")
    }
    else {
      alert("Product is added to cart")
      setSize(true)
    }
  }
  const handleProcess = () => {
    navigate("/cart")
  }
  let data = [
    {
      "id": "11",
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
      {data.map((item) => {
        return (

          <div className='main'>
            <div className='leftall'>
              <div className='leftdiv'>
                <h4 style={{ marginButtom: "30px" }}>{item.heading}</h4>
                <h5 style={{ marginButtom: "30px" }}>MATERIALS</h5>
                <p style={{ marginButtom: "30px" }}>{item.materialdesc}</p>
                <p style={{ marginButtom: "30px" }}>To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
                <h5>{item.materialshell}</h5>
                <p style={{ marginButtom: "30px" }}>{item.materialtype}</p>
                <h5 style={{ marginButtom: "30px" }}>CARE</h5>
                <p style={{ marginButtom: "30px" }}>{item.care}</p>
                <h5 style={{ marginButtom: "30px" }}>ORIGIN</h5>
                <p style={{ marginButtom: "30px" }}>{item.origin}</p>
              </div>
            </div>
            <div className='middleall' style={{ display: "flex", justifyContent: "space-between" }}>
              <div className='middlediv1'>
                <img src={item.image} alt="" />
              </div>
              <div className='middlediv2'>
                <img src={item.image} alt="" />
              </div>
            </div>
            <div className='rightall'>
              <div className='rightdiv'>
                <h4 style={{ marginButtom: "40px" }}>{item.name}</h4>
                <p style={{ marginButtom: "40px" }}>{item.desc}</p>
                <p style={{ marginButtom: "40px" }}>{item.color}</p>
                <p>{item.price}</p>
                <p style={{ marginButtom: "40px" }}>MRP incl. of all taxes</p>
                <div id="size">
                  <select className='selectsize' value={sizeval} onChange={(e) => setSizeval(e.target.value)}>
                    <option>Select A Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginButtom: "40px" }}>
                  <p>FIND YOUR SIZE</p>
                  <p>SIZE GUIDE</p>
                </div>
                <input type="button" className='addbutton menu-btn' value='ADD TO BAG' style={{ marginButtom: "50px" }} onClick={handleClick} />
                <input type="button" className='addbutton menu-btn' value='PROCESS ORDER'
                  style={(size == true) ? { visibility: 'visible', marginTop: "25px" } : { visibility: 'hidden' }} onClick={handleProcess} />
                <p style={{ marginButtom: "40px", fontSize: "12px" }}>CHECK IN-STORE AVAILABILITY</p>
                <p style={{ marginButtom: "40px", fontSize: "12px" }}>DELIVERY,EXCHANGES AND RETURNS</p>
              </div>
            </div>

          </div>
        )
      })}
      {/* matchwith section  */}
      <div className='matchwith' style={{ width: "95%", margin: "auto" }}>
        <h3>MATCH WITH</h3>
        <div className="mw1">
          <div><img src="https://static.zara.net/photos///2022/I/1/1/p/3012/910/107/2/w/377/3012910107_6_1_1.jpg?ts=1661933664998" alt="" style={{ width: "100%" }} /></div>
          <p>SPLIT SUEDE COWBOY BOOTS</p>
          <p>₹ 9,990.00</p>
          <p>MRP incl. of all taxes</p>
          <input type="button" className="bag2btn" value='ADD TO BAG' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SinglePage
