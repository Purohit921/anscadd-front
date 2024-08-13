import React from "react";
import "./Contactus.css";
import { assets } from "../../assets/assets";

function Contactus() {
  return (
    <>
      <div className="app-land">
        <div className="App">
          <div class="container cont_container">
            <aside class="cont_aside">
              <div class="asid_image">
                <img src={assets.logo} alt="" />
              </div>
              <h2>Contact Us</h2>
              <h3>ANS CADD</h3>
              <p>
                1st Floor, Brahma Nagar 2nd Lane Near Gurudev Hospital, New Bus
                Stand Berhampur, Ganjam, odisha,760004
              </p>
              <ul class="cont_details">
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <h5>+91 9090-557-799</h5>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <h5>anscadd@gmail.com</h5>
                </li>
                <li>
                  <i class="fa-solid fa-location-crosshairs"></i>
                  <h5>Berhampur,Ganjam</h5>
                </li>
              </ul>
            </aside>
            <form
              action="https://formspree.io/f/xleqneka"
              method="POST"
              class="cont_form"
            >
              <div class="for_name">
                <input
                  type="text"
                  name="First name"
                  id=""
                  placeholder="First name"
                  required
                />
                <input
                  type="text"
                  name="Last name"
                  id=""
                  placeholder="Last name"
                  required
                />
              </div>
              <input
                type="email"
                name="Email Address"
                id=""
                placeholder="Your Email Address"
                required
              />
              <textarea
                name="Message"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" class="btn bt-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
