import React, { useEffect} from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../Scenes/Login/Login";
import Register from "../Scenes/Register/Register";

import TopNavigation from "../Navigation/TopNavigation/TopNavigation";

import AdminDashboard from "../Pages/AdminPage";
import { useUser } from "../Context/UserContext";
import PatientDashboard from "../Pages/PatientPage";
import DoctorDashboard from "../Pages/DoctorPage";
import { Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";






const Router = () => {
    const { user, setUser } = useUser();
    const verifyToken = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                // verify token
                const response= await fetch("http://localhost:4000/api/auth/verify-token",{
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'application/json',
                    },
                     body: JSON.stringify({token:token}),
                }).then((response) => response.json())
                if (response.status == "error") throw Error("Something went wrong")
                setUser({...response.data})
            }
        } catch (err) {
            localStorage.removeItem("token")
            // refresh website
            window.location.reload();

          }
     }
    useEffect(() => {
        verifyToken();
    }, [])
    
    if (localStorage.getItem("token")&&!user) { 
        return (<div style={{ height: "100vh", with: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h3>Loading</h3>
        </div>)
    }



return (
    <div>
        <BrowserRouter>
            {/* <Register /> */}
            
            {/* <TopNavigation /> */}
            
            {user ? <TopNavigation/>: <Link to="/login"></Link>}

            
            <Routes>  
                <Route path="/" element={<LandingPage/>}/>
                

                <Route path="/login" element={user?<Navigate replace to="/dashboard/a"/> :<Login />} />
                <Route path="/register" element={user?<Navigate replace to="/"/>:<Register />} /> 
                <Route path="/dashboard/:sub_route" element={
                    user ? (user.role.type == "PATIENT" ? <PatientDashboard /> :(user.role.type == "DOCTOR" ? <DoctorDashboard /> : <AdminDashboard />) ): <Navigate replace to="/login" />} />    
                <Route path="/admin" element={<AdminDashboard />} /> 
                
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default Router;