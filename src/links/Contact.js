import '../css/App.css'
import '../css/Responsive.css'

function Contact() {
    return (
        <div id='contact' className='contact'>
            <p className='content-title' id='contact-section-title'>CONTACT</p>
            
            <form>
                <label>Your Name</label>
                <input type='text' className='bg-transparent' placeholder='Enter your name' required />
                <label>Your Email</label>
                <input type='email' className='bg-transparent' placeholder='Enter your email' required />
                <label>Message</label>
                <textarea cols={100} placeholder='Enter your message here' required />
                <button className='send'>Send</button>
            </form>
        </div>
    )
}
export default Contact;