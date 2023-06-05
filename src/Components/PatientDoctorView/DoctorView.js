import React from 'react'
import "./DoctorView.css"



const DoctorView = (props) => {


  return (
    // <div className="profileList">
    // <div className="profileCard"  key={props.id} >
    //     <div className="profileImage"><img src={props.image} alt="" /> </div>
    //     <div className="profileCard__content">
    //       <div className="profileName">{props.name}</div>
    //       <div className="profile_desc">
    //       <div className="profileSpecialization">{props.specialization} </div>
    //       <div className="profileLocation">{props.location} </div>
    //       <div className="profileExperience">{props.experience} </div>
    //       <div className="profileEmail">{props.email} </div>
    //       <div className="personalThought">{props.thought} </div>
    //       </div>
    //     </div>
        
    //   </div>
    //   </div>

    <div className="profileList">
      <div className="profileCard"
          style={{marginLeft:"90px"}}
        key={props.id} >
        {/* <div className="profileImage"><img src={props.image} alt="" /> </div> */}
        <div className="profileCard__content">
          <div className="profileName">{props.name}</div>
          <div className="profile_desc">
          <div className="profileSpecialization">{props.specialization} </div>
          <div className="profileLocation">{props.address} </div>
          <div className="profileExperience">{props.experience} </div>
          <div className="profileEmail">{props.email} </div>
          
          </div>
        </div>
        
      </div>
      </div>
  )
}

export default DoctorView
