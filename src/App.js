import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, RoutesProps, Routes, } from 'react-router-dom'
import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
    return (
        <>
    
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/' exact />
              </Routes>
          </Router>
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
    );
}

export default App