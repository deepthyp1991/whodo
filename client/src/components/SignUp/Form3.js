import React from "react";
import "./SignUp.css";
export default function Form3(props) {
  const {details,setDetails, onNext, error} = props;
  
  const signupForm = {
    marginTop: "200px",
    marginLeft:"500px"
   }
  
  const signupButton = {
    backgroundColor:"black",
    color: "white",
    padding: "10px 14px",
    margin:" 20px 5",
    cursor: "pointer",
    width: "20%",
    height: "50px",
    marginLeft:"40px",
    borderRadius: "18px",
    outline:"none",
    fontWeight: "bold",
    fontSize:"20px"
  }
  
    const signupInput = {
      width: "50%",
      padding: "12px 20px",
      margin: "8px 0",
      display: "inline-block",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      marginLeft:"150px",
      borderRadius: "15px",
      outline: "none"
    }
     const signupLabel9 = {
      fontWeight: "bold",
      fontSize: "25px",
      marginTop:"60px",
      marginLeft:"160px"
    }
    const signuplabel10 = {
      fontWeight: "bold",
      fontSize: "25px",
      marginTop:"60px",
      marginLeft:"160px"
    }
    const signuplabel11 = {
      fontWeight: "bold",
      fontSize: "25px",
      marginTop:"60px",
      marginLeft:"160px"
    }
  
    const inputEmail7 = {
      borderColor: "rgb(247,137,37)", 
      outline: "none", 
      padding:"15px",
      borderRadius: "15px",
      width: "50%", 
      borderWidth: "3px", 
      fontSize:"20px",
      marginLeft:"5px"
  }
  
  const inputEmail8 = {
    borderColor: "rgb(247,137,37)", 
    outline: "none", 
    padding:"15px",
    borderRadius: "15px",
    width: "50%", 
    borderWidth: "3px", 
    fontSize:"20px",
    marginLeft:"5px"
  }
  const inputEmail9 = {
    borderColor: "rgb(247,137,37)", 
    outline: "none", 
    padding:"15px",
    borderRadius: "15px",
    width: "50%", 
    borderWidth: "3px", 
    fontSize:"20px",
    marginLeft:"5px"
  }
  return (
   
      <div style={signupForm}>
      <div style={{ marginTop: 10 }}>
        <label style={signupLabel9} > Country<br /></label>
        <input style={inputEmail7} type="text" value={details.country} onChange={event => setDetails({...details, country:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
      <label style={signuplabel10} >Region<br /></label>
        <input style={inputEmail8} type="text" value={details.region} onChange={event => setDetails({...details, region:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
      <label style={signuplabel11} >City<br /></label>
        <input style={inputEmail9} type="text" value={details.city} onChange={event => setDetails({...details, city:event.target.value})}/>
      </div>
      <br />
      <button style={signupButton} onClick={onNext}>Next</button>
      <button style={signupButton}>Back</button>
   </div>
  )
}