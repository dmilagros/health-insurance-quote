import React from "react";
import "./button.scss";

const Button = ({ name, onClick }) => {
  return (
    <div
      className={name === "<" ? "container-return-button" : "container-button"}
    >
      <button
        className={
          name === "<"
            ? "container-return-button__button"
            : "container-button__button"
        }
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
