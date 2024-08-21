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
              <p>
                Our courses are framed for students who want to learn 2D, 3D
                modelling and geometry derived assessmentsand other tooling.
                Explore the wide variety of choices in designing.
              </p>
            </article>
            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Mechanical CADD</h5>
              <p>
                Our courses are framed for students who want to learn 2D, 3D
                modelling and geometry derived assessmentsand other tooling.
                Explore the wide variety of choices in designing.
              </p>
            </article>
            <article className="category">
              <span className="category_icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
              <h5>Electrical CADD</h5>
              <p>
                Our courses are framed for students who want to learn 2D, 3D
                modelling and geometry derived assessmentsand other tooling.
                Explore the wide variety of choices in designing.
              </p>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Welcome;
