import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Volunteer from '../Volunteer/Volunteer';
import VolunteersProfile from '../VolunteersProfile/VolunteersProfile';
import HelpHub from '../HelpHub/HelpHub';
import ProjectHomepage from '../ProjectHomepage/ProjectHomepage';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteer" element={<Volunteer />} />
        
        {/* Main layout route with navigation */}
        <Route path="/projecthomepage" element={<ProjectHomepage />}>
          {/* Define child routes here */}
          <Route index element={<HelpHub />} /> {/* Renders HelpHub on the homepage */}
          <Route path="about" element={<About />} />  {/* About page */}
          <Route path="volunteerprofile" element={<VolunteersProfile />} />  {/* Profile page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
