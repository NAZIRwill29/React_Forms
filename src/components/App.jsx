import React from "react";

function App() {
  // handle change of input
  function handleChange(event) {
    // event.target.value = get the value in input
    console.log(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
