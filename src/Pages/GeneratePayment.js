import React,{useEffect} from 'react';
import {Box,TextField,Button} from '@mui/material'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema=yup.object({
  PatientBillId:yup.number().required("PatientBillId is required"),
  PatientName:yup.string().required("PatientName is required").matches(/^[A-Z?!\sa-z]+$/,"Invalid Type"),
  Age:yup.number().min(1,"Minimum is 1").max(100,"Maximum is 100").required("Enter Between 1-100"),
  Gender:yup.string().required("Gender is required"),
  Address:yup.string().required("Address is required"),
  ContactNumber:yup.number().required("ContactNumber is required"),
  status:yup.string().required("Status is required")
})

const  GeneratePayment=()=> {
  const Navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      PatientBillId:"",
      PatientName:"",
      Age:"",
      Gender:"",
      Address:"",
      ContactNumber:"",
      status:""
  },
  onSubmit:(values)=>{
    console.log(JSON.stringify(values));
    axios.post('https://localhost:44317/api/values',values).then(()=>{
      swal("Added!","Details have been added", "success").then(function(){
        Navigate("/");
      });
    })
  },
  validationSchema:validationSchema

  })  

    return (
      <>
     <Box sx={{ display: 'flex'}}>
     <SideBar/>
        <Box component={Paper} sx={{ flexGrow: 1, p: 3, m: 10}}>
        <h1>Generate Payment</h1><br/> 
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} sx={{ width: '50%' }}>
        <h2>Patient's Details</h2>

        <TextField
        value={formik.values.PatientBillId}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="PatientBillId"
        autoComplete='off'
        label="PatientBillId"
        varient="outlined"
        error={formik.touched.PatientBillId && Boolean(formik.errors.PatientBillId)}
        helperText={formik.touched.PatientBillId && formik.errors.PatientBillId}
        onBlur={formik.handleBlur}
        />
        <TextField
        value={formik.values.PatientName}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="PatientName"
        autoComplete='off'
        label="PatientName"
        varient="outlined"
        error={formik.touched.PatientName && Boolean(formik.errors.PatientName)}
        helperText={formik.touched.PatientName && formik.errors.PatientName}
        onBlur={formik.handleBlur}
        />
        <TextField
        value={formik.values.Age}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="Age"
        autoComplete='off'
        label="Age"
        varient="outlined"
        error={formik.touched.Age && Boolean(formik.errors.Age)}
        helperText={formik.touched.Age && formik.errors.Age}
        onBlur={formik.handleBlur}
        />
        <TextField
        value={formik.values.Gender}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="Gender"
        autoComplete='off'
        label="Gender"
        varient="outlined"
        error={formik.touched.Gender && Boolean(formik.errors.Gender)}
        helperText={formik.touched.Gender && formik.errors.Gender}
        onBlur={formik.handleBlur}
        />
      <TextField
        value={formik.values.Address}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="Address"
        autoComplete='off'
        label="Address"
        varient="outlined"
        error={formik.touched.Address && Boolean(formik.errors.Address)}
        helperText={formik.touched.Address && formik.errors.Address}
        onBlur={formik.handleBlur}
        />
        <TextField
        value={formik.values.ContactNumber}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="ContactNumber"
        autoComplete='off'
        label="ContactNumber"
        varient="outlined"
        error={formik.touched.ContactNumber && Boolean(formik.errors.ContactNumber)}
        helperText={formik.touched.ContactNumber && formik.errors.ContactNumber}
        onBlur={formik.handleBlur}
        />
         
        <TextField
        value={formik.values.Status}
        onChange={formik.handleChange}
        id="outlined-basic"
        name="status"
        autoComplete='off'
        label="status"
        varient="outlined"
        error={formik.touched.status && Boolean(formik.errors.status)}
        helperText={formik.touched.status && formik.errors.status}
        onBlur={formik.handleBlur}
        />
        <Button type="Submit" variant='contained'>Add</Button>
    </Stack> 
    </form>
        </Box>
     </Box>
       
      </>
    );
  }
  
  export default GeneratePayment;
  