import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("sign up")
  return (
    <div className='login-Popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='cross-icon' />
        </div>
        <div className="login-popup-inputs">
          {currState ==="Login"?<></>:<input type="text" placeholder='Enter your email' required />}
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Enter password' required />
        </div>
        <button>{currState === "sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox"required/>
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account ? <spam onClick={()=>setCurrState("Sign Up")}>Click Here</spam></p>
        :<p>Already  have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}
export default LoginPopup