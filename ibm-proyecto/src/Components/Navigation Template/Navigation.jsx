import React from 'react'
import './Navigation.css'
 
const Navigation = () => {
  return (
    <div className='navigation'>
        <header>
            <div className='profile'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' 
                alt='user-img'
                className='profile-img' />
            </div>
            <span>creative_ambition</span>
        </header>
        
    </div>
  )
}

export default Navigation

