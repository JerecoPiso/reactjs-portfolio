import '../css/App.css';
import '../css/Responsive.css';
function AboutMe() {
  return (
    <div className='about-me'>
            <p className='content-title'>ABOUT ME</p>
            <div className='about-me-content'>
              <div className='image-dp'>
                <img src='./john-doe.png' alt='' className=''/>
              </div>
              <div className='about-content'>
                  
                  <p>
                    Hey, I'm Jereco James Piso an intermediate-level programmer with a passion for creating functional and visually appealing applications. I have a few years of experience in programming, which has allowed me to hone my skills and tackle more complex projects.
                    <br/><br/>
                    In web i'm proficient in HTML, CSS, and JavaScript, and have experience with various front-end frameworks such as React and Vue.js. On the back-end, I've worked with Node.js, PHP, Django, and SQL databases. I'll using C# and Java for desktop application development, while opting for React Native to develop Android applications. and I'm always eager to learn new ones.
                    <br/><br/>
                    When I'm not coding, I enjoy exploring new technologies and reading about the latest trends in web development.
                    If you're looking for a skilled and dedicated web developer to help bring your ideas to life, feel free to get in touch with me. I'd love to discuss your project and how I can help you achieve your goals.
                  </p>
              </div>
            </div>
    </div>
    // end class app
  );
}

export default AboutMe;
