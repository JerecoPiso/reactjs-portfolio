import '../css/App.css'
import '../css/Responsive.css'

function Contact(){
    return(
        <div className='contact'>
            <p className='content-title mt-0'>CONTACT</p>
            <div className='contact-section'>
                <div>
                    <form>
                        <label>Your Name</label>
                        <input type='text' placeholder='Enter your name'/>
                        <label>Your Email</label>
                        <input type='text' placeholder='Enter your email'/>
                        <label>Message</label>
                        <textarea cols={100} placeholder='Enter your message here' />
                        <button className='send'>Send</button>
                    </form>
                </div>
                <div>
1
                </div>
            </div>
        </div>
    )
}
export default Contact;