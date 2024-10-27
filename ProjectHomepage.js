import React from 'react';
import './ProjectHomepage.css';
import { useNavigate, Outlet } from 'react-router-dom';

const ProjectHomepage = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("about"); // Use relative path for navigating to the About page
  };

  const handleProfile = () => {
    navigate("volunteerprofile"); // Use relative path for navigating to the Profile page
  };
  const handleLogout = ()=>{
    navigate("/")
  }
  return (
    <div>
      <div className='navigation'>
        <div className='home'>
          <button className='navigation-button' onClick={() => navigate("/projecthomepage")}>HOME</button>
        </div>
        <div className='contact'>
          <button className='navigation-button' onClick={handleProfile}>Profile</button>
        </div>
        <div className='about'>
          <button className='navigation-button' onClick={handleAbout}>ABOUT US</button>
        </div>
        <div className='logout'>
        <button  className='navigation-button' onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
      
    </div>
  );
};

export default ProjectHomepage;
