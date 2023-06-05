import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import InputText from "../../Components/InputText/InputText";
import Button from "../../Components/Button/button";
import "./Register.css"
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import LandingNavigation from "../../Navigation/LandingNavigation";





let schema = yup.object().shape({
  firstName: yup.string().required().min(2, "Must be more than 5"),
  // middleName: yup.string().min(2, "Must be more than 5"),
  lastName: yup.string().required().min(2, "Must be more than 5"),
  email: yup.string().required().email(),
  password: yup.string().required().min(5, "Must be more than 5"),
  address: yup.string().required().min(2, "Must be at least 2"),
  age: yup.number().required().max(100, "invalid ").min(18, "too young"),
  sex: yup.string().required(),
  phoneNo:yup.number().required(),
  
});



const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      // middleName:"",
      lastName: "",
      email: "",
      password: "",
      phoneNo:"",
      address: "",
      age: "",
      sex:"",
    
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
     const response= await fetch("http://localhost:4000/api/auth/register",{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...values,role:"PATIENT"}),
     }).then((response) => response.json()).catch(err => {
       alert("Error Occured")
     })
      if (response.status == "success") {
        // alert("success")
      } else { 
        alert(response.message)

      }
      resetForm();
      window.location.reload();

    },
  });


  return (    
      <div className="add-patient"  >
    <LandingNavigation/>
          <form style={{marginTop:"100px"}} >
        <div className="content">
        <label htmlFor="firstName">First Name</label>
        
          <InputText error={formik.errors.firstName} 
              id="firstName"
          name="firstName"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          />
          </div>        

          {/* <div className="content">
        <label htmlFor="middleName">Middle Name</label>
          <InputText 
            error={formik.errors.lastName}
          id="middleName"
          name="middleName"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.middleName}
          />
          </div> */}

<div className="content">
        <label htmlFor="lastName">Last Name</label>
          <InputText 
            error={formik.errors.lastName}
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          />
          </div>
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
<div className="content">
        <label htmlFor="address">Address</label>
          <InputText
            error={formik.errors.address}
            
          id="address"
          name="address"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        </div> 
        
        <div className="content">
        <label htmlFor="age">Age</label>
          <InputText
            error={formik.errors.age}
            
          id="age"
          name="age"
          type="number"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        </div> 

        <div className="content">
        <label htmlFor="phoneNo">PhoneNo</label>
          <InputText
            error={formik.errors.phoneNo}
            
          id="phoneNo"
          name="phoneNo"
          type="number"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNo}
        />
        </div> 

        <div className="content"
            // style={{width:"278px",marginLeft:"135px"}}
        
        >
        <label htmlFor="address">sex</label>
        <Dropdown
              options={
              ["Male","Female","Others"]}
              value={formik.values.sex}
              placeholder="Select an option"
            onChange={(value) => {
                formik.setFieldValue("sex", value.value)
              }}
            className={formik.errors.sex ? "dropdown-error" : ""}
            
            />
          
          </div> 

        <div style={{display:"flex", width:"100%"}}>
        <Button text="Register" onClick={formik.handleSubmit} />

        <Link className="link" to="/login"
          
        >
            <p style={{marginLeft:"95px"}} >Login</p>
          </Link>
          </div>
      </form>
    </div>
  );
};

export default Register;
