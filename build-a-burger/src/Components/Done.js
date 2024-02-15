import React from "react"
import {NavLink} from "react-router-dom"

function Done(){
    return(
        <div>
           <NavLink className="go-back-link" to="/">-GO BACK TO THE BURGER BEAT!-</NavLink>
           <NavLink className="done-link" to="/NewInsta">-DONE WITH YOUR ORDER!-</NavLink>
        </div>
    )}

export default Done 