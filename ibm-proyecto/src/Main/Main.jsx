import { useContext } from 'react';
import './Main.css'
import { ThemeContext } from '../ThemeContext';

const Main = () => {
  // className='main'
  const {DarkTheme} = useContext(ThemeContext);

  return <div className={`main ${DarkTheme && "dark"}`}>Main</div>
  
};
export default Main;
