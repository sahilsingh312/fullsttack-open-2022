import React from "react";
import Person from "./Person";

const Persons = ({ personData }) => {
  return (
    <div>
      {" "}
      {personData.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
