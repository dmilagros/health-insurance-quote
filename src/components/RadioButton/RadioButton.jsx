import React from "react";
import "./radioButton.scss";

const RadioButton = ({ name, id, checked }) => {
  return (
    <div className="radio">
      <div class="radio__item">
        <input
          className="radio__input"
          type="radio"
          id={id}
          name={id}
          value={id}
          checked={checked}
        />
        <label for={id}>{name}</label>
      </div>
    </div>
  );
};

export default RadioButton;
