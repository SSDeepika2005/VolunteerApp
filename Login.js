import React from 'react';
import "./Stylepage.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const handleEvent = () => {
    window.location.href = "/volunteer"; // Navigate to Volunteer page
  };
  const navigate = useNavigate();
  const handleEvents = () => {
    navigate("/projecthomepage");
    //window.location.href = "/projecthomapage"; // Navigate to Homepage
  };
  /*const [err,setErr]=("")
  const handleUsername=(e)=>{
     const name=e.target.value;
     if(name.length<3)
     {
          setErr("Enter valid name");
     }

  }
  const handlePassword=(e)=>{
    const pass=e.target.value;
    if(pass.length<8)
    {
      setErr("Password should contains maximum 8 character")
    }
  }
  const handleConfirm=(e)=>{
    const confirm=e.target.value;
    if(confirm!= pass)
    {
      setErr("Password doesn't match")
    }
  }
  
  
  */
  return (
    <div id="background-container">
      <div id="form-wrapper">
        <div id="form-container">
          <div className="reg">
            <h1>SIGN UP</h1>
          </div>
          <div className="form">
            <form className="registrationForm">
              <div className="input-group">
                <label>NAME</label>
                <input id="username" type="text" //onChange={handleUsername}
                />
              </div>
              
              <div className="input-group">
                <label>Password</label>
                <input type="password" //onChange={handlePassword}
                />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" //onChange={handleConfirm}
                />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" />
              </div>
              <div className="input-group">
                <label>Willing to be Volunteer</label>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                  <Stack direction="row" spacing={2}>
                    <Button onClick={handleEvent}>VOLUNTEER</Button>
                  </Stack>
                </FormControl>
              </div>
              <div className="submit">
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={handleEvents}>SUBMIT</Button>
                </Stack>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
