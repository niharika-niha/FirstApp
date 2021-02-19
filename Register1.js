import React from "react";
import './Register1.css';
import { useFormik } from "formik";
import * as Yup from "yup";
     
     const validationSchema = 
     Yup.object().shape({
      firstName: Yup.string()
      .required('First Name is required'),
     lastName: Yup.string()
      .required('Last Name is required'),
     email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
     password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
     confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
       
     
     });
     
     export default function Register1() {
       const { handleSubmit, handleChange, values, errors } = useFormik({
         initialValues: {
           firstName: "",
           lastName: "",
           email:"",
           password:"",
           confirmPassword:"",
         },
         validationSchema,
         onSubmit(values) {
           alert("Hurry!!, Formik Applied Perfectly");
           
         }
       });
       return (
         <div class="formik-style">
           
         <form  onSubmit={handleSubmit}>
           
           
           <label> FIRST NAME </label><br/>
           <input
             type="firstName" 
             name="firstName"
             onChange={handleChange}
             values={values.firstName}
          /><br/>
           <font color='red'>
           {errors.firstName ? errors.firstName : null}<br/>
           </font>
           

           <label> LAST NAME </label><br/>
            <input type="lastName"  
             name="lastName"
             onChange={handleChange}
             values={values.lastName}
           /><br/>
           <font color='red'>
           {errors.lastName ? errors.lastName : null}<br/>
           </font>
           


           <label> EMAIL ID </label><br/>
            <input type="email" 
             name="email"
             onChange={handleChange}
             values={values.email}
           /><br/>
           <font color='red'>
           {errors.email ? errors.email : null}<br/>
           </font>
           


           <label> PASSWORD</label><br/>
            <input type="password" 
             name="password"
             onChange={handleChange}
             values={values.password}
           /><br/>
           <font color='red'>
           {errors.password ? errors.password : null}<br/>
           </font>
         


           <label> CONFIRM PASSWORD </label><br/>
            <input type="password" 
             name="confirmPassword"
             onChange={handleChange}
             values={values.passsword}
           /><br/>
           <font color='red'>
           {errors.confirmPassword ? errors.confirmPassword : null}<br/>
           </font>
          

         
           <button type="submit" className="btn" >SUBMIT</button> 
           <button type="reset" className="btn">RESET</button>
          
         </form>
         
         </div>
       );
     }