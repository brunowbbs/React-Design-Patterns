import { createRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = createRef();
  const ageInput = createRef();
  const hairInput = createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairInput.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="text" placeholder="Age" ref={ageInput} />
      <input name="hairColor" type="text" placeholder="Hair" ref={hairInput} />
      <input type="submit" value="Submit" />
    </form>
  );
};
