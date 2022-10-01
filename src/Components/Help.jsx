import React from 'react'
import Navbar from './Navbar'

const Help = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "75%", margin: "auto", marginTop: "50px" }}>
        <h3>HELP</h3>
        <div className="helppage1">
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-bag.svg?ts=1550654368093" alt="" />
            <h4>SHOP AT ZARA.COM</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-shipping.svg?ts=1550654368093" alt="" />
            <h4>SHIPPING AND ORDER STATUS</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-returns.svg?ts=1550654368093" alt="" />
            <h4>EXCHANGES AND RETURNS</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-payment.svg?ts=1550654368093" alt="" />
            <h4>PAYMENT</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-product.svg?ts=1550654368093" alt="" />
            <h4>PRODUCT</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-gift-card.svg?ts=1591250800807" alt="" />
            <h4>GIFT CARD</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-stores-and-company.svg?ts=1550654368093" alt="" />
            <h4>SHOPS AND COMPANY</h4>
          </div>
          <div className="helppage2">
            <img src="https://static.zara.net/photos///contents/mkt/misc/help/icons//icon-80-help-zara-id.svg?ts=1629805802513" alt="" />
            <h4>ZARA QR</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
