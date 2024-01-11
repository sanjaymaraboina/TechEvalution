import React from "react";
import "./CSS/Sanjay.css";
import image from "../assets/ravi.jpg";

const Ravi = () => {
  return (
    <div className="home">
      <div className="profile">
        <img src={image} alt="" />
        <h1>Ravi Shankar Putta</h1>
        <h3>Frontend Developer Trainee</h3>
      </div>

      <div className="cards">
        <div className="card1">
          <h3>Details:</h3>
          <p>Name: Ravi Shankar Putta</p>
          <a href="raviishankar77773@gmail.com">raviishankar77773@gmail.com</a>
          <p>Phone: 9550973572</p>
          <p>Place: Hyderabad</p>
        </div>
        <div className="card1">
          <h3>Education:</h3>
          <p>
            Bachelor of Science <br /> at  B.Sc Osmania University
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
          <h4>book store</h4>
          <a
            href="https://ravishankar5777.github.io/Book-Store/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />Book store using TODO list with javascript 
            functionality with this  we can create todo list,update and delete
          </p>
          <p>Used Technolgies : HTML,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-2</h4>
          <h4>Crest</h4>
          <a
            href="https://ravishankar5777.github.io/Crest/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br />
            Crest Interiors which created by using html and css with responsive
            so that we can use it in any desktop version as well as mobile
          </p>
          <p>Used Technolgies : HTML,CSS</p>
        </div>
        <div className="project1">
          <h4>Project-3</h4>
          <h4>Resturant Billing </h4>
          <a
            href="https://ravishankar5777.github.io/Billing/"
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
          <p>Used Technologies : HTML,CSS,JAVASCRIPT</p>
        </div>
      </div>
    </div>
  );
};

export default Ravi;
