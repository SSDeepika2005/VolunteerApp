import React from 'react'
import './HelpHub.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import { useNavigate } from 'react-router-dom';

const HelpHub = () => {
  //const navigate = useNavigate(); // Hook for programmatic navigation

  const handleApplyClick = () => {
    window.location.href = "/volunteer";
   // navigate('/volunteer'); // Navigate to the Volunteer page when the button is clicked
  };
  return (
    <>
  <div>
    <div className='containerhelp'>
    <div className='text-contenthelp'>
        <h1 style={{color:'beige'}}>HELP HUB</h1>
        <p> Welcome to HelpHub, your all-in-one platform designed to connect volunteers, donors, and 
        communities in need.
            
        </p>
        </div>
        <div>
            <img src="https://media.istockphoto.com/id/1125541252/photo/diverse-hands-supporting-a-blank-yellow-round-board.jpg?s=612x612&w=0&k=20&c=yakyY0ayY8UximGRUsuNcEqxmTeDu1cJL8A_oPp3ebY=" alt="img"></img>
        </div>
    </div>
  </div>
   <div className='volunteer'>
    <div className='volunteer-head'><h1>Call For Volunteers</h1></div>
     <div className='volunteer-text'>
       
         <p style={{fontWeight:'600'}} >
         At HelpHub, we believe in
         the power of collaboration and communication to drive
          positive change. Whether you're a passionate volunteer, an 
          organization seeking help, or a generous donor, our app bridges the gap 
          and makes it easier than ever to make a meaningful impact.
        </p>
        <div>
            <img src="https://members.local706.org/static/media/uploads/blog/.thumbnails/call-770x0.png" alt="img"/>
        </div>
        <p style={{fontWeight:'400'}} >
        The volunteer program is an integral part of India and plays a big role in its continued success. If you would like to be a part of 
        it, here is some information
         about our volunteering opportunities. 
         Just fill out the online registration form to apply as a volunteer.
        </p>
        <p style={{fontFamily:'cursive', color:'orange'}}>Apply for volunteers program if you are interested</p>
        <div className='stack-button'>
        <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleApplyClick}>APPLY</Button>
    </Stack>
    </div>
     </div>
  
   </div>



<div className='selectionprocess' style={{padding:'20px'}}>
<h1>Selection Process</h1>
<div style={{display:'flex'}} >
  
      <img style={{height:"500px", marginRight:"30px"}}
      src="https://m.media-amazon.com/images/I/81vx6un8PUL._AC_UF350,350_QL80_.jpg" alt="recruit img"/>
      <div>
         <div style={{display:'flex',gap:'20px'}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>Users submit a basic application with their personal details, contact information, and preferred roles or interests in volunteering.</p>
          </div>
          <div style={{display:'flex', gap:"20px"}}>
          <p className='shapes' ></p>
          <p style={{fontFamily:'cursive'}}>Inform candidates about the background check process (if required) and obtain their consent for any checks relevant to our organization.</p>
          </div>
          <div style={{display:'flex',gap:"20px"}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>Send an acceptance notification and request confirmation of participation. This can also include signing any agreements or consent forms directly in the app.</p>
          </div>
          <div style={{display:'flex',gap:"20px"}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>Assign the candidate to a specific volunteer role and team, and inform them about their role, schedule, and the contact person they’ll report to.</p>
          </div>
          <div style={{display:'flex',gap:"20px"}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>Once accepted, you’ll receive a confirmation and instructions on formalities like agreements or forms.</p>
          </div>

          <div style={{display:'flex',gap:"20px"}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>You’ll be assigned a role and team, along with a contact person and your schedule.</p>
          </div>

          <div style={{display:'flex',gap:"20px"}}>
          <p className='shapes'></p>
          <p style={{fontFamily:'cursive'}}>Provide feedback on the program and roles, helping us continue improving the volunteer experience.</p>
          </div>

      </div>
</div>
</div>
   </>
  )
}

export default HelpHub