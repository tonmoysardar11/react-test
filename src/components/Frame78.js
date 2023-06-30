import React, { useState } from 'react'
import './Frame78.css'
import lt from './linetext.png'

const Frame78 = () => {
  let arr = [{ name: 'Basic Plan',
   detail: "Lorem Ipsum is simply dummy text of the printing and typesetting ", 
   benefits: [ "Free access to video class",
    'Free access to video class', 
    'Free access to video class' ]
   },{ name: 'Premium Plan',
   detail: "Lorem Ipsum is simply dummy text of the printing and typesetting ", 
   benefits: [ "Free access to video class",
    'Free access to video class', 
    'Free access to video class' ]
   },{ name: 'Basic Plan',
   detail: "Lorem Ipsum is simply dummy text of the printing and typesetting ", 
   benefits: [ "Free access to video class",
    'Free access to video class', 
    'Free access to video class' ]
   }]
  const [plan] = useState(arr);
  const [active, setactive] = useState('monthly');

  return (
    <div className='frame78'>
      <img src={lt} alt="" id='lt' />
      <div className="frame78cont">
      <p className='heading78'>Choose Your Plan</p>
      <p className="text78">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
      <div className="planchange">
        <p id='monthly' onClick={()=>{setactive('monthly')}} style={active==="monthly"?{color:'white',backgroundColor:"#7A3199"}:{}}>Monthly</p>
        <p id='yearly' onClick={()=>{setactive('yearly')}} style={active==="yearly"?{color:'white',backgroundColor:"#7A3199"}:{}}>Yearly</p>
      </div>
      <div className="cardlist78">
        {plan.map((element,index) => {
          return <div className="card78" key={index} style={element.name==='Basic Plan'?{backgroundColor:"white"}:{backgroundColor:"#7A3199"}}>
            <p className="planname" style={element.name==='Basic Plan'?{color:"black"}:{color:"white"}}>
              {element.name}
            </p>
            <p className="plandetails" style={element.name==='Basic Plan'?{color:"black"}:{color:"white"}}>
              {element.detail}
            </p>
            <p className='planvalue' style={element.name==='Basic Plan'?{color:"black"}:{color:"white"}}><span className="big" style={element.name==='Basic Plan'?{color:"#7A3199"}:{color:"white"}}>$ {active==="monthly"?54:54*12}</span> /{active}</p>
            <ul className="benefits" style={element.name==='Basic Plan'?{color:"black"}:{color:"white"}}>
              {element.benefits.map((item,index)=>{
                return <li key={index}>{item}</li>
              })}

            </ul>
            <button className="planbtn"style={element.name==='Basic Plan'?{color:"#7A3199",borderColor:"#7A3199",backgroundColor:'white'}:{color:"white",borderColor:"white",backgroundColor:'#7A3199'}}> <p> Start Free Trail</p> </button>
          </div>

        })}
      </div>
      </div>

    </div>
  )
}

export default Frame78
