
import { useNavigate } from 'react-router-dom'
import "./Login.css"




const LogIn = () => {
  const navigate=useNavigate()

  
  return (
    <>
    <div className='navbar_space'></div>
      <div className='Login_main_box'>
        <div className='Login_second_box'>
              <div>
                <h2>LOG IN</h2>
                  <form action="">
                    <label htmlFor="">E-MAIL</label><br />
                    
                    <input type="email" placeholder='Enter Email'/><br /><br />
                    <hr />

                    <label htmlFor="">PASSWORD</label><br />
                    <input type="password" placeholder='Enter Password'/><br /><br />
                    <hr />
                    <button>LOG IN</button>
                  </form>
              </div>
              <div>
              
                  <h2>REGISTER</h2>
                  <p>IF YOU STILL DON'T HAVE A <span><b>ZARA.COM</b></span> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>
                  <p>BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>
                  <button onClick={()=>{
                    navigate("/signin")
                  }} >CREATE ACCOUNT</button>
              </div>
              <div></div>
        </div>
      </div>
    </>
  )
}

export default LogIn;