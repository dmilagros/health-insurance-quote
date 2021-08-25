import React from "react";
import DropdownInput from "../DropdownInput";
import Input from "../Input";
import RadioButton from "../RadioButton";

const Step1 = (props) => {
  const {
    currentStep,
    defaultValueDoc,
    defaultValueName,
    defaultValueFLN,
    defaultValueMLN,
    defaultValueBD,
  } = props;

  if (currentStep !== 1) {
    return null;
  }
  return (
    <div className="container-step1">
      <DropdownInput
        placeholder="Nro de documento"
        defaultValue={defaultValueDoc}
      />
      <br />
      <Input
        type="text"
        placeholder="Nombres"
        defaultValue={defaultValueName}
        required
      />
      <br />
      <Input
        type="text"
        placeholder="Apellido Paterno"
        defaultValue={defaultValueFLN}
        required
      />
      <br />
      <Input
        type="text"
        placeholder="Apellido Materno"
        defaultValue={defaultValueMLN}
        required
      />
      <br />
      <Input
        type="date"
        placeholder="Fecha de Nacimiento"
        defaultValue={defaultValueBD}
        required
      />
      <br />
      <p>Género</p>
      <div>
        <RadioButton name="Masculino" id="gen" checked />
        <RadioButton name="Femenino" id="gen" />
      </div>
      <p>¿A quién vamos a asegurar?</p>

      <RadioButton name="Solo a Mí" id="typesec" checked />
      <RadioButton name="A mí y a mi familia" id="typesec" />
    </div>
  );
};

export default Step1;
