import React, { useEffect, useState } from "react";
import Profile from "../../../Components/Profile/profile";
// import profileContents from "../../../Components/Profile/profileContent";

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([])
  const getDoctors = async () => {
    const dcrs= await fetch("http://localhost:4000/api/doctor",{
      method: 'GET', 
   
    }).then((response) => response.json()) 
    setDoctors([...dcrs])
  }
  useEffect(() => {
    
    getDoctors()

  },[])
  return (
    <div
        style={{
        display: "grid",
        gridTemplateColumns: "425px 425px 425px",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      
      {doctors && doctors.map((profileContent) => (
        <Profile
          key={profileContent.id}
          id={profileContent.id}

          name={profileContent.fname + " " + profileContent.lname}
          experience={profileContent.experience}
          address={profileContent.address}
          specialization={profileContent.specialization}
          email={profileContent.login.email}
          age={profileContent.age}
          sex={profileContent.sex}

          />
       ))}


      {/* {[1, 2, 3].map((profileContent) => (
        <Profile
          key={profileContent}
          image={profileContent.image}
            name={profileContent.name}
            specialization={profileContent.specialization}
            location={profileContent.location}
            experience={profileContent.experience}
            email={profileContent.email}
            thought={profileContent.thought}
        />
      ))} */}
    </div>
  );
};

export default ViewDoctor;
