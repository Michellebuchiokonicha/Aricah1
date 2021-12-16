import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
// import About from './components/About';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
// import './App.css';
// import ImageSlider from './components/ImageSlider';

function App() {
    return (
         <>
    
          <Router>
           <Navbar />
            <Routes>
               <Route path='/' exact />
              </Routes>
          </Router>
         {/* <Router>
             <About />
              <Routes>
                  <Route path='/about' />
              </Routes>
          </Router> */}
          <Router>
           <Features />
              <Routes>
                  <Route path='/' exact />
              </Routes>
          </Router>
          <Router>
           <Footer />
              <Routes>
                  <Route path='/' exact />
              </Routes>
          </Router>
          
     </>

        // <Router>
        //     <Routes>
        //     <Route path='/' exact ><Navbar /></Route>
        //     </Routes>
        // </Router>
    );
}

export default App