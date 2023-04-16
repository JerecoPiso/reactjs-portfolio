import '../css/App.css'
import '../css/Responsive.css'

function Contact() {
    return (
        <div className='contact'>
            <p className='contact-section-title'>CONTACT</p>
            
            <form>
                <label>Your Name</label>
                <input type='text' placeholder='Enter your name' required />
                <label>Your Email</label>
                <input type='email' placeholder='Enter your email' required />
                <label>Message</label>
                <textarea cols={100} placeholder='Enter your message here' required />
                <button className='send'>Send</button>
            </form>
        </div>
    )
}
export default Contact;