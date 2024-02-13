import React from 'react';

const DineType = ({ dineType }) => {

    return (
        <ul className="dine-card">
          {dineType.map((dine) => (
            <li className='card' key={dine.id}> 
              <h3>{dine.name}</h3>
              <img src={dine.image} alt={dine.name} id={dine.id}/>
              <p>{dine.type}</p>
            </li>
          ))}
        </ul>
      );
    };

export default DineType;