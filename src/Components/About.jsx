import React from "react";
import "./style.css";
import photo1 from '../images/photo1.jpg' // Add your first photo here
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg' // Add your third photo here
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'



const AboutMe = () => {
  return (
    <div className="about-me-container row ">
      <div className="col-12 col-md-6">
        <div className="about-me-text">
          <h1>PHYSICS, POETRY, PIXELS <br/>MY JOURNEY... </h1>
          <p>
          Hi there! I’m <span className="highlight">Magdalene Xavier</span>  a curious mind with a passion for both the 
          mysteries of the universe and the art of crafting exceptional digital experiences. 
          Armed with a <span className="highlight">Master’s degree in Physics</span>, I’ve transitioned from exploring cosmic wonders to creating dynamic, 
          user-friendly web interfaces as a <span className="highlight">Front-End Developer</span>. Now, I’m diving headfirst into the exhilarating 
          world of <span className="highlight">Python Full Stack Development</span>, blending logic with creativity at every step.
          </p>

          <p>
           But my story doesn’t stop at science and code. I’m also a <span className="highlight">writer</span> who finds joy in crafting stories that resonate, 
           inspire, and leave a lasting impression. My published book, featuring <span className="highlight">44 soulful poems in Malayalam</span>, 
           is a testament to my love for weaving emotions into words.
          </p>
          <p>
            Currently, I’m channeling my analytical and creative skills into building stunning, 
            user-friendly web experiences. As a front-end developer, I thrive on turning ideas into 
            vibrant, interactive digital interfaces.
          </p>
          <h2>Awards & Achievements</h2>
          <ul>
            <li>Published a poetry book celebrating creativity and culture with 44 Malayalam poems.</li>
            <li>Honored for academic excellence during my post-graduate studies in Physics.</li>
          </ul>
          <h2>Beyond the Code</h2>
          <p>
          When I’m not immersed in code or equations, you’ll find me exploring the world through a writer’s lens,
           indulging in books, or dreaming up new creative ventures. To me, art and technology are two sides
            of the same coin — both hold the power to connect, inspire, and tell stories worth sharing. 
            {/* I believe in the power of blending art and technology to tell compelling stories. */}
          </p>
        </div>
       </div>

    <div className="about-img col">
      <div className="resizer-div d-none d-md-block"></div>
      <div class="carousel-section">
        <img src={photo1} alt="My Pic1" class="d-block w-100" />
      </div>
    </div>
   
   
</div>
   
  );
};

export default AboutMe;
