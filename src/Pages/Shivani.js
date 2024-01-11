import React from "react";
import "./CSS/Sanjay.css";
import image from "../assets/home3.jpg";

const Shivani = () => {
  return (
    <div className="home">
      <div className="profile">
        <img src={image} alt="" />
        <h1>Shivani Madisetty </h1>
        <h3>Frontend Developer Trainee</h3>
      </div>

      <div className="cards">
        <div className="card1">
          <h3>Details:</h3>
          <p>Name: Shivani Madisetty</p>
          <a href="shivanimadisetty23@gmail.com">shivanimadisetty23@gmail.com</a>
          <p>Phone:6309511260</p>
          <p>Place: Hyderabad</p>
        </div>
        <div className="card1">
          <h3>Education:</h3>
          <p>
          BTEch(CSE) <br /> at MRET college{" "}
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
          <h4>COFFEE</h4>
          <a
            href="https://madisettyshivani.github.io/Coffee/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br /> Static cofee-shop website using html and css work with flex properties main includes of footer also
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-2</h4>
          <h4>EVENT_IMAGES</h4>
          <a
            href="https://madisettyshivani.github.io/ImageGallery/"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
          <p>
            PROJECT DETAILS: <br /> Event handling using javascript EVENTS onclick functionality also
            included with closing & opening of image
           
          </p>
          <p>Used Technolgies : HTML,CSS,JAVASCRIPT</p>
        </div>
        <div className="project1">
          <h4>Project-3</h4>
          <h4>FETCH-API</h4>
          <a
            href="https://madisettyshivani.github.io/fetchapisome/"
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
      </div>
    </div>
  );
};

export default Shivani;
