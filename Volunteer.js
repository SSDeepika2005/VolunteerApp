import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function BasicTextFields() {
  const[formdata,setformdata]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    bloodGroup: '',
    gender: '',
    address: '',
    workDays: []
  });
  const handleChange=(e)=>{
     const{name, value}=e.target;
     setformdata({...formdata,[name]:value})
  };
  const [error,setError]=useState({});
  const validateForm=()=>{
    let newError={};

    if(!formdata.firstName )
    {
      newError.firstName="First Name is required";
    }
    if(!formdata.lastName)
    {
      newError.lastName="Last Name is required";
    }
    if(!formdata.email || !/^\S+@\S+\.\S+$/.test(formdata.email))
    {
      newError.email="Enter a valid email address";
    }
    if(formdata.password.length<6)
    {
      newError.password="Password should be at least 8 characters";
    }
    if(!formdata.age || formdata.age<18)
    {
      newError.age="Enter a valid age(18+)";
    }
    if (!formdata.bloodGroup) {
      newError.bloodGroup = "Blood Group is required";
    }
    if (!formdata.gender) {
      newError.gender = "Gender is required";
    }
    if (!formdata.address) {
      newError.address = "Address is required";
    }
    
    setError(newError);
    return Object.keys(newError).length===0;
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(validateForm())
    {
      alert("Form submitted successfully");
    }
   
  };
  return (
    <div >
    <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        component="form"
        sx={{
          p: 3, // Padding around the form
          borderRadius: 2,
          boxShadow: 4, // Shadow for the form
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Form background
          width: '100%',
          maxWidth: '400px', // Form width
        }}
        noValidate
        autoComplete="off"
      >
        {/* Image inside the form box */}
        <Box
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/volunteers-community-raising-hand-up-banner-with-light-effect-vector_1017-48365.jpg?t=st=1725128191~exp=1725131791~hmac=3b9ee201780b1aa7f06bb6271bc0b054ec6791a1c0b794103cc2c9f08bc68fc4&w=1060)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '150px', // Set the height of the image
            width: '100%',
            borderRadius: '8px',
            mb: 3, // Margin bottom
            
          }}
        />
        <Typography variant="h5" gutterBottom>
        
        </Typography>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.firstName}
          helperText={error.firstName}
          value={formdata.firstName}
          name="firstName"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.lastName}
          helperText={error.lastName}
          value={formdata.lastName}
          name="lastName"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.email}
          helperText={error.email}
          value={formdata.email}
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          error={!!error.password}
          helperText={error.password}
          onChange={handleChange}
          value={formdata.password}
          name="password"
        />
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.age}
          value={formdata.age}
          helperText={error.age}
          name="age"
        />
        <TextField
          id="outlined-basic"
          label="Blood Group"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.bloodGroup}
          helperText={error.bloodGroup}
          value={formdata.bloodGroup}
          name="bloodGroup"
        />
        <TextField
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.gender}
          value={formdata.gender}
          helperText={error.gender}
          name="gender"
        />
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          error={!!error.address}
          helperText={error.address}
          value={formdata.address}
          name="address"
        />
        
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Which days do you want to work?
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Monday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Tuesday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Wednesday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Thursday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Friday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Saturday"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Sunday"
          />
        </FormGroup>
        
        <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
          <Button variant="contained" color='primary' onClick={handleSubmit}>
            Recruit Me
          </Button>
        </Stack>
      </Box>
    </Box>
    </div>
  );
}
