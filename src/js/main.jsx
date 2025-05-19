import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>



// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Hero from './hero';
import { Navbar } from './components/navbar';
import { About } from './about_me';
import { Skills } from './skills';
import { Contact } from './contact';
import { Portfolio } from './portfolio';
import { Footer } from './footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/> 
    <Footer/>
  </React.StrictMode>,
)
