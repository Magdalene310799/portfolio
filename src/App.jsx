import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/education' element={<Education/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/testimonials' element={<Testimonials/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
