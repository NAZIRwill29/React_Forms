import React, { useState } from "react";

function App() {
  //for get value for input
  const [nameInput, setNameInput] = useState("");
  // for set value h1
  const [name, setName] = useState("Hello");
  // handle change of input
  function handleChange(event) {
    // event.target.value = get the value in input
    // console.log(event.target.value);
    setNameInput(event.target.value);
  }

  //handle click btn
  function handleClick() {
    //set value h1
    setName(nameInput);
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={nameInput}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
