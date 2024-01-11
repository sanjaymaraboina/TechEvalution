import React from "react";
import "./CSS/About.css";
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div>
      <div className="about-content">
        <div className="about-section">
          <h1>About Us</h1>
          <p>
            Welcome to Tech Evaluation, where our mission is to full fill your
            desire to achieve thing and up skill your career in tech so we are
            here to skill you in web development . Since 2022 , we've been we
            here take care about technical knowledge as well as communication,
            we have mentors to guide you. We have seperate sessions for those
            who are fom non-tech background.
          </p>
          <p>lets start your career growth </p>
        </div>
        <div className="about-section1">
          <h4>Our Team</h4>
          <p>
            Meet the passionate individuals who drive Tech Evaluation. Our
            diverse team brings together expertise from various fields, all
            united by a common goal: To Share knowledge for who want shift
            careers or bring their career towards tech IT field.Over the years,
            we've overcome challenges and celebrated successes, shaping us into
            the company we are today.
          </p>
        </div>
        <div className="about-section2">
          <h4>Company Values</h4>
          <p>
            At Tech Evaluation, we believe in :
            <ol>
              <li>
                <strong>Innovation:</strong> Foster a culture of innovation to
                stay ahead in the dynamic and rapidly evolving field of
                educational technology.
              </li>

              <li>
                <strong>Learner-Centric Approach:</strong> Prioritize the needs
                of learners and educators, ensuring that all products and
                services are designed to enhance the learning experience.
              </li>

              <li>
                <strong>Collaboration:</strong> Encourage teamwork and
                collaboration among employees to leverage diverse skills and
                perspectives in solving challenges and driving success.
              </li>

              <li>
                <strong>Adaptability:</strong> Embrace change and encourage
                employees to be flexible and adaptive to new technologies,
                methodologies, and challenges.
              </li>

              <li>
                <strong>Customer-Centric Focus:</strong> Prioritize customer
                satisfaction by actively seeking and responding to user
                feedback, ensuring that products and services meet the needs of
                the educational community.
              </li>

              <li>
                <strong>Ethical Practices:</strong> Uphold ethical standards in
                all aspects of business, especially when it comes to data
                privacy, security, and the responsible use of technology.
              </li>
            </ol>
            These values guide our decisions and actions, fostering a positive
            and collaborative work environment.
          </p>
        </div>
        <div className="Footer">
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default About;
