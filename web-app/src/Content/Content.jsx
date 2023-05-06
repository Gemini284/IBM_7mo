import { useContext } from 'react'
import './Content.css'
import { ThemeContext } from '../ThemeContext'
import { FiSettings } from 'react-icons/fi'
import { RiChat1Line } from 'react-icons/ri'
import Analytics from '../Components/AnalyticsTemplate/Analytics'


const Content = () => {
    const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`content ${DarkTheme && "dark"}`}>
      <div className="row header">
        <FiSettings className="cog" />
        <h1 className="txt-head">Current Notifications</h1>
        <div className='divider'></div>
        <div className="notifications">
          <RiChat1Line /><RiChat1Line /><RiChat1Line /><RiChat1Line /><RiChat1Line />
        </div>

      </div>

      <div className="row header"></div>

      <span className="section-title">Brief overvew</span>
      <div className="row square">
        <Analytics chart_i/>
      </div>
      <div className="row square">
      <Analytics chart_i/>
      </div>
      <div className="row square">
        
      </div>
      <div className="row square"></div>

    </div>
  )
}

export default Content
