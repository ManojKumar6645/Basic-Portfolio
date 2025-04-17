import React, { useState } from "react";
import "./Contact.css"; // Custom CSS for additional styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add form submission logic here
  };

  return (
    <div id="contact" className="form-1 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Contact Details</h2>
            <p className="p-heading">
              For any inquiries or collaboration opportunities, feel free to reach out to me. The most efficient way to contact me is by sending a message to the following email address{" "}
              <a className="yellow no-line" href="mailto:manojkumar65927@gmail.com">
                manojkumar65927@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            {/* Contact Form */}
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label-control" htmlFor="cname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control-input"
                  id="cname"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-control" htmlFor="cemail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control-input"
                  id="cemail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-control" htmlFor="cmessage">
                  Project Details
                </label>
                <textarea
                  className="form-control-textarea"
                  id="cmessage"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="form-control-submit-button">
                  Submit
                </button>
              </div>
            </form>
            {/* end of contact form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;