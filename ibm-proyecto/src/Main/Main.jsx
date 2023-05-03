import { useContext } from 'react';
import './Main.css'
import { ThemeContext } from '../ThemeContext';
import Header from '../Components/Header/Header';
import Content from '../Content/Content';

const Main = () => {
  // className='main'
  const {DarkTheme} = useContext(ThemeContext);

  return( 
  <div className={`main ${DarkTheme && "dark"}`}>
    <Header />
    <Content />
  </div>
  )
};
export default Main;
