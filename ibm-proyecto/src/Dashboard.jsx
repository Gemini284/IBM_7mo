import React, { useState } from 'react'
import dashboard from './Dashboard.css'
import Navigation from './Components/Navigation Template/Navigation'
import  Main from "./Main/Main"
import { ThemeContext } from './ThemeContext'

const Dashboard = () => {
  const [DarkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value ={{DarkTheme,setDarkTheme}}>
      <div className="flex flex-row">
        <div className='basis-1/8'>
          <Navigation />
        </div>
        <div>
          <Main />    
        </div>
      </div>
    </ThemeContext.Provider>
    

  )
}

export default Dashboard
