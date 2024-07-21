import React, { useContext } from "react";
import "./Course.css";
import { useParams } from "react-router-dom";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import { StoreContext } from "../../context/StoreContext";
import CourseDisplay from "../../components/CourseDisplay/CourseDisplay";

function Course() {
  const { food_list } = useContext(StoreContext);
  const { courseId } = useParams();
  const course = food_list.find((e) => e.id === courseId);
  console.log(course);

  return (
    <div>
      <Breadcrums course={course} />
      <CourseDisplay course={course} />
    </div>
  );
}

export default Course;
