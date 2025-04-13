import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import './style.css';
const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to={'/'}><a class="nav-link" aria-current="page" href="#" >Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/about'}><a class="nav-link" href="#">About</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/education'}><a class="nav-link" href="#">Education</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/projects'}><a class="nav-link" href="#">Projects</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/skills'}><a class="nav-link" href="#">Skills</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/testimonials'}><a class="nav-link" href="#">Testimonials</a></Link>
        </li>
        <li class="nav-item">
        <Link to={'/contact'}><a class="nav-link" href="#">Contact</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar