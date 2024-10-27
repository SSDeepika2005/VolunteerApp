import * as React from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BasicTextFields() {
  const navi = useNavigate();
  
  //const handleEvent = () => {
   // navi("/login");
  //};
  const handleRegister=()=>{
    navi("/login")
  }
  const [data,setData]=useState({
    email:'',
    pass:''
  });
  const [error, setError]=useState({
    email:'',
    pass:''
  });

  const handleChange=(e)=>{
      const{name,value}=e.target
      setData({...data,[name]:value})
  }
  const validation=()=>{
    let newerror={};
    if(!data.email|| !/^\S+@\S+\.\S+$/.test(data.email))
    {
         newerror.email="Enter valid email address";
    }
    if(!data.pass|| data.pass.length < 8)
    {
      newerror.pass="Password must contains 8 characters";
    }
    setError(newerror);
    return Object.keys(newerror).length===0;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(validation())
    {
      navi("/projecthomepage");
    }
  }
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: 'url(https://www.shutterstock.com/image-photo/happy-volunteer-portrait-people-park-600nw-2507688333.jpg)', // Your provided background image
      backgroundSize: 'cover',
      
    }}>
      <Box
        component="form"
        sx={{
          maxWidth: 500,
          width: '100%', // Allow Box to take up full width up to maxWidth
          minHeight: '300px',
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 100,
          borderRadius: 6,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(0px)',
        }}
        noValidate
        autoComplete="off"
      >
        {/* Brighter logo */}
        <img 
          src="data:image/png;base64,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" 
          alt="Login Logo" 
          style={{ marginBottom: '20px', borderRadius: '50%' }} 
        />
       
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#000000',
            fontWeight: 'bold'
          }}
        >
          Welcome To Help HUB
        </Typography>
        
        <TextField
          id="email"
          label="Email Address*"
          variant="outlined"
          error={!!error.email}
          onChange={handleChange}
          helperText={error.email}
          value={data.email}
          name='email'
         
          

          fullWidth
          margin="normal"
          sx={{
            mb: 3,
           
            
            backgroundColor: '#FFFFFF',
            '& .MuiInputLabel-root': { color: '#333' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#000000' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#000000' },
              '&.Mui-focused fieldset': { borderColor: '#000000' },
            },
          }}
        />
        
        <TextField
          id="password"
          label="Password*"
          variant="outlined"
          type="password"
          error={!!error.pass}
          onChange={handleChange}
          helperText={error.pass}
          value={data.pass}
          name='pass'
          fullWidth
          margin="normal"
          sx={{
            mb: 3,
            backgroundColor: '#FFFFFF',
            '& .MuiInputLabel-root': { color: '#333' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#000000' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#333' },
              '&:hover fieldset': { borderColor: '#000000' },
              '&.Mui-focused fieldset': { borderColor: '#000000' },
            },
          }}
        />
        
        <FormGroup
          sx={{
            alignSelf: 'start',
            marginBottom: 3,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked sx={{
              color: '#000', // Changed to black when unchecked
              '&.Mui-checked': { color: '#000' }, // Black color when checked
            }} />}
            label="Remember me"
          />
        </FormGroup>

        {/* Sign Up Button with no background color */}
        <Button
          variant="outlined"
          fullWidth
          disableElevation
          onClick={handleSubmit}
          sx={{
            color: '#000000', // Initial text color (black)
            backgroundColor: '#FFFFFF', // Initial button background (white)
            borderColor: '#000000', // Black border
            padding: '10px 0',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#000000', // Change background to black on hover
              color: '#FFFFFF', // Change text to white on hover
              borderColor: '#000000'// Change text color on hover too
            },
          }}
        >
          Login
        </Button>
        <Button onClick={handleRegister}>Register</Button>
      </Box>
    </div>
  );
}
