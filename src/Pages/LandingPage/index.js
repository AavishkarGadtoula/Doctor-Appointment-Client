import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import background from "../../assets/bg-img/landing-background.jpg";
import NavLogo from '../../Navigation/NavLogo/navLogo';
// import Login from '../../Scenes/Login/Login';


const LandingPage = () => {
  return (
    <div className='landing-page'>
      {/* <div className='landing-nav'> */}

        <Link className="register-route" style={{marginLeft:"350px"}}  to="/register" >
          <button className='landing-button'  >Patient Registration</button>

        </Link>

        <Link className="register-route"  to="/login" >
          <button className='landing-button'  >Login</button>

        </Link>


      {/* </div> */}

      <div className='landing-container'> 

          
          <div className='landing-container-left'style={{position:"absolute"}} >
            <h2 className='landing-heading'>We Care About Your<br /> <span style={{ color: "#16a066" }}>Health</span></h2>
            <p className='landing-p'>Select preferred doctor and time slot  to <br /> book an appointment.</p>
          </div>
        <div className='landing-image'>

          <img src={background} alt='' style={{ height: "100vh", width: "100%" }} />
        </div>


      </div>


    </div>
  )
}

export default LandingPage



