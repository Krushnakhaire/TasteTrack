import React from 'react'
import './LoginPopup.css'

const LoginPopup = (setShowLogin) => {

  const [currState,setCurrState]=useState("sign up")
  return (
    <div className='login-Popup'>
        <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt='cross-icon' />
          </div>
        </form>
    </div>

  )
}
export default LoginPopup