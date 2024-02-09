import React, { useState } from 'react'
import './index.css';
// our components
import Header from './Components/Header.js'
import BurgerType from './Components/BurgerType.js'


function App() {
  const [theme, setTheme] = useState('')
  const appClass = theme === 'dark' ? "App dark" : "App light";
  
    const handleDarkModeToggle = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  

    return (
      <div className={appClass}>
        <header>
          <Header/>
          <button onClick={handleDarkModeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
        <BurgerType/>
        
      </div>
    );
  }



export default App;
