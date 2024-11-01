import React from "react";
import logo from "../assets/AINA_064041.png"; 
import backgroundImage from "../assets/eko_view.jpeg"; 

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="content d-flex flex-column justify-content-center align-items-center text-center p-4">
        <div className="stylish-text bg-dark text-light p-4 rounded-3" style={{ opacity: 0.9, maxWidth: "80%" }}>
          <h1>
            Transforming Dreams
            <br /> into Enduring Legacies
            <br /> for Generations
          </h1>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100px",
              height: "auto",
              marginTop: "20px",
              animation: "spin 3s linear infinite"
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;