// src/components/TextInput.js
import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="text">Text:</label>
      <textarea
        id="text"
        value={value}
        onChange={onChange}
        rows="4"
        cols="50"
        className="form-control"
      />
    </div>
  );
};

export default TextInput;
