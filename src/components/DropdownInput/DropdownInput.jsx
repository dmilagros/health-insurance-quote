import React from "react";
import "./dropdownInput.scss";
import iconArrow from "../../assets/icons/icon-arrow_down.svg";

const DropdownInput = ({ placeholder, defaultValue }) => {
  return (
    <div className="dropdownInput">
      <div className="dropdownInput__dropdown">
        <select className="dropdownInput__select" name="select">
          <option value="dni" selected>
            DNI
          </option>
          <option value="pasaporte">Pasaporte</option>
          <option value="carne">CE</option>
        </select>
        <span className="dropdownInput__arrow">
          <img className="dropdownInput__image" src={iconArrow} alt="" />
        </span>
      </div>
      <div className="dropdownInput__container-input">
        <input
          className="dropdownInput__input"
          defaultValue={defaultValue}
          type="text"
          name=""
          id=""
          placeholder=" "
          required
        />
        <label className="dropdownInput__label" for="usr">
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default DropdownInput;
