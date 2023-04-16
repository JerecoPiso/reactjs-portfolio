import '../css/App.css';
import '../css/Responsive.css';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            {/* <p className='name-footer'>SOCIAL</p> */}
            <p className='socials-footer' style={{textAlign: "center"}}>
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faGithub} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faFacebook} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faTwitter} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faYoutube} size="2x" color='#F1F6F9' />
            </p>
            <p className='copyright'>© Copyright {year}. Made by Jereco James Piso</p>
        </div>
    )
}
export default Footer;