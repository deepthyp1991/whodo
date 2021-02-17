import React from "react";
import "./SignUp.css";

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
   const signuplabel1 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }
  const signuplabel2 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }
  const signuplabel3 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }

  const inputEmail1 = {
    borderColor: "rgb(247,137,37)", 
    outline: "none", 
    padding:"15px",
    borderRadius: "15px",
    width: "50%", 
    borderWidth: "3px", 
    fontSize:"20px"
}

const inputEmail2 = {
  borderColor: "rgb(247,137,37)", 
  outline: "none", 
  padding:"15px",
  borderRadius: "15px",
  width: "50%", 
  borderWidth: "3px", 
  fontSize:"20px",
  marginLeft:"5px"
}
const inputEmail3 = {
  borderColor: "rgb(247,137,37)", 
  outline: "none", 
  padding:"15px",
  borderRadius: "15px",
  width: "50%", 
  borderWidth: "3px", 
  fontSize:"20px",
  marginLeft:"5px"
}
  
export default function Form1(props) {
  const {details,setDetails, onNext, error} = props;
  return (
   
    <div style={signupForm}>
     
      
      {(error !== "") ? (<div>{error}</div>) : "" }
      <div>
        <label style={signuplabel1} for ="email">Email</label><br />
        <input style={inputEmail1} type="email" value={details.email} onChange={event => setDetails({...details, email:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={signuplabel2}> Password<br /></label> 
        <input style={inputEmail2}  type="password" value={details.password} onChange={event => setDetails({...details, password:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={signuplabel3}> Confirm password<br /></label>
        <input style={inputEmail3}  type="password"/>
      </div>
      <br />
      <button style={signupButton} onClick={onNext}>Next</button>
      <button style={signupButton}>Cancel</button>
    
      </div>
  
  )
}