import React,{useState,useEffect} from "react";
import DoctorView from "../../../Components/PatientDoctorView/DoctorView";
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
        gridTemplateColumns: "450px 450px 450px",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      
      {doctors && doctors.map((profileContent) => (
          <DoctorView 
            //  key={profileContent.id}
            // image={profileContent.image}
            // name={profileContent.name}
            // specialization={profileContent.specialization}
            // location={profileContent.location}
            // experience={profileContent.experience}
            // email={profileContent.email}
            // thought={profileContent.thought}
          
            key={profileContent.id}
          id={profileContent.id}

          name={profileContent.fname + " " + profileContent.lname}
          experience={profileContent.experience}
          address={profileContent.address}
          specialization={profileContent.specialization}
          email={profileContent.login.email }
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

