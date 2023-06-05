import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import InputText from "../../Components/InputText/InputText";
import Button from "../../Components/Button/button";
import "./Login.css";
import { Link } from "react-router-dom";
import LandingNavigation from "../../Navigation/LandingNavigation";


let schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(5, "Must be more than 5"),
});

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      const response= await fetch("http://localhost:4000/api/auth/login",{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...values}),
     }).then((response) => response.json()).catch(err => {
       alert("Error Occured")
     })
      if (response.status == "success") {
        localStorage.setItem("token", response.data.token)
            // refresh website
            window.location.reload();
      } else { 
        alert(response.message)

      }
      // resetForm();
    },
  });

  return (
    <div className="add-patient">

      <LandingNavigation/>
      
      <form style={{marginTop:"100px"}} >
        <div className="content">
          <label htmlFor="email">Email</label>
          <InputText
            error={formik.errors.email}
            id="email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className="content">
          <label htmlFor="password">Password</label>
          <InputText
            error={formik.errors.password}
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>

        <div style={{display:"flex", width:"100%"}}>
        
        <Button text="Login" onClick={formik.handleSubmit} />
        
        
        <Link className="link" to="/register"
         
        >
            <p style={{marginLeft:"90px"}} >Register</p>
          </Link>
          </div>
          
      </form>
    </div>
  );
};

export default Login;
