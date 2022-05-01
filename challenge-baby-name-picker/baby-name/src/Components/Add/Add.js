import React, { useState, useEffect } from "react";
function Add(props) {
  let [input, setCurrentName] = useState("");

  function handleNameAdd(e) {
    setCurrentName(e.target.value);
  }

  function addNameToAllNames(e) {
    e.preventDefault();
    const newBabyName = {
      name: input,
      sex: "d",
    };
    props.addName(newBabyName);
    console.log(newBabyName);
    setCurrentName("");
  }
  return (
    <div className="search-bar">
      <input
        onChange={handleNameAdd}
        type="text"
        placeholder="add name"
        value={input}
      />
      <button
        className="submit-button"
        onClick={addNameToAllNames}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
export default Add;
