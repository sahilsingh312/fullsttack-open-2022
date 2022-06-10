import React from "react";

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (currentSum, currentPart) => currentSum + currentPart.exercises,
    0
  );

  return (
    <div>
      <b>{"total of " + total + " exercises"}</b>
    </div>
  );
};

export default Total;
