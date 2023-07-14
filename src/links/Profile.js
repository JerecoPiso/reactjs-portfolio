// import { useRef } from 'react';
import '../css/App.css';
import '../css/Responsive.css';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
function Profile() {
    return (
        <div className='profile'>
            <div className='header'>
                <div>
                    <p id='logo'>jerecode<FontAwesomeIcon icon={solidIcons.faLaptopCode} size="1x" color='#F1F6F9' /></p>
                </div>
                <div className='links'>
                    <li> <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >About</Link></li>
                    <li> <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >Contact</Link></li>
                    <li> <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >Blog</Link></li>
                    <li> <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link></li>
                    <li> <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} >Projects</Link></li>
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
                    <p className='socials'>
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faGithub} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faFacebook} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faTwitter} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faYoutube} size="2x" color='#F1F6F9' />
                    </p>
                </div>
                <div className='main-dp'>
                    {/* <img src={require("../assets/1.png")} alt='' className=''/> */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
