import React, { useState, useEffect } from 'react'
import Header from './Components/Header.js'
import BurgerType from './Components/BurgerType.js'
import FixinsType from './Components/FixinsType.js'
import CookTemp from './Components/CookTemp.js'
import DineType from './Components/DineType.js'
import Done from './Components/Done.js'

function App() {
  const [theme, setTheme] = useState('light')
  const [burgers, setBurgers] = useState([]);
  const appClass = theme === 'dark' ? "App dark" : "App light";
  const [fixins, setFixins] = useState([])
  const [cookTemp, setCookTemp] = useState([])
  const [dineType, setDineType] = useState([])
   
  
  const handleDarkModeToggle = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
        useEffect(() => {
          fetch("http://localhost:3001/burgers") 
          .then(r => r.json())
          .then(dbBurgers => setBurgers(dbBurgers))
        }, []);

        useEffect(() => {
          fetch("http://localhost:3001/fixins") 
              .then(r => r.json())
              .then(dbFixins => setFixins(dbFixins))
            }, []);
        
        useEffect(() => {
          fetch("http://localhost:3001/cookTemp")
          .then(r => r.json())
          .then(dbCookTemp => setCookTemp(dbCookTemp))
        }, []);

        useEffect(() => {
          fetch("http://localhost:3001/dineType")
          .then(r => r.json())
          .then(dbDineType => setDineType(dbDineType))
        }, []);
       
    return (
      <div className={appClass}>
        <header>
         <Header/>
        <button onClick={handleDarkModeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>   
        <BurgerType burgers={burgers} />
        <FixinsType fixins={fixins} />
        <CookTemp cookTemp={cookTemp} />
        <DineType dineType={dineType} />
        <Done />    
      </div>
    );
  }

export default App;
