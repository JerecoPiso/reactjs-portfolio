import '../css/App.css'
import '../css/Responsive.css'
function Portfolio(){
    return(
        <div id='portfolio' className='portfolio'>
            <p className='content-title'>PROJECTS</p>
            <br/>
            <div className='projects'>
                <div className=''>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className=''/> 
                        <div className='project-name'>TECHWORLD</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/2.png')} alt='' className=''/> 
                        <div className='project-name'>CODEUNITY</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className=''/> 
                        <div className='project-name'>CHATME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className=''/> 
                        <div className='project-name'>DOCUMENT TRACKING SYSTEM</div>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div className=''>
                    <div>
                        <img src={require('../assets/2.png')} alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/1.png')} alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={require('../assets/3.jpg')} alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;   