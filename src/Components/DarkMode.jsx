import React, { useEffect } from 'react'
import SunIcon from "../assets/Sun.svg";
import MoonIcon from "../assets/Moon.svg";
import { useState } from 'react';
import './dark.css'


function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
 
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          setDarkMode(true);
          document.body.setAttribute('data-theme', 'dark');
        } else {
          document.body.setAttribute('data-theme', 'light');
        }
      }, []);
    


      const toggleTheme = (e) => {
        if (e.target.checked) {
          document.body.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          setDarkMode(true);
        } else {
          document.body.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          setDarkMode(false);
        }
      };
    


  return (
    <>
        <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={darkMode}
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img className='sun' src={SunIcon} alt="Sun Icon" />
        <img className='moon' src={MoonIcon} alt="Moon Icon" />
        </label>
      </div>
    </>
  )
}

export default DarkMode