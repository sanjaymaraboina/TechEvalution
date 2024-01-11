import React, { useState } from "react";
import imager from "../assets/arrow.png";
import "../Pages/CSS/Service.css"
import Footer from '../Components/Footer'

const Services = () => {
  const data = [
    {
      question: "Custom Web Development !",
      answer:
        "Harness the power of tailored web solutions designed specifically for educational purposes. Our expert developers create seamless, user-friendly platforms that facilitate effective teaching and learning,Harness the power of tailored web solutions designed specifically for educational purposes. Our expert developers create seamless, user-friendly platforms that facilitate effective teaching and learning.",
    },
    {
      question: "Learning Management Systems (LMS) !",
      answer:
        "Elevate your educational delivery with our cutting-edge Learning Management Systems. Manage courses, track progress, and facilitate collaborative learning environments effortlessly.Elevate your educational delivery with our cutting-edge Learning Management Systems. Manage courses, track progress, and facilitate collaborative learning environments effortlessly.",
    },
    {
      question: "Interactive eLearning Modules !",
      answer:
        "Transform static content into dynamic, interactive learning experiences. We specialize in creating engaging eLearning modules that captivate learners and enhance knowledge retention.Transform static content into dynamic, interactive learning experiences. We specialize in creating engaging eLearning modules that captivate learners and enhance knowledge retention",
    },
    {
      question: "Mobile Learning Solutions !",
      answer:
        "Stay connected with your audience on-the-go. Our responsive and mobile-friendly designs ensure that educational content is accessible anytime, anywhere, across various devices.Stay connected with your audience on-the-go. Our responsive and mobile-friendly designs ensure that educational content is accessible anytime, anywhere, across various devices.",
    },
    {
      question: "Gamification for Education !",
      answer:
        "Make learning fun and motivating through gamified elements. Our gamification strategies enhance student engagement and promote a positive learning experience.Stay connected with your audience on-the-go. Our responsive and mobile-friendly designs ensure that educational content is accessible anytime, anywhere, across various devices.",
    },
    {
      question: "Virtual Classrooms !",
      answer:
        "Bring classrooms to life in the virtual space. Our virtual classroom solutions enable real-time interaction, fostering a sense of community among students and educators.sStay connected with your audience on-the-go. Our responsive and mobile-friendly designs ensure that educational content is accessible anytime, anywhere, across various devices.",
    },
  ];
 const [selected,setSelected] =useState(null);
 const handleSelect = (i)=>{
  if (selected ===i){
    return setSelected(null)
  }
  setSelected(i)
 };
 
 
 return (
    <div>
      <div className="service-head"> 
        <div className="service-content">
          <h4>
            Welcome to Tech-Evaluation - Empowering Education through Innovative
            Web Development!
          </h4>
          <p>
            At Tech-Evaluation, we understand that the world of education is
            evolving, and so are the needs of educators, students, and
            institutions. Our commitment is to bridge the gap between
            traditional learning and the digital age, ensuring that educational
            experiences are not just informative but also engaging and
            accessible.
          </p>
        </div>
        <div className="Service-heading">
          <h1>Our Services</h1>
        </div>
        <section className="faq">
          <div className="item">
            {data.map((item, i) => {
              return (
                <div className="wraper" key={i} >
                  <div className="question" onClick={()=>handleSelect(i)}>
                    <h4>{item.question}</h4>
                    <img src={imager} alt="" className={selected===i ? "reverse" :""}/ >
                  </div>
                  <div className={selected ===i ? "answer show" : "answer"} >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        </div>
        <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Services;
