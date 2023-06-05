import React from 'react'
import "./profile.css"
import { UilTrash } from '@iconscout/react-unicons'
// import { UilEdit } from '@iconscout/react-unicons'


function Profile(props) {
 const delDoctor = async() => {
   const dcr = await fetch(`http://localhost:4000/api/doctor/${props.id}`, {
     method: 'POST',
   

   }).then((response) => response.json());
   console.log("hello",dcr)
   if (dcr?.status == "error") {
     alert("something went wrong")
   } else {
   window.location.reload();
     
   }

 }
  return (
    <div className="profileList">
    <div className="profileCard"  key={props.id} >
        {/* <div className="profileImage"><img src={props.image} alt="" /> </div> */}
        <div className="profileCard__content">
          <div className="profileName">{props.name}</div>
          <div className="profile_desc">
          <div className="profileSpecialization">{props.specialization} </div>
          <div className="profileLocation">{props.address} </div>
          <div className="profileExperience">{props.experience} </div>
            <div className="profileEmail">{props.email} </div>
          <div className="profileEmail">{props.age} </div>
          <div className="profileEmail">{props.sex} </div>
            
          
          </div>
        </div>
        <UilTrash className="delete-doctor" onClick={delDoctor } />
        {/* <UilEdit className="edit-doctor"/> */}
      </div>
      </div>
  )
}

export default Profile
