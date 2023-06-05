import React from 'react'
import { Link } from 'react-router-dom';

import NavLogo from '../NavLogo/navLogo';
// import "./patientNavigation.css";
import "./index.css"




const LandingNavigation = () => {
  return (
    <div className="Landing_navigation" style={{height:"12vh",width:"100%"}} >
          <div className="Patient_logo" >
            <Link to={"/"} style={{textDecoration:"none",float:"left",marginTop:"5px"}} > <NavLogo/> </Link>  
          </div>
          
    </div>
  )
}

export default LandingNavigation;