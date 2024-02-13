import React from "react"
import {NavLink} from "react-router-dom"
function Done(){

    return(
        <div>
           <NavLink to="/">-GO BACK!-</NavLink>
           <NavLink to="/Selfie">-DONE!-</NavLink>
        </div>
    )
}

export default Done 