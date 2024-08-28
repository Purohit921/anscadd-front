import React from "react";
import "./CourseDisplay.css";

function CourseDisplay(props) {
  const { course } = props;
  console.log(course.syllabus);
  return (
    <div className="course-display-main">
      <div className="course-display">
        <div className="course-display-left">
          <img src={course.image} alt="" />
        </div>
        <div className="course-display-right">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </div>
      </div>
        <div className="syllabusChapters">
          {course.syllabus.map((item) => {
            return <div className="syllabusChapter">{item.syl}</div>;
          })}
        </div>
    </div>
  );
}

export default CourseDisplay;
