import React from "react";

const Person = ({ person }) => {
  return (
    <h3>
      {person.name} {person.phone}
    </h3>
  );
};

export default Person;
