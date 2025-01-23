// filepath: /d:/Study/Cars93/cars93/src/Modules/ContactUs/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="mt-5">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;