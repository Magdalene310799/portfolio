import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mypic from '../images/mypic.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 

const Home = () => {
  return (
  <div>
    <div class="row">
        <div class="section1 col">
            <img src={mypic} alt="my profile" style={{width:'300px', height:'437px'}} class="rounded-circle"/>
        </div>
      
        <div class="section2 col">
            <h1 class="name">Hello, I'm MAGDALENE XAVIER</h1>
            <h2 class="designation">FRONT-END DEVELOPER</h2>
            <h2 class="description">Where Passion Meets Pixel Perfection</h2>
            <br/>
            <p class="para1">Welcome To My Portfolio</p>
            <p class="para2">I'm a passionate developer with a knack for creating innovative, elegant and impactful websites. 
              Explore my work and get to know more about my journey and skills.</p> 
    <br/><br/><br/><br/>
    <div className="social"> 
            <a href="https://github.com/Magdalene310799/Portfolio" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
            </a>
        </div>   
        </div>
    </div>
  </div>
  );
};

export default Home;
