import React from "react";
import "./input.scss";

const Input = ({ type, placeholder, defaultValue, required }) => {
  return (
    <div className="container-input">
      <input
        className="container-input__input"
        type={type}
        name=""
        id=""
        placeholder=" "
        defaultValue={defaultValue}
        required={required}
      />
      <label className="container-input__label" for="usr">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
