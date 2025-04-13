import React from "react";
import "./style.css";
import ReviewData from "../data/TestimonialData";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const Testimonial = () => {

  return (
 
    <div className="container-fluid testimonials-page">
      <h1>ACCOLADES & APPRECIATIONS</h1>
      <h2>Endorsements From Those Who Guided Me</h2>
      {ReviewData.map((v, index) => {
        return(
          <div
          className= {`testimonial-card ${
            index % 2 === 0 ? "slide-from-left" : "slide-from-right"
          } row`  }
          key={index}
        >
          <div className="testimonial-image-wrapper col-12 col-md-6 col-sm-4 col-xs-4">
            <img
              src={v.image}
              alt={v.name}
              className="testimonial-image"
            />
          </div>
          <div className="testimonial-content">
            <h3>{v.content}</h3>
            <p className="testimonial-author">
              <strong>{v.name}</strong> <br /> <pre>{v.designation}</pre>
            </p>
          </div>
          
        </div>
        
        )
      }
       
      )}
    </div>
    
  );
};

export default Testimonial;
