//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
        <div className='profile'>
          <div className='links'>
              <li><a href='/'>Blog</a></li>
              <li><a href='/'>Skills</a></li>
              <li><a href='/'>Portfolio</a></li>
              <li><a href='/'>Home</a></li>
          </div>
          {/* end class links */}
          <div className='main-display'>
              <div className='intro-message'>
                <p className='hello'>Hello,</p>
                <p className='name'> <span>I'm</span>  Jereco James Piso</p>
                {/* <p className='skill-offered'>Freelance Programmer</p> */}
                <p className='slogan'>"Your vision, my code - let's make it happen."</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
              </div>
              <div className='main-dp'>
                 {/* <img src='./dp.png' alt='' className=''/> */}
              </div>
          </div>
        </div>
        {/* end class profile  */}
        <div className='about-me'>
            <p className='content-title'>ABOUT ME</p>
            <div className='about-me-content'>
              <div className='image-dp'>
                <img src='./john-doe.png' alt='' className=''/>
              </div>
              <div className='about-content'>
                  <p>
                    Hey, I'm Jereco James Piso an intermediate-level web developer with a passion for creating functional and visually appealing websites. I have a few years of experience in web development, which has allowed me to hone my skills and tackle more complex projects.
                    <br/><br/>
                    I'm proficient in HTML, CSS, and JavaScript, and have experience with various front-end frameworks such as React and Vue.js. On the back-end, I've worked with Node.js, PHP, Django, and SQL databases. I enjoy working with both front-end and back-end technologies, and I'm always eager to learn new ones.
                    <br/><br/>
                    When I'm not coding, I enjoy exploring new technologies and reading about the latest trends in web development.
                    If you're looking for a skilled and dedicated web developer to help bring your ideas to life, feel free to get in touch with me. I'd love to discuss your project and how I can help you achieve your goals.
                  </p>
              </div>
            </div>
           
        </div>
        {/* end class about-me */}
        <div className='services'>
            <p className='content-title'>SERVICES</p>
            <div className='services-content'>
              <div className='services-type'>
                  1
              </div>
              <div className='services-type'> 
                  2
              </div>
              <div className='services-type'>
                  3
              </div>
            </div>
        </div>
    </div>
    // end class app
  );
}

export default App;
