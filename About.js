import React from 'react'
import './About.css'
import Faq from '../Faq/Faq'
function Pictures(props){
    return(
        <>
    
    <div className='pic'>
     <img src={props.image} alt="img"/>
   
        <p>
            {props.info}
        </p>
    </div>
    
    
    </>
    )
}
const About = () => {
    const arr=[
        {
            id:1,
            image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQhMBg2F-CuvRKtoSaobhySFn2Jh7h5lsQg&s",
            info:"Using our app, volunteers efficiently organized and executed a beach cleanup."
        },
        {
            id:2,
            image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ft6LHFnQ1l2lgy-8jEYmP4kN4VbzU_xyGA&s",
            info:"A volunteer noticed a truck stuck and quickly posted the issue on our app. Thanks to the instant alert, fellow volunteers immediately responded and rushed to the spot to offer help."
        },
        {
            id:3,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqQFoucLsZNA7VWskYCF7i80Jz31nIdojug&s",
            info:"Volunteers spotted a street dog in need and shared the situation through our app. Within moments, others coordinated through the platform and arrived to provide care and assistance."
        },
        {
            id:4,
            image:"https://i0.wp.com/aksharacentre.org/wp-content/uploads/2022/03/homepage-banner-01-slogan.jpg?fit=1024%2C485&ssl=1",
            info:"Empowered by our app, volunteers raised their voices against women's injustice, fostering awareness and igniting important conversations within their communities."
        },
        {
            id:5,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoqIO9vzRCiFJlyZBwAM2fGpwAGIaON6ZC7uh1hqxDKcrP0e67-CZuJLbU39ukuP7Xqs&usqp=CAU",
            info:"Through our app, women volunteers stepped up during the flood crisis, providing essential food aid to those in need and showcasing their unwavering commitment to community support."
        }
    ]
  return (
    <>
    
    <div className='about'>
       <div className='abtheads'>
       <h1 style={{color:"red"}}>Highlights</h1>
        </div> 
        <div className='containerabt'>
         {
         arr.map((index)=>(
        <Pictures key={index.id} image={index.image} info={index.info}/>
         ))
        }
        </div>
        <div>
        <Faq/>
        </div>
        
    </div>
    </>
    
  )
}

export default About