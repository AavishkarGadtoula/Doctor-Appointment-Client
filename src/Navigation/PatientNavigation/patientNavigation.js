import React from 'react'
import { Link } from 'react-router-dom';
// import NavLogo from '../NavLogo/navLogo';
import NavLogo from "../NavLogo/navLogo"
import "./patientNavigation.css";

// const patientNav = ["Book Appointment", "View Doctor","View Appointment","Logout"];

const patientNav = [{ name: "Book Appointment", route: "/dashboard/book-appointment" }, { name: "View Doctor", route: "/dashboard/view-doctor" }, { name: "View Appointment", route: "/dashboard/view-appointment" }, ]

const PatientNavigation = () => {
  return (
    <div className="patient_navigation">
          <div className="Patient_logo" >
            <Link to={"dashboard/home"} style={{textDecoration:"none"}} > <NavLogo/> </Link>  
          </div>
          <div className="patient_navigation-list">
              {patientNav.map((patientNav) => {
                  return (
                      <Link to={ patientNav.route} key={patientNav.route} className="patient_navigation-item">
                          {patientNav.name}
                      </Link>
                  )
              })}
          </div>
    </div>
  )
}

export default PatientNavigation;