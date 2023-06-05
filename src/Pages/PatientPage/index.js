import React from "react"
import { useParams } from "react-router-dom";
import PatientNavigation from "../../Navigation/PatientNavigation/patientNavigation";
import BookAppointment from "./BookAppointment/BookAppointment";
import ViewAppointment from "./ViewAppointment/MyAppointment" ;
import ViewDoctor from "./ViewDoctor/PatientViewDoctor";
// import History from "./History/History";
import { useUser } from "../../Context/UserContext";




const PatientDashboard = () => {
    let { sub_route } = useParams();

    const { user } = useUser()
    const main = () => { 
        switch (sub_route) { 
            case "home":
                return <BookAppointment />
                break;
            case "view-doctor":
                return <ViewDoctor />
                break;
            case "view-appointment":
                return <ViewAppointment />
                break;
            // case "history":
            //     return <History />
            //     break;
            default: 
            return <BookAppointment />
                
            
        }
    }
return (
    <div style={{ display: "flex", justifyContent: "flex-start"}}>
        <h1>{ user.name}</h1>
        <div style={{ flex: "2" }}>
            <PatientNavigation/>
        </div>
        <div style={{ flex: "10"}}>
            {main() }
        </div>
    </div>
)
}

export default PatientDashboard;