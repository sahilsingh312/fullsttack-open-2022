import React from "react";
import Course from "./Course";

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};

export default Courses;
