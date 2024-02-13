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

    
      setUserName("");
      setUserAge("");
      setUserPronoun("");
      setUserInsta("")
    
};


function onChangeHandler(event){
  setUserName(event.target.value)
  setUserAge(event.target.value)
  setUserPronoun(event.target.value)
  setUserInsta(event.target.value)
  
  
  
  const addUser = (newUser) => {
    fetch("http://localhost:3001/", {
    method: "POST",
    headers: {"Content-Type": "Application/JSON"},
    body: JSON.stringify(newUser),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setUserName([...NewInsta, newUser]);
    })
  };
}



  
 return (
   <div className="new-insta-form">
    <h2>New Insta</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="User name" onChange={onChangeHandler}/>
      <input type="text" name="age" placeholder= "Age" onChange={onChangeHandler}/>
      <input type="text" name="prounoun" placeholder= "Pronouns" onChange={onChangeHandler}/>
      <input type="text" name="image" placeholder="Image URL" onChange={onChangeHandler}/>
   
      <button type="submit">Add New Instat</button>
    </form>
    <NavLink to="/App">-GO BACK!-</NavLink>
     
  </div>
         
          
      )



}


export default NewInsta