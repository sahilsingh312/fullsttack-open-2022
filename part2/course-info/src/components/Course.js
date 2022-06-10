import React from "react";
import Total from "./Total";
import Header from "./Header";
import Part from "./Part";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total course={course} />
    </div>
  );
};

export default Course;
