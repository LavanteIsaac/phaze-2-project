import React from 'react'

const CookTemp = ( { cookTemp } ) => {
    const { id, name, image, type } = cookTemp



    return (
        <li className= 'card'>
            <h4>{name}</h4>
            <img src={image} alt={name} id={id}/>
            <p>{type}</p>
            </li>
    )

}

export default CookTemp