// import { useRef } from 'react';
import '../css/App.css';
import '../css/Responsive.css';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
function Profile() {

    useEffect(() => {
        if (window.innerWidth < 768) {
            const hiddenDiv = document.querySelector('.links');
            let computedStyle = window.getComputedStyle(hiddenDiv);
            const isHidden = computedStyle.getPropertyValue('opacity') === '0';
            if (!isHidden) {
                hiddenDiv.classList.add("fade-toggle")
            }
        }
        const handleResize = () => {
            const hiddenDiv = document.querySelector('.links');
            let computedStyle = window.getComputedStyle(hiddenDiv);
            const isHidden = computedStyle.getPropertyValue('opacity') === '0';
            if (window.innerWidth > 768) {
                if (isHidden) {
                    hiddenDiv.classList.toggle("fade-toggle")
                }
            } else {
                if (!isHidden) {
                    hiddenDiv.classList.toggle("fade-toggle")
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const ToggleNav = () => {
        const hiddenDiv = document.querySelector('.links');
        const computedStyle = window.getComputedStyle(hiddenDiv);
        const isHidden = computedStyle.getPropertyValue('display') === 'none';
        if (isHidden) {
            hiddenDiv.classList.toggle("fade-toggle")
        } else {
            hiddenDiv.classList.toggle("fade-toggle")
        }
    }
    return (
        <div className='profile'>
            <button id='bars' className='bars' onClick={() => ToggleNav()}> <FontAwesomeIcon icon={solidIcons.faBars} size="2x" color='#F1F6F9' /></button>
            <div className='header'>
                <div>
                    <p id='logo'>jerecode<FontAwesomeIcon icon={solidIcons.faLaptopCode} size="1x" color='#F1F6F9' /></p>
                </div>
                <div id="links" className='links'>
                    <li> <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >About</Link></li>
                    <li> <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >Contact</Link></li>
                    {/* <li> <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >Blog</Link></li> */}
                    <li> <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link></li>
                    <li> <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} >Projects</Link></li>
                </div>
            </div>
           
            {/* end class links */}
            <div className='main-display'>
                <div className='intro-message'>
                    <p className='hello'>Hello,</p>
                    <p className='name'> <span>I'm</span>  Jereco James Piso</p>
                    <p className='slogan'>"Your vision, my code - let's make it happen."</p>
                    <button id='get-in-touch'>GET IN TOUCH</button>
                    <p className='socials'>
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faGithub} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faFacebook} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faTwitter} size="2x" color='#F1F6F9' />
                        <FontAwesomeIcon style={{ marginRight: 15 }} icon={brandIcons.faYoutube} size="2x" color='#F1F6F9' />
                    </p>
                </div>
                <div className='main-dp'>
                    <img src={require("../assets/picture-logo-removebg.png")} alt='' className=''/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
