import React from "react";
import "./CSS/Sanjay.css";
import image from "../assets/lalith.jpg";

const Lalith = () => {
  return (
    <div className="home">
      <div className="profile">
        <img src={image} alt="" />
        <h1>Lalith Kumar Ippili</h1>
        <h3>Frontend Developer Trainee</h3>
      </div>

      <div className="cards">
        <div className="card1">
          <h3>Details:</h3>
          <p>Name: Lalith Kumar Ippili</p>
          <a href="ippilikumar524@gmail.com">ippilikumar524@gmail.com</a>
          <p>Phone: 9573773418</p>
          <p>Place: Hyderabad</p>
        </div>
        <div className="card1">
          <h3>Education:</h3>
          <p>
          BTEch(ECE) <br /> at Miracle educational society group of institutions
          </p>
          <p>Trainee At Carreerpedia Edutech</p>
          <p>Hyderabad,Telangana</p>
        </div>
        <div className="card1">
          <h3>Skills:</h3>
          <p>HTML5 ,CSS</p>
          <p>BOOTSTRAP5</p>
          <p>JAVASCRIPT</p>
          <p>REACT JS</p>
        </div>
      </div>

      

      <div className="projects">
        <div className="project1">
          <h4>Project-1</h4>
          <h4>FETCH-API</h4>
          <a
            href="https://sanjaymaraboina.github.io/Fetch-API-Project/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br /> Ecommerce site contains products with
            loadmore and fetch API functionality with the theme of instagram{" "}
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-2</h4>
          <h4>TRIP&DETAILS</h4>
          <a
            href="https://sanjaymaraboina.github.io/form-validation"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />
            Travel website with most visiting places and details named as SAMAHA
            with form-validation functionality
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-3</h4>
          <h4>EVENT-PROJECT</h4>
          <a
            href="https://sanjaymaraboina.github.io/Events-Project"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />
            Event handling using javascript EVENTS onclick functionality also
            included with closing & opening of image
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
      </div>
    </div>
  );
};

export default Lalith;
