import React, { useState }from 'react'
import {NavLink} from "react-router-dom"


function NewInsta() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPronoun, setUserPronoun] = useState("");
  const [userInsta, setUserInsta] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: userName,
      age: userAge, 
      pronoun: userPronoun,
      insta: userInsta

    };

    addUser(newUser);
    setUserName("");
    setUserAge("");
    setUserPronoun("");
    setUserInsta("")

};
  
 return (
   <div className="new-insta-form">
    <h2>New Insta</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="User name" onChange={(event) => setUserName(event.target.value)}/>
      <input type="text" name="age" placeholder= "Age" onChange={(event)=> setUserAge(event.target.value)}/>
      <input type="text" name="prounoun" placeholder= "Pronouns" onChange={(event)=> setUserPronoun(event.target.value)}/>
      <input type="text" name="image" placeholder="Image URL" onChange={(event) => setUserInsta(event.target.value)}/>
   
      <button type="submit">Add New Instat</button>
    </form>
    <NavLink to="/App">-GO BACK!-</NavLink>
        
  </div>
         
          
      )



}


export default NewInsta