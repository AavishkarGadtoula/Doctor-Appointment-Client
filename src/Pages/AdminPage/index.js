import React from "react"
import { useParams } from "react-router-dom";
import AdminNavigation from "../../Navigation/AdminNavigation/adminNavigation";
import AdminHome from "./Home/home";
import AddDoctor from "./AddDoctor/addDoctor.js";
import ViewDoctor from "./ViewDoctor/viewDoctor"
import ViewAppointment from "./ViewAppointment/viewAppointment";
import ViewPatient from "./ViewPatient/viewPatient"
import { useUser } from "../../Context/UserContext";




const AdminDashboard = () => {
    let { sub_route } = useParams();

    const { user } = useUser()
    const main = () => { 
        switch (sub_route) { 
            // case "home":
            //     return <AdminHome />
            //     break;
            case "add-doctor":
                return <AddDoctor />
                break;
            case "view-doctor":
                return <ViewDoctor />
                break;
            case "view-appointment":
                return <ViewAppointment />
                break;
            case "view-patient":
                return <ViewPatient />
                break;
            default: 
            return <AddDoctor />
                
            
        }
    }
return (
    <div style={{ display: "flex", justifyContent: "flex-start"}}>
        <h1>{ user.name}</h1>
        <div style={{ flex: "2" }}>
            <AdminNavigation/>
        </div>
        <div style={{ flex: "10"}}>
            {main() }
        </div>
    </div>
)
}

export default AdminDashboard;