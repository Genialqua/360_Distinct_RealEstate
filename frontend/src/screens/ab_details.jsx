import React, { useState } from "react";
import { Carousel, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Terrace from '../assets/Terraces.jpeg';
import TwoBed from '../assets/alexAndBill_2.jpeg';
import OneBed from '../assets/Alextest.jpeg';
import TeraInterior from '../assets/interior4.jpeg';
import TwobedInterior from '../assets/interior3.jpeg';
import OneBedInterior from '../assets/interior2.jpeg';


const Apartments = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const openModal = () => setShowModal(true);
    const closeModal = () => {
      setShowModal(false);
      setSuccess(false);
      setError(null);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }
  
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Booking was successfully submitted")
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  return (
    <>
      
      <div className="container mt-5 pt-5">
        <div className="row d-flex justify-content-center align-items-center text-center" style={{ minHeight: '1vh' }}>
          <div className="col-12">
          <h1>Alex and Bill Residences</h1>
            <h2>Apartment Details</h2>
            <p>With swimming pool and smart apartments</p>
          </div>
        </div>
        {/* Terraces */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
            <Carousel interval={null}>
                <Carousel.Item>
                  <img src={Terrace} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={TeraInterior} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">Terraces</h5>
                <h5 className="card-title">Price: N200 Million</h5>
                <h5 className="card-title">Units Available: 13</h5>
                <h1>Luxurious 4 Bedroom Terrace House</h1>
                <p>
                Welcome to the epitome of luxury living at Alex and Bill Residences, 
                where sophistication meets comfort in our expansive 4-bedroom with 4 
                terraces and a BQ. Thoughtfully designed to blend elegance with modern 
                conveniences, this spacious apartment offers an ideal living space for 
                families and individuals seeking an elevated lifestyle in Lagos.
                </p>
                <ul>
                  <li>
                    <strong>All Rooms Ensuite</strong>: Each bedroom comes with its own private
                    bathroom for your convenience and privacy.
                  </li>
                  <li>
                    <strong>Security Doors</strong>: High-quality security doors to ensure your safety
                    and peace of mind.
                  </li>
                  <li>
                    <strong>Spacious Layout</strong>: With four en-suite bedrooms, the apartment 
                    provides ample privacy and space, perfectly suited for both relaxation 
                    and entertainment.
                  </li>
                  <li>
                    <strong>Modern Amenities</strong>: Each apartment is equipped with top-of-the-line 
                    finishes, energy-efficient lighting, and state-of-the-art kitchen appliances to 
                    ensure your living experience is both stylish and sustainable.
                  </li>
                  <li>
                    <strong>Private Terrace</strong>: Enjoy your own private outdoor space, perfect 
                    for unwinding, hosting gatherings, or simply soaking in the serene ambiance.
                  </li>
                  <li>
                    <strong>Prime Location</strong>: Located in the serene Atlantic View Estate by 
                    Chevron in Lekki area, 
                    you would have easy access to key amenities like, schools, healthcare facilities, and Lagos’ 
                    bustling city life, while still enjoying a peaceful, private environment.
                  </li>
                  <li>
                    <strong>Prime Location</strong>: Located in the serene Atlantic View Estate area, 
                    you’ll have easy access to key amenities, schools, healthcare facilities, and Lagos’ 
                    bustling city life, while still enjoying a peaceful, private environment.
                  </li>
                  
                </ul>
                <p>
                  Make this luxurious 4-bedroom terrace house your new home and indulge in the
                  finest living experience.
                </p>
                <button className="btn btn-warning" onClick={openModal}>Book Inspection</button>
              </div>
            </div>
          </div>
          {/* Modal for booking form */}
          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Book an Inspection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="secondary" type="submit" className="mt-4 w-100" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
                </Button>
              </Form>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>Booking submitted successfully!</p>}
            </Modal.Body>
          </Modal>

          <div className="col-md-6 mb-4">
            <div className="card">
            <Carousel interval={null}>
                <Carousel.Item>
                  <img src={TwoBed} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={TwobedInterior} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">2 Bedroom Apartment</h5>
                <h5 className="card-title">Price: N85million</h5>
                <h5 className="card-title">Units Available: 6</h5>
                <h1>Luxurious 2 Bedroom Apartment + BQ</h1>
                <p>
                  Welcome to your dream home! This exquisite 2-bedroom apartment offers
                  unparalleled luxury and comfort with state of the art facilities. 
                  Here are the key features:
                </p>
                <ul>
                <li>
                    <strong>All Rooms Ensuite</strong>: Each bedroom comes with its own private
                    bathroom for your convenience and privacy.
                  </li>
                  <li>
                    <strong>Security Doors</strong>: High-quality security doors ensure your safety
                    and peace of mind.
                  </li>
                  <li>
                    <strong>Spacious Layout</strong>: With four en-suite bedrooms, the apartment 
                    provides ample privacy and space, perfectly suited for both relaxation 
                    and entertaining.
                  </li>
                  <li>
                    <strong>Modern Amenities</strong>: Each apartment is equipped with top-of-the-line 
                    finishes, energy-efficient lighting, and state-of-the-art kitchen appliances to 
                    ensure your living experience is both stylish and sustainable.
                  </li>
                  <li>
                    <strong>Private Terrace</strong>: Enjoy your own private outdoor space, perfect 
                    for unwinding, hosting gatherings, or simply soaking in the serene ambiance.
                  </li>
                  
                  <li>
                    <strong>Prime Location</strong>: Located in the serene Atlantic View Estate area, 
                    you would have easy access to key amenities, schools, healthcare facilities, and Lagos' 
                    bustling city life, while still enjoying a peaceful, private environment.
                  </li>
                  
                </ul>
                <p>
                  Make this luxurious 2-bedroom apartment your new home and indulge in the
                  finest living experience.
                </p>
                <button className="btn btn-warning" onClick={openModal}>Book Inspection</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
            <Carousel interval={null}>
                <Carousel.Item>
                  <img src={OneBed} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={OneBedInterior} className="d-block w-100" alt="Terraces" />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">Mini Flat</h5>
                <h5 className="card-title">Price: N45million</h5>
                <h5 className="card-title">Units Available: 2</h5>
                <h1>Luxurious 1 Bedroom Flat House</h1>
                <p>
                  Welcome to your dream home! This exquisite 1-bedroom flat apartment offers
                  unparalleled luxury and comfort with the following key features:
                </p>
                <ul>
                <li>
                    <strong>Ensuite Bedroom</strong>: 
                    The bedroom comes with a private bathroom for your convenience and 
                    privacy, making it a perfect retreat.
                </li>
                <li>
                    <strong>Security Door</strong>: 
                    High-quality security doors are installed to ensure your safety and 
                    peace of mind at all times.
                </li>
                <li>
                    <strong>Efficient Layout</strong>: 
                    Designed with a spacious bedroom, living area, and kitchen, 
                    this 1-bedroom layout maximizes space for comfort and functionality.
                </li>
                <li>
                    <strong>Modern Amenities</strong>: 
                    The apartment is equipped with premium finishes, energy-saving lighting, 
                    and modern kitchen appliances for a comfortable, eco-friendly lifestyle.
                </li>
                <li>
                    <strong>Exclusive Balcony</strong>: 
                    Step out onto your private balcony to enjoy fresh air and beautiful 
                    views—a perfect spot to relax or entertain.
                </li>
                <li>
                    <strong>Prime Location</strong>: 
                    Located in the peaceful Atlantic View Estate area, you’ll have quick 
                    access to essential amenities, schools, healthcare facilities, and Lagos' 
                    vibrant lifestyle, all while enjoying a serene residential environment.
                </li>
                  
                </ul>
                <p>
                  Make this luxurious apartment your new home and indulge in the
                  finest living experience.
                </p>
                <button className="btn btn-warning" onClick={openModal}>Book Inspection</button>
              </div>
            </div>
          </div>
          
        </div>


      </div>

    </>
  );
};

export default Apartments;