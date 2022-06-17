import { useState } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newphoneNumber, setNewPhoneNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [filteredData, setFilteredData] = useState(persons);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const handleSearch = (e) => {
    let keyword = e.target.value;
    console.log(keyword);
    setNewSearch(keyword);
    if (keyword === "") {
      setFilteredData(persons);
    } else {
      const result = persons.filter((person) => {
        return person.name.toLowerCase().includes(keyword.toLowerCase());
      });
      console.log(result);
      setFilteredData(result);
    }
  };

  const addName = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      phone: newphoneNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setFilteredData(persons.concat(personObject));
    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search newSearch={newSearch} handleSearch={handleSearch} />
      </div>
      <Form
        addName={addName}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        newName={newName}
        newphoneNumber={newphoneNumber}
      />
      <h2>Numbers</h2>
      <Persons personData={filteredData} />
    </div>
  );
};

export default App;
