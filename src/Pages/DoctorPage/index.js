import React from "react"
import { useParams } from "react-router-dom";
import DoctorNavigation from "../../Navigation/DoctorNavigation/doctorNavigation";
import MyAppointments from "./MyAppointments/MyAppointments";
import MyPatients from "./ViewPatients/Mypatients";
import { useUser } from "../../Context/UserContext";




const DoctorDashboard = () => {
    let { sub_route } = useParams();

    const { user } = useUser()
    const main = () => { 
        switch (sub_route) { 
            case "my-appointment":
                return <MyAppointments />
                break;
            case "my-patient":
                return <MyPatients />
                break; 
            default: 
            return <MyAppointments />
                
            
        }
    }
return (
    <div style={{ display: "flex", justifyContent: "flex-start"}}>
        <h1>{ user.name}</h1>
        <div style={{ flex: "2" }}>
            <DoctorNavigation/>
        </div>
        <div style={{ flex: "10"}}>
            {main() }
        </div>
    </div>
)
}

export default DoctorDashboard;