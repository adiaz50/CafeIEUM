import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h3>Our Email</h3>
          <p>Example@Example.com</p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <h3>Hours</h3>
          <p>9am - 4pm Mondays-Fridays</p>
          <p>9am - 4pm Mondays-Fridays</p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <h3>Location</h3>
          <p>301 Naedang-dong, Seo-gu, Daegu, South Korea</p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <h3>Our Number</h3>
          <p>(999)999-9999</p>
        </div>
      </div>
      <div className="credit"></div>
    </section>
  );
}

export default Footer;
