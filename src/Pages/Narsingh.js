import React from "react";
import "./CSS/Sanjay.css";
import image from "../assets/narsingh.jpg";

const Narsingh = () => {
  return (
    <div className="home">
      <div className="profile">
        <img src={image} alt="" />
        <h1> Murapaka Narasinga Rao </h1>
        <h3>Frontend Developer Trainee</h3>
      </div>

      <div className="cards">
        <div className="card1">
          <h3>Details:</h3>
          <p>Name: Murapaka Narasinga Rao</p>
          <a href="murapakanarasingarao02@gmail.com">
            murapakanarasingarao02@gmail.com
          </a>
          <p>Phone: 9390431447</p>
          <p>Place: Hyderabad</p>
        </div>
        <div className="card1">
          <h3>Education:</h3>
          <p>
            B.Tech(CSE) <br />
            Miracle educational society group of institutions
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
          <h4>ARVR</h4>
          <a
            href="https://narasing02.github.io/ARVR/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS:Augmented Reality & Virtual Reality Augmented
            Reality (AR) is a perfect blend of the digital world and the
            <br />
          </p>
          <p>Used Technolgies : HTML,CSS,Bootstrap</p>
        </div>
        <div className="project1">
          <h4>Project-2</h4>
          <h4>Beauty</h4>
          <a
            href="https://narasing02.github.io/Beauty/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS:Beauty app which allows to show all products and
            beauty things for men and women Bootstrap,CSS,Html
          </p>
          <p>Used Technolgies : HTML,CSS,Bootstrap</p>
        </div>
        <div className="project1">
          <h4>Project-3</h4>
          <h4>TODO</h4>
          <a
            href="https://narasing02.github.io/TodoApplication/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: 
            TODO application to add daily reminders and things todo in again and
            again which allows us to modify edit 
          </p>
          <p>Used Technolgies : Html,CSS,,Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Narsingh;
