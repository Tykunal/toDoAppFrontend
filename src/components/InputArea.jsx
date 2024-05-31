import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    props.SetItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="form">
      <input
        spellCheck="false"
        onChange={handleChange}
        type="text"
        value={inputText}
      />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
