import React,{useState,useEffect} from 'react'
import "./viewPatient.css"


const ViewPatient = ()  => {

  const [patients, setPatients] = useState([])
  const getPatients = async () => {
    const ptients= await fetch("http://localhost:4000/api/admin/get-patients",{
      method: 'GET', 
   
    }).then((response) => response.json()) 
    console.log(ptients,"patients")
    setPatients([...ptients])
  }
  useEffect(() => {
    
    getPatients()

  },[])
  return (
    <div className="view-patient-table">      
      <table>
        <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Mobile No</th>
            <th>Email</th>
          <th>Sex</th>
          <th>Age</th>
       </tr>
        {patients.map((PatientContent) => {
          return (
            <tr key={PatientContent.id}>
                <td> {PatientContent.id} </td>
                <td> {PatientContent.fname+" "+PatientContent.lname} </td>
                <td> {PatientContent.phoneNo} </td>
                <td> {PatientContent.login.email} </td>
              <td> {PatientContent.sex} </td>
              <td> {PatientContent.age} </td>
            </tr>
            
          )
        })}
              
        
       </table>
    </div>
  )
}

export default ViewPatient;