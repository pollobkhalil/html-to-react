import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import WOW from 'wowjs';

class Team extends React.Component {
  componentDidMount() {
    // Initialize WOW.js for animations
    new WOW.WOW({ live: false }).init();
  }

  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-1.jpg" alt="Team Member" />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-2.jpg" alt="Team Member" />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-3.jpg" alt="Team Member" />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-4.jpg" alt="Team Member" />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="btn btn-square mx-1" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
