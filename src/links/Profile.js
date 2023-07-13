// import { useRef } from 'react';
import '../css/App.css';
import '../css/Responsive.css';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Profile() {

    return (
        <div className='profile'>
            <div className='header'>
                <div>
                    <p id='logo'>jerecode<FontAwesomeIcon icon={solidIcons.faLaptopCode} size="1x" color='#F1F6F9' /></p>
                </div>
                <div className='links'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#portfolio' >Portfolio</a></li>
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
                        <FontAwesomeIcon style={{marginRight: 15}} icon={brandIcons.faGithub} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{marginRight: 15}} icon={brandIcons.faFacebook} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{marginRight: 15}} icon={brandIcons.faTwitter} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{marginRight: 15}} icon={brandIcons.faYoutube} size="2x" color='#F1F6F9' />
                    </p>
                </div>
                <div className='main-dp'>
                    {/* <img src='./dp.png' alt='' className=''/> */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
