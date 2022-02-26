import { useState } from "react";

export const Experimental = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const onChangeHandler = (fieldName, value)=>{
      if(fieldName === "name"){
        setName(value);
      }
      else if(fieldName==="email"){
        setEmail(value);
      }
    }
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      if(name.trim()==="" || email.trim() ==""){
        alert("required both field");
      }
      else{
        alert(name+" " +email);
        setName("");
        setEmail("");
      }
    }
    return (
      <div className="App">
        <form onSubmit={(e)=>{onSubmitHandler(e)}}>
          <input type="text" value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} /> <br/>
           <input type="email"  value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} /> <br/>
           <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }


//this is just for demo purposes
