import React from "react";

const signupForm = {
  marginTop: "200px",
  marginLeft:"500px"
 }

const form2Btn = {
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


   const signuplabel4 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }
  const signuplabel5 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }
  const signuplabel6 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }

  const signupLabel7 = {
    fontWeight: "bold",
    fontSize: "25px",
    marginTop:"60px",
    marginLeft:"160px"
  }


  const inputEmail4 = {
    borderColor: "rgb(247,137,37)", 
    outline: "none", 
    padding:"15px",
    borderRadius: "15px",
    width: "50%", 
    borderWidth: "3px", 
    fontSize:"20px",
    marginLeft:"3px"
}

const inputEmail5 = {
  borderColor: "rgb(247,137,37)", 
  outline: "none", 
  padding:"15px",
  borderRadius: "15px",
  width: "50%", 
  borderWidth: "3px", 
  fontSize:"20px",
  marginLeft:"5px"
}
const inputEmail6= {
  borderColor: "rgb(247,137,37)", 
  outline: "none", 
  padding:"15px",
  borderRadius: "15px",
  width: "50%", 
  borderWidth: "3px", 
  fontSize:"20px",
  marginLeft:"5px"
}

export default function Form2(props) {
  const {details,setDetails, onNext, error} = props;
  return (
    
    <div style={signupForm}>
      <div style={{marginLeft: 10}}>
       <label style={signuplabel4}>  Name<br /></label>
        <input style={inputEmail4} type="text" value={details.name} onChange={event => setDetails({...details, name:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
      <label style={signuplabel5}> Last Name<br /></label>
        <input style={inputEmail5} type="text" value={details.last_name} onChange={event => setDetails({...details, last_name:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
      <label style={signuplabel6}>  Date of birth<br /></label>
        <input style={inputEmail5} type="date" value={details.birth_date} onChange={event => setDetails({...details, birth_date:event.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
      <label style={signupLabel7}> Gender<br /></label>
        <input style={inputEmail6} type="text" value={details.gender} onChange={event => setDetails({...details, gender:event.target.value})}/>
      </div>
      <br />
      <button style={form2Btn} onClick={onNext}>Next</button>
      <button style={form2Btn}>Back</button>
   </div>
  
  )
}