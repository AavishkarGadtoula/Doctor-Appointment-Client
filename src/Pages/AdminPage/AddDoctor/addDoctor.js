import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./addDoctor.css"
import Button from "../../../Components/Button/button";
import InputText from "../../../Components/InputText/InputText";
import Dropdown from 'react-dropdown';




let schema = yup.object().shape({
  firstName: yup.string().required().min(5, "Must be more than 5"),
  lastName: yup.string().required().min(5, "Must be more than 5"),
  email: yup.string().required().email(),
  password: yup.string().required().min(5, "Must be more than 5"),
  // doctorId: yup.string().required().min(3, "Must be at least 3" ),
  address: yup.string().required().min(2,"Must be at least 2" ),
  specialization: yup.string().required().min(2, "Must be at least 2" ),
  experience: yup.string().required().min(2, "Must be at least 2"),
  age: yup.number().required().max(100, "invalid ").min(18, "too young"),
  sex: yup.string().required(),
});






const RegisterDoctor = () => {
  // const [picture,setPicture] = useState(null)
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      // doctorId: "",
      address: "",
      specialization: "",
      experience: "",
      age: "",
      sex: "",
      
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values,{resetForm}) => {
      console.log(values);
      
//       const formdata = new FormData();
//       formdata.append("files", picture);
// formdata.append("firstName", values.firstName);
// formdata.append("lastName", values.lastName);
// formdata.append("email", values.email);
// formdata.append("password", values.password);
// formdata.append("address", values.address);
// formdata.append("specialization", values.specialization);
// formdata.append("experience", values.experience);
// formdata.append("age", values.age);
// formdata.append("sex", values.sex);
      
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
          
        },
        // body: formdata 
        body: JSON.stringify({...values,role:"DOCTOR"}),
     }).then((response) => response.json()).catch(err => {
      alert("Error Occured")
    })
     if (response.status == "success") {
      //  alert("success")
     } else { 
       alert(response.message)

     }
      

      resetForm();
      window.location.reload();

    },
  });



  return (    
    <div className="add-doctor"  >
    
      <form className="form-area">
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
        {/* <div className="content">
        <label htmlFor="doctorId">Doctor Id</label>
          <InputText
            error={formik.errors.doctorId}
            
          id="doctorId"
          name="doctorId"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.doctorId}
        />
          </div> */}
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
        <label htmlFor="specialization">Specialization</label>
          <InputText
            error={formik.errors.specialization}
            
          id="specialization"
          name="specialization"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.specialization}
        />
          </div>
<div className="content">
        <label htmlFor="experience">Experience</label>
          <InputText
            error={formik.errors.experience}
            
          id="experience"
          name="experience"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.experience}
        />
        </div>
        <div className="content">
        <label htmlFor="address">Age</label>
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
        <label htmlFor="address">Sex</label>
        <Dropdown
              options={
              ["Male","Female","Others"]}
              value={formik.values.sex}
              placeholder="Select an option"
            onChange={(value) => {
                formik.setFieldValue("sex", value.value)
              }}
              className={formik.errors.sex?"dropdown-error":""}
            />
          
        </div> 
        

        {/* <div className="content">
        <label htmlFor="lastName">Profile Pic</label>
          <InputText 
            error={formik.errors.picture}
          id="picture"
          name="picture"
          type="file"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.picture}
          />
          <input type="file" 
            onChange={(e) => {
              console.log(e.target.files[0],"files")
              setPicture({...e.target.files[0]})
            }}
          />
          
          </div> */}

          {/* <Button/> */}
          <Button text="Register" onClick={formik.handleSubmit} />
          
      </form>
    </div>
  );
};

export default RegisterDoctor;
