import React from "react";
import "./CSS/Contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="getin">
          <h2>Get in Touch</h2>

          <p>
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you! Use the contact form below or reach out to us via
            [Techevalution@gmail.com, 7702636322].
          </p>
        </div>
        <div className="contact-form">
          <div className="formh">
            <h4>Contact Form</h4>
          </div>
          <form className="form1">
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />

            <label>Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="location">
          <h4>Our Location:</h4>
         <div className="para"> <p>
         Visit us at our office located at [1-856,Gachibowli,Hyderabad,500085]. We're always open
         to welcoming visitors and discussing how we can assist you.
       </p>
</div>
          <h4>Connect on Social Media:</h4>
          <div className="para"><p>
          Follow us on Instagram,Facebook,Twitter to stay updated on
          our latest news, events, and promotions.
        </p></div>
        </div>
        <div className="Footer">
        <Footer/>

        </div>
      </div>
    </div>
  );
};

export default Contact;
