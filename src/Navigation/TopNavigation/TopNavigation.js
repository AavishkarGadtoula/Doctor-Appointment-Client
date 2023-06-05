import React from "react";
import "./topNavigation.css"
// import { UilUserCircle } from '@iconscout/react-unicons';
// import { UilBell } from '@iconscout/react-unicons'
import { useUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const { user, setUser } = useUser();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
}
  return (
    <div className="top-navigation">
          {/* <UilUserCircle className="profile-icon"  />
      <UilBell className="notification" /> */}
      { user? <button style={{width:"150px", float:"right", marginRight:"20px",marginTop:"20px"}} onClick={logout}>Logout</button>:<Link to="/login"></Link>}
    </div>
  )
}

export default TopNavigation
