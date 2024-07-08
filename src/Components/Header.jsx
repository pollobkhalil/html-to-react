import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Use location hook from react-router-dom

  useEffect(() => {
    // Parse the pathname from the location object to determine the active link
    const pathname = location.pathname;

    // Set active link based on the current pathname
    if (pathname === '/') {
      setActiveLink('home');
    } else if (pathname === '/about') {
      setActiveLink('about');
    } else if (pathname === '/service') {
      setActiveLink('services');
    } else if (pathname === '/package') {
      setActiveLink('packages');
    } else if (pathname === '/destination') {
      setActiveLink('destination');
    } else if (pathname === '/tours') {
      setActiveLink('Tour List');
    } else if (pathname === '/team') {
      setActiveLink('team');
    } else if (pathname === '/testimonial') {
      setActiveLink('testimonial');
    } else if (pathname === '/404') {
      setActiveLink('404');
    } else if (pathname === '/contact') {
      setActiveLink('contact');
    }
  }, [location.pathname]); // Trigger effect when location.pathname changes

  return (
    <header>
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a
                href="/"
                className={`nav-item nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => setActiveLink('home')}
              >
                Home
              </a>
              <a
                href="/about"
                className={`nav-item nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => setActiveLink('about')}
              >
                About
              </a>
              <a
                href="/service"
                className={`nav-item nav-link ${activeLink === 'services' ? 'active' : ''}`}
                onClick={() => setActiveLink('services')}
              >
                Services
              </a>
              <a
                    href="/tours"
                    className={`nav-item nav-link ${activeLink === 'Tout List' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Tour List')}
                  >
                   Tour List
                  </a>
              <a
                href="/package"
                className={`nav-item nav-link ${activeLink === 'packages' ? 'active' : ''}`}
                onClick={() => setActiveLink('packages')}
              >
                Packages
              </a>
              <div className="nav-item dropdown">
                <a
                  href=" "
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a
                    href="/destination"
                    className={`dropdown-item ${activeLink === 'destination' ? 'active' : ''}`}
                    onClick={() => setActiveLink('destination')}
                  >
                    Destination
                  </a>
                  <a
                    href="/tours"
                    className={`dropdown-item ${activeLink === 'Tout List' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Tour List')}
                  >
                   Tour List
                  </a>
                  <a
                    href="/team"
                    className={`dropdown-item ${activeLink === 'team' ? 'active' : ''}`}
                    onClick={() => setActiveLink('team')}
                  >
                    Travel Guides
                  </a>
                  <a
                    href="/testimonial"
                    className={`dropdown-item ${activeLink === 'testimonial' ? 'active' : ''}`}
                    onClick={() => setActiveLink('testimonial')}
                  >
                    Testimonial
                  </a>
                  <a
                    href="/404"
                    className={`dropdown-item ${activeLink === '404' ? 'active' : ''}`}
                    onClick={() => setActiveLink('404')}
                  >
                    404 Page
                  </a>
                </div>
              </div>
              <a
                href="/contact"
                className={`nav-item nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveLink('contact')}
              >
                Contact
              </a>
            </div>
            <a href="/" className="btn btn-primary rounded-pill py-2 px-4">
              Register
            </a>
          </div>
        </nav>

        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                  <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px' }}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </header>
  );
}

export default Header;
