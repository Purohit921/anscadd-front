import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="contact_container">
      <aside className="contact_aside">
        <div className="container categories_container">
          <h2>Welcome to ANS CADD</h2>
          <div className="categories_right">
            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Civil CADD</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>

            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Mechanical CADD</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>

            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Electrical CADD</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>

            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Engineering Services</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>

            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>GIS Services</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>

            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Web development</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </article>
          </div>
        </div>
      </aside>
      <div className="req-container">
        <h2 className="request-info">Request Information</h2>
        <div className="form">
          <form className="contact_form">
            <div className="form_name">
              <input
                type="text"
                name="First name"
                id=""
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last name"
                id=""
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              id=""
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone number"
              id=""
              placeholder="Your phone number"
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Choose a date"
              id=""
              required
            />
            <select name="branch" id="" required>
              <option selected disabled>
                Choose Department
              </option>
              <option value="">Civil Engineering</option>
              <option value="">Mechanical Engineering</option>
              <option value="">Electrical Engineering</option>
              <option value="">Diploma</option>
              <option value="">Master Diploma</option>
              <option value="">Web Development</option>
            </select>
            <textarea
              name="message"
              rows="7"
              id=""
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
