import React, { useEffect,useState } from 'react'
// import AppointmentData from './AppointmentContent';
import "./viewAppointment.css";


const ViewAppointment = (props)  => {
  const [appointments, setAppointments] = useState([])
  
  const getAppointments = async () => {
    const apts = await fetch("http://localhost:4000/api/admin/get-appointments", {
      method: 'GET',
   
    }).then((response) => response.json());
    setAppointments([...apts])
  }

  const cancleAppointment = async (scheduleId) => {
    const response = await fetch(`http://localhost:4000/api/admin/cancle-appointments/${scheduleId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
      if (response.status == "success") {
        // alert("successfull");
        getAppointments();
      } else { 
        alert(response.message)

      }
  }
  useEffect(() => {
    getAppointments()
  },[])
  return (
    <div className="view-appointment-table">
      <table>
        <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Doctor Appointed</th>
            <th>Date</th>
          <th>Time</th>
          <th>Cancel Appointment</th>
        </tr>
        {appointments.map((AppointmentContent) => {
          return (
            <tr key={AppointmentContent.id}>
                <td> {AppointmentContent.user.id} </td>
                <td> {AppointmentContent.user.fname+" "+ AppointmentContent.user.lname} </td>
                <td> {AppointmentContent.day.user.fname+" "+AppointmentContent.day.user.lname} </td>
                <td> {AppointmentContent.day.day} </td>
              <td> {AppointmentContent.times} </td>
              <button type="button" style={{ border:'1px solid black',cursor:"pointer", width:"100%",marginTop:"auto",background:"#B80F0A" }} onClick={()=>cancleAppointment(AppointmentContent.id)}  >Cancel Appointment</button>
            </tr>
          )
        })}
              
        
       </table>
    </div>
  )
}

export default ViewAppointment;

