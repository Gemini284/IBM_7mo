import { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../../ThemeContext'

import {BiSearch} from "react-icons/bi"
import { AiOutlineUser } from 'react-icons/ai'
import { TbDeviceAnalytics } from "react-icons/tb";
import { TbMessages } from 'react-icons/tb'
import { HiOutlineMoon } from 'react-icons/hi'
import { RiSettings2Line } from 'react-icons/ri'
import { HiOutlineLogout } from 'react-icons/hi'



const Header = () => {
  
    const {DarkTheme, setDarkTheme} = useContext(ThemeContext)
    function changeTheme(){
        setDarkTheme(!DarkTheme);
    }

    return (
        <header className={`${DarkTheme && "dark" }`}> 
            <div className='search-bar'>
                <input type='text' placeholder='Busqueda' />
                <BiSearch className='icon' />
            </div>
            <div className="tools">
                <AiOutlineUser className='icon' />
                <TbMessages className='icon' />
                <TbDeviceAnalytics className='icon' />

                <div className='divider'></div>

                <HiOutlineMoon className='icon' onClick={changeTheme} />
                <RiSettings2Line className='icon' />
                <HiOutlineLogout className='icon' />

                <div className="divider">

                <div className="user">
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='user profile picture' className='profile-img' />
                </div>
                </div>
            </div>
    </header>
  )
}

export default Header
