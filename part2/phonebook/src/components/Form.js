import React from "react";

const Form = ({
  addName,
  newName,
  handleNameChange,
  newphoneNumber,
  handlePhoneNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        phone:{" "}
        <input
          value={newphoneNumber}
          onChange={handlePhoneNumberChange}
          type="tel"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
