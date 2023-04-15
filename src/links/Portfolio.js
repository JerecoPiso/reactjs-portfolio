import '../css/App.css'
import '../css/Responsive.css'

function Portfolio(){
    return(
        <div className='portfolio'>
            <p className='content-title'>PROJECTS</p>
            <br/>
            <div className='projects'>
                <div className=''>
                    <div>
                        <img src='./1.png' alt='' className=''/> 
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src='./2.png' alt='' className=''/> 
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                    
                </div>
                <div className=''>
                    <div>
                        <img src='./3.jpg' alt='' className=''/> 
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src='./3.jpg' alt='' className=''/> 
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div className=''>
                    <div>
                        <img src='./3.jpg' alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src='./1.png' alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                    
                </div>
                <div className=''>
                    <div>
                        <img src='./2.png' alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                    
                </div>
                <div className=''>
                    <div>
                        <img src='./3.jpg' alt='' className=''/>
                        <div className='project-name'>PROJECT NAME</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Portfolio;