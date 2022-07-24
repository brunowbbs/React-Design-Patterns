import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (name.length === 0) {
      setNameInputError("Name is required");
    } else if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      {nameInputError && <span style={{ color: "red" }}>{nameInputError}</span>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
