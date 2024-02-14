import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Isaac from "../Images/isaac.jpg"
import Pawwka from "../Images/pawwka.jpg"
import Kent from "../Images/kent.jpg"


function NewInsta() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPronoun, setUserPronoun] = useState("");
  const [userInsta, setUserInsta] = useState("");

  const addUser = (newUser) => {
    return fetch("http://localhost:3001/newInsta", { 
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newUser),
    })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Network response incorrect');
      }
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('fetch operation error:', error);
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
    
    addUser(newUser).then(() => {
      setUserName("");
      setUserAge("");
      setUserPronoun("");
      setUserInsta("");
    }).catch((error) => {
      console.log(error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const stateUpdateFunction = {
      "name": setUserName,
      "age": setUserAge,
      "pronoun": setUserPronoun,
      "insta": setUserInsta, 
    };

    if (stateUpdateFunction[name]) {
      stateUpdateFunction[name](value);
    }
  };



  return (
    <div className="new-insta-form">
        <header className="header-container">
        <span className="logo" role="img">🍔🍔🍔</span>
        <h1 className="header-title">
          Build-a-Burger
          </h1>
          <span className="logo" role="img">
          🍔🍔🍔
          </span>
        
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="User name" value={userName} onChange={onChangeHandler}/>
        <input type="text" name="age" placeholder="Age" value={userAge} onChange={onChangeHandler}/>
        <input type="text" name="pronoun" placeholder="Pronouns" value={userPronoun} onChange={onChangeHandler}/>
        <input type="text" name="insta" placeholder="Instagram URL" value={userInsta} onChange={onChangeHandler}/> {/* Adjusted name from "image" to "insta" to match state */}
        <button type="submit">Add New Insta</button>
      </form>
      <h2>Thank you for being a part of the Build-A-Burger experience!</h2>
      <p>Drop your info and insta handle and don't forget to tag us to join the build-a-wall</p>
      <NavLink to="/App">~-GO BACK BACK!-~</NavLink>
      <ul className="selfie-card">
       <li>
       <img src= {Pawwka} alt="A boy and his burger" />
       <img src= {Isaac} alt="A bro and his burger" />
       <img src= {Kent} alt="A burger" />
      </li> 
      </ul>
    </div>
  );
}

export default NewInsta;