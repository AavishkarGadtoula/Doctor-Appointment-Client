import React,{useState,useEffect} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import './BookAppointment.css';
import InputText from "../../../Components/InputText/InputText";
// import DropDown from "../../../Components/DropDown/dropDown";
import Button from "../../../Components/Button/button";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useUser } from "../../../Context/UserContext";


let schema = yup.object().shape({
  patientName: yup.string().required().min(2, "Must be more than 2"),
  patientId: yup.string().required(),
  schedule: yup.string().required(),
  doctor: yup.string().required(),

  // date: yup.date().default(function () {
  //   return new Date();
  // }),
  date:yup.date().test("test-name", "Invalid Date", 
    function(value) {
        // your logic
      if (!value) return false;
      const selectedDate = new Date(value);
      const currentDate = new Date();
      if (selectedDate < currentDate) return false;
      const diffTime = Math.abs(selectedDate - currentDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      if (diffDays > 7) { 
        return false
      }
      return true;
    })
});


const BookAppointment = () => {
  const { user } = useUser()


  const [doctors, setDoctors] = useState([])
  const [schedules, setSchedules] = useState([])

  const getDoctors = async () => {
    const dcrs= await fetch("http://localhost:4000/api/doctor",{
      method: 'GET', 
   
    }).then((response) => response.json()) 
    setDoctors([...dcrs])
  }


  const getSchedule = async (doctorId,date) => {
    const schedule= await fetch(`http://localhost:4000/api/doctor/${doctorId}/getSchedule/${date}`,{
      method: 'GET', 
    }).then((response) => response.json()) 
    console.log(schedule,"fetching")
   setSchedules([...schedule])
  }
  
  const bookAppointment = async(scheduleId) => {
    const response = await fetch(`http://localhost:4000/api/doctor/fixSchedule/${scheduleId}/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json());
    if (response.status == "success") {
      alert("Success")
          
    } else { 
      alert(response.message)

    }
  }
  


  const formik = useFormik({
    initialValues: {
      patientName: user.fname+" "+ user.lname,
      patientId: user.id,
      doctor: "",
      date: "",
      schedule:""
    },
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      bookAppointment(values.schedule)
      resetForm();
    },
  });
  useEffect(() => {

    if (formik.values.doctor !== "" && formik.values.date !== "") { 
      getSchedule(formik.values.doctor,formik.values.date);
     

    }
  }, [formik.values.doctor, formik.values.date])
  useEffect(() => { 
    getDoctors();
  }, [])
  return (
    <div className="book-appointment">
      <form>
        <div className="content-appointment">
          <label htmlFor="patientName">Full Name</label>

          <InputText
            error={formik.errors.patientName}
            id="patientName"
            name="patientName"
            type="text"
            autoComplete="off"
            onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            value={formik.values.patientName}

          />
        </div>
        <div className="content-appointment">
          <label htmlFor="patientId">Patient Id</label>
          <InputText
            error={formik.errors.patientId}
            id="patientId"
            name="patientId"
            type="text"
            autoComplete="off"
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientId}
          />
        </div>
        <div className="content-appointment"
        >
          <label htmlFor="disease">Doctor</label>
          <div style={{width:"95%"}}>

          <Dropdown
              options={doctors.map(d => {
                return d.fname + " " + d.lname
              })}
              value={null}
              placeholder="Select an option"
              onChange={(value) => {
                const dcr = doctors.find(d => d.fname + " " + d.lname == value.value, "doctor")
                formik.setFieldValue("doctor", dcr.id)
              }}
              className={formik.errors.doctor?"dropdown-error":""}
            />
          </div>
        </div>
        {formik.values.doctor &&
          <div className="content-appointment">
            <label htmlFor="date">Date</label>
            <InputText
              error={formik.errors.date}
              id="date"
              name="date"
              type="date"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
          </div>
        }
        {formik.values.doctor && formik.values.date && !formik.errors.date&&
          <div className="content-appointment"
          >
            <label htmlFor="disease">Time</label>
            <div style={{ width: "95%" }}>
              <Dropdown
                options={schedules.filter(s => {
                  if(s.status=="open") return true
                  return false
                }).map(s => { 
                  return {
                    value:s.id,
                    label:s.times,
                  }
                })}
                value={null}
                placeholder="Select an option"
                className={formik.errors.schedule ? "dropdown-error" : ""}
                onChange={(value) => {
                formik.setFieldValue("schedule", value.value)
              }}

              />
            </div>
          

         
          </div>
        }
        <Button text="Submit Data" style={{width:"300px",marginLeft:"120px"}} onClick={formik.handleSubmit} />
        
      </form>
    </div>
  );
};

export default BookAppointment;
