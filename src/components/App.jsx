import React, { useState } from "react";

function App() {
  //for get value for input
  const [name, setName] = useState("");
  // for set value h1
  const [headingText, setHeadingText] = useState("Hello");
  // handle change of input
  function handleChange(event) {
    // event.target.value = get the value in input
    // console.log(event.target.value);
    setName(event.target.value);
  }

  //handle click btn
  function handleClick() {
    //set value h1
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
