import { useContext } from 'react'
import './Content.css'
import { ThemeContext } from '../ThemeContext'
import { FiSettings } from 'react-icons/fi'
import { RiChat1Line } from 'react-icons/ri'


const Content = () => {
    const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`content ${DarkTheme && "dark"}`}>
      <div className="row header">
        <FiSettings className="cog" />
        <h1 className="txt">Current Notifications</h1>

        <div className='divider'></div>

        <div className="notifications">
            <RiChat1Line />
            <RiChat1Line />
            <RiChat1Line />
            <RiChat1Line />
            
        </div>

      </div>

      <div className="row header"></div>
    </div>
  )
}

export default Content
