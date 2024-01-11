import React from "react";
import "./CSS/Sanjay.css";
import image from "../assets/mahi.jpg";

const Lalith = () => {
  return (
    <div className="home">
      <div className="profile">
        <img src={image} alt="" />
        <h1>Mahesh Palle</h1>
        <h3>Frontend Developer Trainee</h3>
      </div>

      <div className="cards">
        <div className="card1">
          <h3>Details:</h3>
          <p>Name: Palle Mahesh</p>
          <a href="pmahi6301004451@gmail.com">pmahi6301004451@gmail.com</a>
          <p>Phone: 7093453833</p>
          <p>Place: Hyderabad</p>
        </div>
        <div className="card1">
          <h3>Education:</h3>
          <p>
            BTEch(EEE) <br /> at JBIET college{" "}
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
          <h4>BEEJ </h4>
          <a
            href="https://maheshp345.github.io/Beej-Project/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br /> Beej project  with using of complete HTML and CSS using flex properties and postions, responsive website using media queries
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-2</h4>
          <h4>Fetch-API</h4>
          <a
            href="https://maheshp345.github.io/Instagram-Fetch-api-project-/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />
            Ecommerce site contains products with
            loadmore and fetch API functionality with the theme of instagram{" "}
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-3</h4>
          <h4>TODO</h4>
          <a
            href="https://maheshp345.github.io/Todo-App/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />
          Using javascript CRUD to create an smalller TODO application using todo we can create edit delete and update our todo list 
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
      </div>
    </div>
  );
};

export default Lalith;
