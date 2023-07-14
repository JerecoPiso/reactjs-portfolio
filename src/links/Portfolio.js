import '../css/App.css'
import '../css/Responsive.css'
import { useEffect } from 'react';
function Portfolio() {
    useEffect(() => {
        const handleScroll = () => {
            const right = document.querySelectorAll('.projects-right');
            right.forEach((section) => {
                const sectionPosition = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionPosition < windowHeight * 0.95) {
                    setTimeout(() => {
                        section.classList.remove('project-hide-right');
                        section.classList.add('project-show-right');
                      
                    }, 500);
                } else {
                    section.classList.add('project-hide-right');
                    section.classList.remove('project-show-right');
                }
            });
            const left = document.querySelectorAll('.projects-left');
            left.forEach((section) => {
                const sectionPosition = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionPosition < windowHeight * 0.95) {
                    setTimeout(() => {
                        section.classList.remove('project-hide-left');
                        section.classList.add('project-show-left');
                      
                    }, 500);
                } else {
                    section.classList.add('project-hide-left');
                    section.classList.remove('project-show-left ');
                }
            });

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div id='portfolio' className='portfolio'>
            <p className='content-title'>PROJECTS</p>
            <br />
            <div className='projects projects-right'>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className='' />
                        <div className='project-name'>TECHWORLD</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/codeunity.png')} alt='' className='' />
                        <div className='project-name'>CODEUNITY</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className='' />
                        <div className='project-name'>CHATME</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className='' />
                        <div className='project-name'>DOCUMENT TRACKING SYSTEM</div>
                    </div>
                </div>
            </div>
            <div className='projects projects-left'>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/2.png')} alt='' className='' />
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className='' />
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className='' />
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className='' />
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;   