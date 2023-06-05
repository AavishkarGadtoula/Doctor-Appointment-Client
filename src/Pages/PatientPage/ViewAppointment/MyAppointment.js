import React, { useEffect ,useState} from 'react'
import MyAppointmentData from './MyAppointmentContent';
import "./MyAppointment.css"
import { useUser } from "../../../Context/UserContext";


const MyAppointment = (props)  => {
  const { user } = useUser()
  const [appointments, setAppointments] = useState([])
  const getMyAppointments = async () => {
    const schedule= await fetch(`http://localhost:4000/api/patients/get-appointments/${user.id}`,{
      method: 'GET', 
    }).then((response) => response.json()) 
    console.log(schedule,"my appointment")
    setAppointments([...schedule])
  }
  const cancleAppointment =async (scheduleId) => {
    const response = await fetch(`http://localhost:4000/api/patients/cancle-appointments/${scheduleId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
      if (response.status == "success") {
        // alert("successfull");
        getMyAppointments();
      } else { 
        alert(response.message)

      }
  }
 
  useEffect(() => {
    getMyAppointments()
  },[])
  return (
    <div className="My-appointment-table">      
      <table>
        <tr>
            <th> Patient Name</th>
            <th>Doctor Appointed</th>
            <th>Date</th>
          <th>Time</th>
          <th>Cancel Appointment</th>
        </tr>
        {appointments.map((MyAppointmentContent) => {
          return (
            <tr key={MyAppointmentContent.id}>
                <td> {user.fname+" "+user.lname} </td>
                <td> {MyAppointmentContent.day.user.fname +" "+ MyAppointmentContent.day.user.fname} </td>
                <td> {MyAppointmentContent.day.day} </td>
              <td> {MyAppointmentContent.times} </td>
              <button type="button" onClick={() => {
                cancleAppointment(MyAppointmentContent.id)
              }} style={{ border:'1px solid black',cursor:"pointer", width:"100%",marginTop:"auto",background:"#B80F0A" }}  >Cancel Appointment</button>
            </tr>
          )
        })}
              
        
       </table>
    </div>
  )
}

export default MyAppointment;
