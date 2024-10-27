import axios from 'axios'
import './VolunteersProfile.css' 
import React, { useEffect } from 'react'
import { useState } from 'react'


function Subfunction (props)  {
    return (
        <div className='content'>
            <div className='picimg'>
                <img src={props.img}alt="img"/>
            </div>
         <div className='name'>
         <h1>{props.name}</h1>
        </div> 
        <div className='usern'>
        <h2>{props.usern}</h2>
        </div>  
           <div className='phone'>
           <h2>{props.phone}</h2>
           </div>
           
        </div>
    )
}
const img = [
    "https://plus.unsplash.com/premium_photo-1682095570525-d0582d759605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1779534054.1722068175&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?ga=GA1.1.1779534054.1722068175&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1779534054.1722068175&semt=ais_hybrid",
     "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?ga=GA1.1.1779534054.1722068175&semt=ais_hybrid"
];
const VolunteersProfile = () => {


    const[info,setInfo]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>(setInfo(res.data)))
    }, [])

   
  return (
   <>
   <div className='mains'>

  
   <div className='div1'>  
     <div className='heads'>
        <h1 style={{color:'blue'}}>Volunteers Profile</h1>
     </div>
     </div> 
   <div className='bbody'>
  
   {
        info.map((user,index)=>(
            <Subfunction  key={user.id} name={user.name} usern={user.username} phone={user.phone} img={ img[index % img.length]}
                
            />
        ))
   }
   </div>
   </div>
   </>
  )
}

export default VolunteersProfile