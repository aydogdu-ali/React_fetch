import React from "react";
import Users from "./Users";
import { useState } from "react";

const Information = () => {
    const[show, setShow] = useState(false)
    const [text,setText] = useState("Show")
   
const handletoogle =()=>{
     setShow(!show);
    const buttonText = show ? "Show":"Hide"
    setText(buttonText);
}



  return (
    <> 
    <div className='information'>
        <h1>
        Please click here to see user information
        </h1>
        <p><button onClick={handletoogle} 
        className='button'
        >{text}</button></p>
    </div>
    
        {show&& (
          <div>
            <Users/> 
          </div> )}
    
    </>
  )
}

export default Information