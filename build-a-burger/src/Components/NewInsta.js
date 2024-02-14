import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function NewInsta() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPronoun, setUserPronoun] = useState("");
  const [userInsta, setUserInsta] = useState("");

  const addUser = (newUser) => {
    fetch("http://localhost:3001/newInsta", { 
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newUser),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data); 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: userName,
      age: userAge,
      pronoun: userPronoun,
      insta: userInsta
    };
    
    addUser(newUser); 
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const stateUpdateFunction = {
      "name": setUserName,
      "age": setUserAge,
      "pronoun": setUserPronoun,
      "image": setUserInsta,
    };

    const stateUpdate = stateUpdateFunction[name];
    if (stateUpdate) {
      stateUpdate(value);
    }
  };

  return (
    <div className="new-insta-form">
      <h2>New Insta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="User name" onChange={onChangeHandler}/>
        <input type="text" name="age" placeholder="Age" onChange={onChangeHandler}/>
        <input type="text" name="pronoun" placeholder="Pronouns" onChange={onChangeHandler}/>
        <input type="text" name="image" placeholder="Image URL" onChange={onChangeHandler}/>
     
        <button type="submit">Add New Insta</button>
      </form>
      <NavLink to="/App">-GO BACK!-</NavLink>
       
    </div>
  );
}

export default NewInsta;