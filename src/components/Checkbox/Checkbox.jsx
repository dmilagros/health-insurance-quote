import React from "react";
import "./checkbox.scss";

const Checkbox = ({ content, required }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__item"
        placeholder=" "
        type="checkbox"
        required={required}
      />
      <label className="checkbox__option" for="cb1">
        {content}
      </label>
    </div>
  );
};

export default Checkbox;
