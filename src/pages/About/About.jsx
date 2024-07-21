import React from "react";
import Header from "../../components/Header/Header.jsx";
import "./About.css";
import AboutHeader from "../../components/AboutHeader/AboutHeader.jsx";

function About() {
  return (
    <div>
      <section className="about_achievements">
        <div className="container about_achievements-container">
          <div className="about_achievements-left">
            <img src="./images/about achievements.svg" alt="" />
          </div>
          <div className="about_achievements-right">
            <h1>Achievements</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              modi aperiam repudiandae ut totam praesentium quibusdam quae
              sequi! Cumque nesciunt doloribus quis reiciendis, odio optio.
            </p>
            <div className="achievements_cards">
              <article className="achievements-card">
                <span className="achievements-icon">
                  <i className="fa-solid fa-video"></i>
                </span>
                <h3>70+</h3>
                <p>Courses</p>
              </article>
              <article className="achievements-card">
                <span className="achievements-icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <h3>7,000+</h3>
                <p>Students</p>
              </article>
              <article className="achievements-card">
                <span className="achievements-icon">
                  <i className="fa-solid fa-award"></i>
                </span>
                <h3>2</h3>
                <p>Branches</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
