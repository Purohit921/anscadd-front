import React from "react";
import "./CourseDisplay.css";

function CourseDisplay(props) {
  const { course } = props;
  return (
    <div>
      <div className="course-display">
        <div className="course-display-left">
          <img src={course.image} alt="" />
        </div>
        <div className="course-display-right">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDisplay;
