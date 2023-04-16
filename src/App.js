// import { useRef } from 'react';
import './css/App.css';
import './css/Responsive.css';
import AboutMe from './links/AboutMe';
import Skills from './links/Skills';
import Portfolio from './links/Portfolio';
import Contact from './links/Contact';
import Profile from './links/Profile';
import Footer from './links/Footer';
function App() {

  return (
    <div className='app'>
        <Profile/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
    // end class app
  );
}

export default App;
