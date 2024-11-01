import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
  return (
    <div>
      <div className="content" style={{ paddingTop: '70px', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through any of the following channels:</p>
        <ul>
          <li>Phone: +234-903 237 3430</li>
          <li>Email: info@360distinctrealestate.com</li>
          <li>Address: B18, Platinum Mall, Ikota First Gate Bus-stop, Lekki Expressway, Lagos, Nigeria.</li>
        </ul>
        <h2>Connect with Us on Social Media</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/360distinct.realestate?igsh=NnlxMmk5cnZ5eTd6" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/360.distinctrealestate?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/360-distinct-real-estate-ltd/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/360_distinct?t=t42L8cXnmvwg1InXpTLS-Q&s=09" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <form className="contact-form">
              <h2 className="text-center">Get in Touch</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-warning">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;