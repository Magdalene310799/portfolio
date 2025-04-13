import React, { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const projects = {
  section1: {
    title: "Code Canvas...",
    items: [
      {
        title: "Tourism Website",
        subtitle: "Voyage Tourism Website",
        applications: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
        period: "Oct 2024 - Nov 2024",
        abstract: "A Tourism Website showcasing my skills, projects, and experience using front-end.",
        description: 'The tourism website is a dynamic and visually appealing platform designed using HTML, CSS, JavaScript, and Bootstrap to provide an engaging user experience. It showcases various travel destinations, attractions, and tour packages with interactive elements such as image carousels, animations, and responsive navigation. The website ensures a seamless browsing experience across different devices, offering essential travel information, booking options, and contact details. With an intuitive layout and user-friendly interface, the project aims to inspire and assist travelers in planning their trips efficiently while enhancing their overall travel experience.',
        link: "https://magdalene310799.github.io/tourism-website/",
      },
      {
        title: "Portfolio",
        subtitle: "Personal Portfolio",
        applications: "HTML, CSS, BOOTSTRAP, REACT",
        period: "Nov 2024 - Dec 2024",
        abstract: "The personal portfolio is a responsive React.js-based web app that showcases skills, projects, and achievements with a sleek, interactive design.",
        description: 'This personal portfolio is a modern and interactive web application built using HTML, CSS, JavaScript, Bootstrap, and React.js. It serves as a digital showcase of skills, projects, and professional achievements, featuring a sleek and responsive design for optimal user experience. The portfolio includes sections such as an about me page, project, contact form, and social media links, with smooth animations and dynamic content rendering powered by React.js. Designed for both aesthetics and functionality, the portfolio highlights expertise effectively while ensuring seamless navigation across different devices.',
        link: "https://portfolio-6b826.web.app/",
      },
      {
        title: "Bakery App",
        subtitle: "Crustea Bakery",
        applications: "HTML, CSS, BOOTSTRAP, REACT",
        period: "Nov 2024 - Jan 2025",
        abstract: "Crustea is a feature-rich React-based bakery app offering seamless navigation, dynamic product displays, and an intuitive shopping experience.",
        description: 'Crustea is a modern and interactive bakery app built with React, designed to enhance the online shopping experience for baked goods. It features a responsive navbar with a search function and category dropdown, a visually appealing carousel on the Home Page, and a structured Recipe Listing Page covering cakes, pastries, buns, croissants, and more. Users can explore detailed Recipe Pages, save favorites with an enhanced Favourites Page, and add items to their cart with a hover-enabled cart icon, leading to a dedicated Cart Page. Additionally, a Contact Page provides shop details, while the PersonalGifts.jsx section highlights personalized bakery gifts. The app seamlessly combines functionality, aesthetics, and a smooth user experience. ',
        link: "https://magdalene310799.github.io/Crustea-App/",
      },
      {
        title: "Hospital Website",
        subtitle: "Crestview Hospitals & Reasearch Institute",
        applications: "HTML, CSS, BOOTSTRAP, REACT, PYTHON, DJANGO",
        period: "feb 2025 - March 2025",
        abstract: "Crestview Hospitals and Research Institute is a sleek Django-powered website for effortless appointments, expert specialities, and a seamless patient experience.",
        description: 'Crestview Hospitals and Research Institute is a fully responsive Django-powered website designed to enhance patient engagement and hospital management. It features a side navbar for easy navigation across sections like Specialities, Health Packages, International Patients, Facilities, and Careers, along with a Book an Appointment system that includes status tracking and email confirmations. The site showcases detailed speciality pages, a vibrant Careers section with job listings, and a Medical Research page with interactive elements. Additional highlights include a a Paediatric Critical Care page with custom visuals, and a Health Packages section with booking and detailed package views for patient convenience.',
        link: "https://github.com/Magdalene310799/django_project.git",
      },
    ],
  },
  section2: {
    title: "Where Physics Meets...",
    items: [
      {
        title: "Band Gap and Conductivity Variations of ZnO Thin Films by Doping with Sr",
        subtitle: "M Sc Project",
        applications: "SILAR, XRD, UV Spectrum",
        period: "Apr 2024 - Aug 2024",
        abstract: "Strontium-doped ZnO thin films were synthesized via SILAR, revealing enhanced conductivity and structural modifications with increasing doping concentrations.",
        description: 'Zinc oxide (ZnO), an inorganic compound with a wide band gap (3.37 eV) and high exciton binding energy (60 MeV), is widely used in gas sensors, transparent conductors, solar cells, and emerging optoelectronic devices like LEDs and LDs. In this study, ZnO thin films were synthesized using the Successive Ionic Layer Adsorption and Reaction (SILAR) method, with Strontium doping at 3 at.%, 5 at.%, and 7 at.%. Electrical conductivity was measured across temperatures, while UV-Vis spectroscopy revealed that increasing Strontium doping decreased the band gap, enhancing conductivity. X-ray diffraction (XRD) analysis further examined doping-induced structural modifications in ZnO films.',
      },
      {
        title: "Contrasting Seasonal Characteristics of Tropical Cirrus Clouds",
        subtitle: "B Sc Project",
        applications: "CALIOP, CALIPSO, MODIS",
        period: "Jan 2022 - May 2022",
        abstract: "This study examines the diurnal variation of tropical cirrus clouds over the Indian subcontinent, revealing higher prevalence and altitude at night, influenced by seasonal cycles.",
        description: "Cirrus clouds, covering over 30% of the globe, play a crucial role in Earths radiative forcing through albedo and greenhouse effects, with their heating impact varying diurnally and seasonally. This study analyzes the diurnal variation of tropical cirrus clouds over the Indian subcontinent using CALIPSO satellite data from January and April 2009, two months with contrasting convective activities. Findings reveal that cirrus clouds are more prevalent and have slightly higher altitudes at night than during the day, with seasonal cycles strongly influencing their behavior. The study enhances the understanding of cirrus cloud dynamics and their impact on Earth's radiation balance",
      },
    ],
  },
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="complete">
      <h1 className="project-head">PROJECT PALETTES</h1>

      <div className="project-container">
  {/* Section 1: Frontend Projects */}
  <h2 className="section-title">{projects.section1.title}</h2>

  <div className="project-section">
    {/* First Row */}
    <div className="row">
      {projects.section1.items.slice(0, 2).map((project, index) => (
        <div key={index} className="project-card col-md-5">
          <h2>{project.title}</h2>
          <h4>{project.subtitle}</h4>
          <p><strong>{project.applications}</strong></p>
          <p><strong>Period:</strong> {project.period}</p>
          <p><strong>Abstract:</strong> {project.abstract}</p>
          <button onClick={() => openModal(project)}>Learn More</button>
        </div>
      ))}
    </div>

    {/* Second Row */}
    <div className="row">
      {projects.section1.items.slice(2, 4).map((project, index) => (
        <div key={index} className="project-card col-md-5">
          <h2>{project.title}</h2>
          <h4>{project.subtitle}</h4>
          <p><strong>{project.applications}</strong></p>
          <p><strong>Period:</strong> {project.period}</p>
          <p><strong>Abstract:</strong> {project.abstract}</p>
          <button onClick={() => openModal(project)}>Learn More</button>
        </div>
      ))}
    </div>
  </div>


      {/* Section 2: Full-Stack Projects */}
      <h2 className="section-title">{projects.section2.title}</h2>
      <div className="project-section row">
        {projects.section2.items.map((project, index) => (
          <div key={index} className="project-card col">
            <h2>{project.title}</h2>
            <h4>{project.subtitle}</h4>
            <p>
              <strong>Applications Used:</strong> {project.applications}
            </p>
            <p>
              <strong>Period:</strong> {project.period}
            </p>
            <p>
              <strong>Abstract:</strong> {project.abstract}
            </p>
            <button onClick={() => openModal(project)}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Modal for Selected Project */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <h3>{selectedProject.subtitle}</h3>
            <p>
              <strong>Applications Used:</strong> {selectedProject.applications}
            </p>
            <p>
              <strong>Period:</strong> {selectedProject.period}
            </p>
            <p>
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <br />
            <button onClick={() => window.open(selectedProject.link, "_blank")}>
              View Project
            </button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>  
  );
};

export default Project;







  