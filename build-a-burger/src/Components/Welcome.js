import React from "react" 
import {NavLink} from "react-router-dom"

function Welcome() {
    return (
      <div className="welcome-container">
        <h1 className="welcome-heading">BUILD YOUR BURGER</h1>
        <img
          className="burger-image"
          src="https://www.pngmart.com/files/16/Cheese-Burger-PNG-Photos.png"
          alt="Cheese Burger"
        />
        <NavLink className="get-building-link" to="/App">
          -GET BUILDING!-
        </NavLink>
      </div>
    );
  }

export default Welcome