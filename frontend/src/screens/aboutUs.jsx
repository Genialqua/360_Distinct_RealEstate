import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Araba from '../assets/araba.jpeg';
import Omo from '../assets/B_Omowunmi.jpeg';
import Sunola from '../assets/E_Sunola.jpeg';
import Fako from '../assets/fakolujo.jpeg';
import Fred from '../assets/malachi.jpeg';
import Akin from '../assets/O_Akinbola.jpeg';

const RealEstateInfo = () => {
  return (
    <div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
            <p><strong>Who We Are</strong><br />
              360 Distinct Real Estate Ltd is a leading property development and management 
              company dedicated to transforming dreams 
              into enduring legacies. Founded with the vision of providing top-notch real estate solutions, 
              we have established ourselves as a trusted name in the industry. Our commitment to excellence, 
              integrity, and customer satisfaction sets us apart in the competitive real estate market.
            </p>
            <p><strong>Our Vision</strong><br />
              To be the foremost real estate company, delivering innovative and sustainable property 
              solutions that exceed expectations and create lasting value for our clients, 
              communities, and stakeholders.
            </p>
            <p><strong>Our Mission</strong><br />
              Excellence: To deliver high-quality real estate projects that meet the highest standards of design, 
              construction, and sustainability.<br />
              Innovation: To continuously innovate and adapt to the evolving needs of the real estate market, 
              offering cutting-edge solutions.<br />
              Customer Satisfaction: To provide exceptional customer service, ensuring that our clients' 
              needs and aspirations are always at the forefront of our operations.<br />
              Community Impact: To contribute positively to the communities we serve, creating vibrant 
              and sustainable living environments.
            </p>
            {/* Additional paragraphs and sections here */}
          </div>
        </div>

        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Fako} className="card-img-top" alt="Oluwaseyi Fakolujo" />
              <div className="card-body">
                <h5 className="card-title">Oluwaseyi Fakolujo</h5>
                <p className="card-text">
                  <strong>Managing Director</strong><br />
                  Oluwaseyi Fakoloju is the esteemed Managing Director of 360 Distinct Real Estate Limited, 
                  bringing over 15 years of comprehensive experience in the real estate industry. 
                  Under his visionary leadership, the company has carved a niche in delivering innovative 
                  and high-quality residential and commercial properties, 
                  focusing on affordability and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Akin} className="card-img-top" alt="Olukayode Akinbola" />
              <div className="card-body">
                <h5 className="card-title">Olukayode Akinbola</h5>
                <p className="card-text">
                  <strong>Director</strong><br />
                  Chief (Dr.) Olukayode Akinbola is a seasoned professional with extensive experience in the real estate industry. 
                  With a background that includes significant roles in real estate development and management, 
                  Chief (Dr.) Akinbola has a proven track record of successfully executing large-scale projects and delivering high-quality results. 
                  His expertise spans various aspects of the real estate sector, including property development, investment, and management. 
                  Chief (Dr.) Akinbola is known for his innovative approach to real estate solutions and his commitment to excellence. 
                  His leadership has been instrumental in fostering growth and achieving sustainable success in the competitive real estate market. 
                  Chief (Dr.) Olukayode Akinbola's contributions to the industry are well-recognized, 
                  and he continues to be a key figure in shaping the future of real estate in Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Sunola} className="card-img-top" alt="Emmanuel Sunola" />
              <div className="card-body">
                <h5 className="card-title">Emmanuel Sunola</h5>
                <p className="card-text">
                  <strong>Director</strong><br />
                  Mr Emmanuel Sunola is an experienced professional in the area of logistics, 
                  procurement and human resource management with over thirteen years experience 
                  from Addax petroleum, a leading international oil and gas exploration and production company. 
                  He is an Associate member of Nigeria Institute of mechanical Engineers, 
                  ASME and society of Petroleum Engineers.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Omo} className="card-img-top" alt="Busayo Omowunmi" />
              <div className="card-body">
                <h5 className="card-title">Busayo Omowunmi</h5>
                <p className="card-text">
                  <strong>Executive Director</strong><br />
                  She is an experienced and seasoned HR professional with over 10years experience in 
                  Human Resource Management. 
                  Her experience has span across several business industries such as retail, 
                  Oil and Gas, Hospitality, 
                  Real Estate etc. She is an associate member of Chartered institute of 
                  Personnel and Development(CIPD,UK) 
                  and Chartered Institute of Personnel Management of Nigeria(CIPM). 
                  She is passionate about management and Human capital development.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Araba} className="card-img-top" alt="Bode Araba" />
              <div className="card-body">
                <h5 className="card-title">Bode Araba</h5>
                <p className="card-text">
                  <strong>Project Manager</strong><br />
                  Bode Araba is a highly accomplished Chartered Estate Surveyor, 
                  Registered Building Engineer, and Project Manager with exceptional insight and 
                  nearly 30 years of experience in the real estate industry. His expertise spans 
                  construction technology, estate management, and planned development consultancy, 
                  backed by significant industrial experience and academic contributions.
                </p>
              </div>
            </div>
          </div>

           {/* Team Member 6 */} 
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={Fred} className="card-img-top" alt="Frederick Aleoke-Malachi" />
              <div className="card-body">
                <h5 className="card-title">Frederick Aleoke-Malachi</h5>
                <p className="card-text">
                  <strong>Brands and Marketing</strong><br />
                  Frederick Aleoke-Malachi is a dynamic and results-driven Brands and Marketing professional 
                  with over a decade of experience in the real estate, marketing and ICT sectors. 
                  His exceptional skills in brand development, strategic marketing, and customer relationship 
                  management online and offline have been instrumental in driving the success of 
                  numerous high-profile projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateInfo;