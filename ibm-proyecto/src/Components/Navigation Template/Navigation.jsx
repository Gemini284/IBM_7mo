import React, { useContext, useState } from 'react'
import './Navigation.css'
import Nav from '../NavIconTemplate/Nav'
import {AiOutlineHome} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import {FiChevronLeft} from 'react-icons/fi'
import { ThemeContext } from '../../ThemeContext'
import {WiSolarEclipse} from 'react-icons/wi'
 
const Navigation = () => {
  const [nav, setnav] = useState(false);
  const {DarkTheme, setDarkTheme} = useContext(ThemeContext);

  function changeTheme(){
    setDarkTheme(!DarkTheme);
  }

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
          <div className={`menu ${nav && "active"}`} 
          onClick={()=> {
            setnav((prevState) => !prevState)
          }}>
            <FiChevronLeft className="menu-icon" />

          </div>
        <header>
            <div className='profile'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' 
                alt='user-img'
                className='profile-img' />
            </div>
            <span>creative_ambition</span>
        </header>
        <Nav title="Dashboard" Icon={AiOutlineHome}/>
        <Nav title="Busqueda" Icon={CiSearch}/>
        <Nav title={`${DarkTheme ? "Switch to light mode" : " Switch to dark mode"}`} Icon={WiSolarEclipse} onClick={changeTheme}/>
        <div className="divider"></div>
        
              
          </div>
  )
}

export default Navigation

