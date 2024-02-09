import React, { useState, useEffect } from 'react'
// our components
import Header from './Components/Header.js'
import BurgerType from './Components/BurgerType.js'


function App() {
  const [theme, setTheme] = useState('light')
  const [burgers, setBurgers] = useState([]);
  const appClass = theme === 'dark' ? "App dark" : "App light";
  
    const handleDarkModeToggle = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    function setBurger () {

    }

    useEffect(() => {
      fetch("http://localhost:3001/") 
          .then(r => r.json())
          .then(dbBurgers => setBurgers(dbBurgers))
        }, []);

    return (
      <div className={appClass}>
        <header>
          <Header/>
          <button onClick={handleDarkModeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
        <BurgerType key={burgers.id} burgers={burgers} />
      </div>
    );
  }

export default App;
