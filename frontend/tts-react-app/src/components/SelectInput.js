// src/components/SelectInput.js
import React from "react";

const SelectInput = ({ label, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select value={value} onChange={onChange} className="form-control">
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
