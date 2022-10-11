import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h2 className="CommanTitle">Contact Page</h2>
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.7371557119964!2d73.15441751475575!3d22.325778285310292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8c0b9e99ebd%3A0xd94168846b5a671!2sOm%20Enterprise%20-%20Tile%20Showroom%20%2F%20Sanitary%20Ware%20%2F%20Bathroom%20Accessories%2F%20Hindware%20in%20Vadodara!5e0!3m2!1sen!2sin!4v1665479687233!5m2!1sen!2sin"
        width="85%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mdojddww" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
