import React from "react";
import img1 from "../assets/home4.avif";
import img2 from "../assets/home3.jpg";
import img3 from "../assets/home1.png";
import img4 from "../assets/be.png";
import img6 from "../assets/fe.png";
import img5 from "../assets/cd1.jpg";
import Footer from '../Components/Footer'
import "./CSS/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-page">

        <div className="home-head">
          <h1>We Develop your Desire</h1>
        </div>
        <div className="home-image">
          <img src={img1} alt="" />
          <img src={img3} alt="" />
          <img src={img2} alt="" />
        </div>

        <div className="home-content">
          <h4>Tech Evalution</h4> <br />
          <p>
            We are Tech edu Company.We provides an online platform that offers
            an opportunity, tutors and learners. The platform aims to create a
            win-win situation for all, We provides courses like FRONTEND
            Development and BACKEND Development We have Tech courses for
            FRONTEND - HTML,CSS,JAVASCRIPT,REACT. for BACKEND -
            JAVA,PYTHON,BOOTCAMP,NODEJS,MANGO DB.and we providde Training in
            Tech with 95% Success Rate. careergrowth will definatle needed now
            to achieve your goals in tech career.
          </p>
        </div>
        <div className="section1">
          <div className="section-image">
            <img src={img5} alt="" />
          </div>
          <div className="section-content">
            <h4>TECH-DEVELOPMENT</h4>
            <p>
              Career development is the progression of short-term steps taken to
              achieve long-term professional goals. It involves the building of
              role-specific skill sets, and can include taking night classes,
              networking, seeking out a mentor and taking on new
              responsibilities in your current job. Effective career development
              requires a thoughtful approach.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="sec1">
            <p>
              The Webdevelopment <br />
              Developer <br /> TECH EVALUATION{" "}
            </p>
          </div>
          <div className="sec2">
            <p>
              The tech evaluation will turn you into a hireable frontend
              developer, and teach <br /> you how to nail the job interview.It
              contains over 70 hours of top notch <br /> tutorials, hundreds of
              coding challenges and many of real-time projects.
            </p>
          </div>
        </div>
        <div className="section3">
          <div className="section-image1">
            <img src={img6} alt="" />
          </div>
          <div className="Section-content1">
            <div className="sec4">
              <h4>Frontend Development:</h4>
              <p>
                Frontend development refers to the process of creating the
                visual and interactive elements of a website or web application
                that users interact with directly. It involves implementing
                designs, user interfaces, and user experiences using
                technologies such as HTML, CSS, and JavaScript. Here are some
                key aspects of frontend development
              </p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>BOOTSTRAP5</li>
                <li>JavaScript</li>
                <li>Cross-Browser Compatibility</li>
                <li>Web Performance Optimization</li>
                <li>Version Control/Git</li>
                <li>APIs (Application Programming Interfaces)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="section-content2">
            <div className="sec5">
              <h4>Backend Development:</h4>
              <p>
                Backend development is the process of building and maintaining
                the server-side of a web application. It focuses on handling
                data storage, business logic, security, and server-side
                functionalities that enable the frontend (user interface) to
                interact with databases and other external services. Here are
                key aspects of backend development
              </p>
              <ul>
                <li>Server-Side Programming Languages</li>
                <li>Server-Side Frameworks</li>
                <li>Databases</li>
                <li>Server Management</li>
                <li>Authentication and Authorization</li>
                <li>Logging and Monitoring</li>
              </ul>
            </div>
          </div>
          <div className="section-image2">
            <img src={img4} alt="" />
          </div>
        </div>  
      <div className="Footer">
      <Footer/>
      </div>

      </div>
    </div>
  );
};

export default Home;
