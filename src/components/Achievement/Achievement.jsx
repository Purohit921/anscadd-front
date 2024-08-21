import React from "react";
import "./Achievement.css";

function Achievement() {
  return (
    <div className="achievements">
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
      <article className="achievements-card">
        <span className="achievements-icon">
          <i className="fa-solid fa-award"></i>
        </span>
        <h3>2</h3>
        <p>Branches</p>
      </article>
    </div>
  );
}

export default Achievement;
