import React, { useState, useEffect } from 'react'
// our components
import Header from './Components/Header.js'
import BurgerType from './Components/BurgerType.js'
import FixinsType from './Components/FixinsType.js'

function App() {
  const [theme, setTheme] = useState('light')
  const [burgers, setBurgers] = useState([]);
  const appClass = theme === 'dark' ? "App dark" : "App light";
  const [fixins, setFixins] = useState([])
   
  
  const handleDarkModeToggle = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
       useEffect(() => {
      fetch("http://localhost:3001/") 
          .then(r => r.json())
          .then(dbBurgers => setBurgers(dbBurgers))
        }, []);

        useEffect(() => {
          fetch("http://localhost:3001/") 
              .then(r => r.json())
              .then(dbFixins => setFixins(dbFixins))
            }, []);
    
       
    return (
      <div className={appClass}>
        <header>
          <Header/>
          <button onClick={handleDarkModeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
        <BurgerType key={burgers.name} burgers={burgers} />
        <FixinsType key={fixins.name} fixins={fixins} />
      </div>
    );
  }

export default App;




 // const addBurgers = (newBurgers) => {
        //   fetch("http://localhost:3001", {
        //   method: "POST",
        //   headers: {"Content-Type": "Application/JSON"},
        //   body: JSON.stringify(newBurgers),
        //   })
        //   .then((resp) => resp.json())
        //   .then((data) => {
        //     setBurgers([...burgers, data]);
        //   })
        // };
