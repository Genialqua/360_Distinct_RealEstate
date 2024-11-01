import React from 'react';
import David1 from '../assets/davidsHill_1.jpeg';
import David2 from '../assets/davidsHill_2.jpeg';

function OngoingProjects() {
  return (
    <>
      <main className="container mt-0 pt-0">
        <h1 className="text-center mb-4">David's Hill</h1>
        <div className="row">
          {/* Image Column 1 */}
          <div className="col-md-6">
            <img
              src={David1}
              className="img-fluid" // Bootstrap class for responsive images
              alt="David's Hill Image 1"
            />
          </div>

          {/* Image Column 2 */}
          <div className="col-md-6">
            <img
              src={David2}
              className="img-fluid" // Bootstrap class for responsive images
              alt="David's Hill Image 2"
            />
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Project: David's Hill</h5>
            <h5 className="card-title">Location: Victoria Island, Lagos</h5>
            <p className="card-text">
              David Hills is a testament to luxury living, nestled in the vibrant heart of
              Victoria Island, Lagos. This exquisite 7-storey residential development by 360
              Distinct Real Estate offers a rare opportunity to experience the pinnacle of
              urban sophistication and comfort. Boasting a striking architectural design,
              David Hills features a carefully curated selection of residences, including 3
              units of 2-bedroom apartments, 3 units of 3-bedroom apartments, and a
              magnificent 4-bedroom penthouse. Each unit is meticulously crafted to offer a
              harmonious blend of elegance, functionality, and modernity.
            </p>
            {/* Uncomment to enable details link */}
            {/* <a href="#" className="btn btn-warning">
              View Details
            </a> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default OngoingProjects;
