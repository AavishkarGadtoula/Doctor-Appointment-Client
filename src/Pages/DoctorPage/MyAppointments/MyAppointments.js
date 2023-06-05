import React,{useEffect, useState} from 'react'
import MyAppointmentData from './MyAppointmentContent'
import { useUser } from "../../../Context/UserContext";
import InputText from "../../../Components/InputText/InputText";

const MyAppointments = () => { 
  const { user } = useUser()

  const [appointments, setAppointments] = useState([])
  const [date, setDate] = useState();
  const getMyAppointments = async () => {
    const schedule= await fetch(`http://localhost:4000/api/doctor/getSchedule/${user.id}/${date}`,{
      method: 'GET', 
    }).then((response) => response.json()) 
    console.log(schedule,"schedules")
    setAppointments([...schedule])
  }
  useEffect(() => { 
    if (date) { 
      getMyAppointments()
    }
  },[date])
  return (
    <div>
      <div style={{marginTop:"20px"}} >
      <InputText
              id="date"
              name="date"
              type="date"
              autoComplete="off"
        onChange={(e) => { setDate(e.target.value) }}
        />
        </div>
      <table style={{height:"50vh",width:"83vw",overflow:"hidden",padding:"2rem"}}>
        <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Time</th>
          <th>Status</th>
        </tr>
        {appointments.map((MyAppointmentContent) => {
          return (
            <tr key={MyAppointmentContent.id}>
            <td> {MyAppointmentContent.user? MyAppointmentContent.user.id: "-----"} </td>
              
                <td> {MyAppointmentContent.user? MyAppointmentContent.user.fname+" "+MyAppointmentContent.user.lname:"-----"} </td>
                <td> {MyAppointmentContent.times} </td>
              <td> {MyAppointmentContent.status} </td>
            </tr>
          )
        })}
              
        
       </table>
    </div>
  )
}

export default MyAppointments;
