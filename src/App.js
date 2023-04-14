import './css/App.css';
import './css/Responsive.css';
import AboutMe from './links/AboutMe';
import Services from './links/Services';
import Portfolio from './links/Portfolio';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div className='app'>
      
        <div className='profile'>
          <div className='header'>
            <div>
              <p id='logo'>jerecode<FontAwesomeIcon icon={solidIcons.faLaptopCode} size="1x" color='#F1F6F9' /></p>
            </div>
            <div className='links'>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Skills</a></li>
                <li><a href='/'>Portfolio</a></li>
               
                <button className='bars'> <FontAwesomeIcon icon={solidIcons.faBars} size="2x" color='#F1F6F9' /></button>
            </div>
          </div>
         
          {/* end class links */}
          <div className='main-display'>
              <div className='intro-message'>
              
                <p className='hello'>Hello,</p>
                <p className='name'> <span>I'm</span>  Jereco James Piso</p>
                {/* <p className='skill-offered'>Freelance Programmer</p> */}
                <p className='slogan'>"Your vision, my code - let's make it happen."</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
              </div>
              <div className='main-dp'>
                 {/* <img src='./dp.png' alt='' className=''/> */}
              </div>
          </div>
        </div>
        {/* end class profile  */}
        <AboutMe/>
        <Services/>
        <Portfolio/>
    </div>
    // end class app
  );
}

export default App;
