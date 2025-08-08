import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import FrontendSkill from './components/FrontendSkill.jsx';
import BackendSkill from './components/BackendSkill.jsx';
import Projects from './components/Projects.jsx';
import Service from './components/Service.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx'; // Uncomment if you have this
import ServiceDetail from './components/ServiceDetail.jsx'; // Import the service detail component
import './App.css';
import DSASection from './components/DSASection.jsx';

function App() {
  return (
    
     <Router>
      <div>
        {/* <Header /> */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <About />
                  <FrontendSkill />
                  <BackendSkill />
                  <Projects />
                  <Service />
                  <Contact />
                  <Footer />
                </>
              }
            />
            {/* Fallback route for undefined paths */}
            <Route path="*" element={<NotFound />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/dsalearning" element={<DSASection />} />
            

          </Routes>
        </main>
        {/* <Footer /> */}
      
      </div>
    </Router>
        
    
  );
}

export default App;
