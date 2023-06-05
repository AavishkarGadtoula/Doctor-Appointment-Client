import React from 'react'
import { Link } from 'react-router-dom';
import NavLogo from "../NavLogo/navLogo"
import "./doctorNavigation.css";

// const patientNav = ["Book Appointment", "View Doctor","View Appointment","Logout"];

const doctorNav = [{ name: "My Appointment", route: "/dashboard/my-appointment" },  ]

const doctorNavigation = () => {
  return (
    <div className="doctor_navigation">
          <div className="doctor_logo" >
            <Link to={"dashboard/home"} style={{textDecoration:"none"}} > <NavLogo/> </Link>  
          </div>
          <div className="doctor_navigation-list">
              {doctorNav.map((doctorNav) => {
                  return (
                      <Link to={ doctorNav.route} key={doctorNav.route} className="doctor_navigation-item">
                          {doctorNav.name}
                      </Link>
                  )
              })}
          </div>
    </div>
  )
}

export default doctorNavigation;