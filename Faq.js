import React, { useState } from 'react'
import './Faq.css'
export const Faqbody = (data) => {
    const[act,setact]=useState(false)
    const handletogle=()=>{
      setact(!act)
    }
  return (
    <>
  
    <div className='entire'>
    <div className='container'>
<div className={`faqbody ${act ? "active" : ""}`}>
 <div className='questionbody' onClick={handletogle}>
 <h3>{data.question}</h3>
 </div>

 <div className='FaqAnswer'>
    <div className='FaqAnswer-content'>
    <p>{data.answer}</p>
    </div>
 
 </div>
    </div>
    </div>
    </div>
    </>
  )
}

const Faq = () => {
    const arr = [
        {
          id: 1,
          question: "1. Who are Volunteers?",
          answer: "They help."
        },
        {
          id: 2,
          question: "2. What do Volunteers do?",
          answer: "They assist in various community activities."
        },
        {
          id: 3,
          question: "3. How can I become a Volunteer?",
          answer: "You can sign up on our platform."
        },
        {
          id: 4,
          question: "4. Why is volunteering important?",
          answer: "It helps communities grow and supports those in need."
        }
      ];
  return (
    <div className='maincontainer'>
        <div className='heads'>
        <h1 style={{color:"blueviolet"}}>FAQ</h1>
    </div>
         
    <h2 style={{color:"red"}} >Volunteering is fun work. We’ve listed a few FAQs to explain how it all works.</h2>
      <div>
       
        {
            arr.map((index)=>(
             <Faqbody key={index} question={index.question} answer={index.answer}/>
            ))
        }
      </div>

    </div>
  )
}

export default Faq