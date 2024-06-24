// src/components/PitchRateInput.js
import React from "react";

const PitchRateInput = ({ label, value, onChange, min, max, step }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="form-control"
      />
    </div>
  );
};

export default PitchRateInput;
