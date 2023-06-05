import React from 'react'
import { Link } from 'react-router-dom';
import NavLogo from '../NavLogo/navLogo';
import "./adminNavigation.css";

const adminNav = [{name:"Add Doctor",route:"/dashboard/add-doctor"} ,{name:"View Doctor",route:"/dashboard/view-doctor"} , {name:"View Appointment",route:"/dashboard/view-appointment"},{name:"View Patient",route:"/dashboard/view-patient"}];

const AdminNavigation = () => {
  return (
    <div className="navigation">
          <div className="logo" >
            <Link to={adminNav.route} key={adminNav.route} style={{textDecoration:"none"}} > <NavLogo/> </Link>  
          </div>
          <div className="navigation-list">
              {adminNav.map((adminNav) => {
                  return (
                      <Link to={adminNav.route} key={adminNav.route} className="navigation-item">
                          {adminNav.name}
                      </Link>
                  )
              })}
          </div>
    </div>
  )
}

export default AdminNavigation;


// {name:"Home",route:"/dashboard/home"},