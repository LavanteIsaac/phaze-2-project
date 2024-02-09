import React, { useState } from 'react'
import './index.css';
// our components
import Header from './Components/Header.js'


function App() {
  const [theme, setTheme] = useState('light')
  const appClass = theme === 'dark' ? "App dark" : "App light";
  
    const handleDarkModeToggle = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  

    return (
      <div className={appClass}>
        <header>
          <h2>Build-a-Burger</h2>
          <button onClick={handleDarkModeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
      </div>
    );
  }



export default App;
