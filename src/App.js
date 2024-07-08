import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Packages from './Components/Pages/Packages';
import Services from './Components/Pages/Services';
import TourList from './Components/Pages/TourList';
import TourDetails from './Components/Pages/TourDetails'; // Import your TourDetails component

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/package' element={<Packages />} />
          <Route path='/tours' element={<TourList />} />
          <Route path='/tours/:tourId' element={<TourDetails />} /> {/* Dynamic route for TourDetails */}
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
