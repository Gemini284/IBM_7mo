import React from 'react'
import dashboard from './Dashboard.css'
import Navigation from './Components/Navigation Template/Navigation'
import  Main from "./Main/Main"

const Dashboard = () => {
  return (
    <div className="flex flex-row">
        <div className='basis-1/8'>
          <Navigation />
        </div>
        <div className='basis-auto'>
          <Main />    
        </div>
    </div>
  )
}

export default Dashboard
