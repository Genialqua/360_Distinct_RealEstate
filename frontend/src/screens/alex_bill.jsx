import React, { useState, useRef} from "react";
import Alex1 from '../assets/alexAndBill_1.jpeg';
import Alex2 from '../assets/alexAndBill_2.jpeg';  
import Alex3 from '../assets/alexAndBill_3.jpeg';
import Alex4 from '../assets/alexAndBill_4.jpeg';
import Alex5 from '../assets/alexAndBill_5.jpeg';
import Alex6 from '../assets/alexAndBill_6.jpeg';
import Loader from '../components/Loader';

const AlexAndBillEstate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasRequestedBrochure, setHasRequestedBrochure] = useState(false);
  const [hasRequestedTour, setHasRequestedTour] = useState(false);

  const brochureFormRef = useRef(null);
  const tourFormRef = useRef(null);

  const handleBrochureFormSubmit = async (e) => {
    e.preventDefault();
    if (hasRequestedBrochure) {
      alert("You have already requested a brochure.");
      return;
    }

    const formData = new FormData(e.target);
    const brochureData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      setIsLoading(true);
      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brochureData),
      });

      if (response.ok) {
        setHasRequestedBrochure(true);
        alert("Brochure download requested successfully.");
        brochureFormRef.current.reset();
      } else {
        alert("Failed to request brochure download.");
      }
    } catch (error) {
      alert("An error occurred while requesting brochure download.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTourFormSubmit = async (e) => {
    e.preventDefault();
    if (hasRequestedTour) {
      alert("You have already booked a virtual tour.");
      return;
    }

    const formData = new FormData(e.target);
    const tourData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      setIsLoading(true);
      const response = await fetch("/api/virtual-tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourData),
      });

      if (response.ok) {
        setHasRequestedTour(true);
        alert("Virtual tour booked successfully.");
        tourFormRef.current.reset();
      } else {
        alert("Failed to book virtual tour.");
      }
    } catch (error) {
      alert("An error occurred while booking virtual tour.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="text-center text-light bg-dark py-5">
        <div className="container">
          <h1 className="display-4">Discover and enjoy Luxury Living at Alex and Bill Estate</h1>
          <p className="lead">
            Premium 21-unit apartments offering elegant designs, top-tier amenities, and an unbeatable location in the heart of Lagos.
          </p>
          <a href="#lead-magnet" className="btn btn-secondary btn-lg mx-2">
            Download Your Exclusive Brochure
          </a>
          <a href="#virtual-tour" className="btn btn-secondary btn-lg">
            Schedule a Virtual Tour
          </a>
        </div>
      </section>

      {/* Property Highlights Section */}
      <section id="highlights" className="py-5">
        <div className="container">
          <h2 className="text-center">Why Choose Alex and Bill Estate?</h2>
          <div className="row mt-4">
            {[
              {
                title: "Prime Location",
                description:
                  "Located around Chevron area in Eti-Osa local government area, Lagos, Alex and Bill Estate offers access to top spots in the city.",
              },
              {
                title: "Luxury Apartments",
                description:
                  "1-bedroom, 2-bedroom and 4-bedroom terraced apartments with spacious layouts and modern interiors.",
              },
              {
                title: "Top-Tier Amenities",
                description:
                  "24/7 security, uninterrupted power supply, and recreational facilities such as swimming pool.",
              },
            ].map((highlight, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <div className="card-body text-center">
                    <h5>{highlight.title}</h5>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Get Your Exclusive Brochure</h2>
          <p className="text-center">
            Complete the form below to receive a detailed brochure including floor plans, pricing, and investment opportunities in Alex and Bill Garden.
          </p>
          <div className="d-flex justify-content-center">
            <form className="mt-4" onSubmit={handleBrochureFormSubmit}>
              <div className="form-row justify-content-center">
                {["name", "email", "phone"].map((field) => (
                  <div className="col-md-30 mb-3" key={field}>
                    <input type={field === "phone" ? "tel" : "text"} className="form-control" name={field} placeholder={`Your ${field}`} required />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary btn-lg" disabled={hasRequestedBrochure}>
                  {hasRequestedBrochure ? "Brochure Already Requested" : "Download Our Brochure Now"}
                </button>
              </div>
              {isLoading && <Loader />}
            </form>
          </div>
        </div>
      </section>

      {/* Virtual Tour Invitation */}
      <section id="virtual-tour" className="py-5">
        <div className="container">
          <h2 className="text-center">Take a Virtual Tour of Alex and Bill Estate</h2>
          <p className="text-center">
            Book a virtual tour and explore Alex and Bill Estate from the comfort of your home.
          </p>
          <div className="d-flex justify-content-center">
            <form className="mt-4" onSubmit={handleTourFormSubmit}>
              <div className="form-row justify-content-center">
                {["name", "email", "phone"].map((field) => (
                  <div className="col-md-30 mb-3" key={field}>
                    <input type={field === "phone" ? "tel" : "text"} className="form-control" name={field} placeholder={`Your ${field}`} required />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary btn-lg" disabled={hasRequestedTour}>
                  {hasRequestedTour ? "Tour Already Booked" : "Book Your Virtual Tour"}
                </button>
              </div>
              {isLoading && <Loader />}
            </form>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Explore Alex and Bill Estate</h2>
          <div className="row mt-4">
            {[Alex1, Alex2, Alex3, Alex4, Alex5, Alex6].map((img, index) => (
              <div className="col-md-4" key={index}>
                <img src={img} className="img-fluid" alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center">Get in Touch with Us Now</h2>
          <p className="text-center">If you have any questions or want more details? Please contact us!</p>
          <div className="text-center">
            <p>Email: sales@360distinctrealestate.com</p>
            <p>Phone: +234 903 237 3430</p>
            <div id="map" className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Alex and Bill Estate Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlexAndBillEstate;
