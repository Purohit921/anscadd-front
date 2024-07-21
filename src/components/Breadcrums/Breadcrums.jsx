import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

function Breadcrums(props) {
  const { course } = props;
  console.log(props);
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" /> COURSES
      <img src={arrow_icon} alt="" /> {course.name}
    </div>
  );
}

export default Breadcrums;
