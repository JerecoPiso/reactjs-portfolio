import '../css/App.css';
import '../css/Responsive.css';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
function Skills() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.services-content');
            sections.forEach((section) => {
                const sectionPosition = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionPosition < windowHeight * 0.95) {
                    setTimeout(() => {
                        section.classList.remove('skill-hide');
                        section.classList.add('skill-show');
                    }, 200);
                } else {
                    section.classList.add('skill-hide');
                    section.classList.remove('skill-show');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id='skills' className='services'>
            <p className='content-title'>SKILLS</p>
            <div className='services-content'>
                <div className='services-type'>
                    <div style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={solidIcons.faLaptop} size="4x" color='#394867' />
                        <p>Web Application</p>
                        <p className='service-desc'>Empowering businesses and individuals to thrive in the digital age through innovative web solutions. Crafting custom websites that elevate your brand and engage your audience. Experience the power of a strong online presence with my expert web development services.</p>
                    </div>
                </div>
                <div className='services-type'>
                    <div style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={brandIcons.faAndroid} size="4x" color='#394867' />
                        <p>Android Application</p>
                        <p className='service-desc'>
                            Unlocking the potential of Android technology to build powerful mobile solutions for modern-day challenges. Designing intuitive interfaces and robust functionalities that enhance user engagement and satisfaction. With my Android development expertise, your mobile app dreams can become a reality.
                        </p>
                    </div>
                </div>
                <div className='services-type'>
                    <div style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon icon={solidIcons.faDesktop} size="4x" color='#394867' />
                        <p>Desktop Application</p>
                        <p className='service-desc'>
                            Revolutionize the way you work with our powerful, user-friendly desktop applications designed to boost productivity. Using the latest technologies to create customized solutions that meet your unique needs. From ideation to launch, we provide end-to-end desktop development services to bring your vision to life.
                        </p>
                    </div>
                </div>
            </div>
            <div className='skills'>
                {/* <p className='skills-title'>SKILLS</p> */}
                <div className='my-skills'>
                    <div><FontAwesomeIcon icon={brandIcons.faVuejs} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faLaravel} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faNode} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faReact} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faPhp} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faJava} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faBootstrap} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faCss3} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faJs} size="4x" color='#F1F6F9' /></div>
                    <div><FontAwesomeIcon icon={brandIcons.faPython} size="4x" color='#F1F6F9' /></div>
                </div>
              
            </div>
        </div>
        // end class app
    );
}

export default Skills;
