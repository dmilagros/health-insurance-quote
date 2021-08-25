import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { getUserData } from "../../services/userServices";
import Step1 from "../../components/Step/Step1";
import Step2 from "../../components/Step/Step2";
import Button from "../../components/Button";
import "../../scss/register.scss";

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [currentStepNumber, setCurrentStepNumber] = useState(1);
  const [user, setUser] = useState([]);

  const ObtainUserData = async () => {
    setLoading(true);

    let res = await getUserData();
    console.log(res.data.data.tercero);
    setUser(res.data.data.tercero);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    ObtainUserData();
  }, []);

  const previousButton = () => {
    let currentStep = currentStepNumber;
    if (currentStep !== 1) {
      return <Button type="button" name="<" onClick={_prev}></Button>;
    }
    if (currentStep === 1) {
      return (
        <Link to="/">
          <Button type="button" name="<"></Button>
        </Link>
      );
    }
    return null;
  };

  const nextButton = () => {
    let currentStep = currentStepNumber;
    if (currentStep < 2) {
      return <Button type="button" name="Continuar" onClick={_next}></Button>;
    } else if (currentStep === 3) {
      return (
        <Link to="/finish">
          <Button type="button" name="COMPRAR PLAN" onClick={_next}></Button>
        </Link>
      );
    }
    return null;
  };

  const _next = () => {
    let currentStep = currentStepNumber;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setUser({
      currentStep: currentStep,
    });
  };

  const _prev = () => {
    let currentStep = currentStepNumber;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;

    setCurrentStepNumber(currentStep);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-register">
      <div className="container-register__container-advertising">
        <div className="container-register__watermark"></div>
      </div>
      <div className="container-register__container-form">
        <p className="container-register__steps">
          {previousButton()} Step {currentStepNumber}
          <span
            className="container-register__steps"
            className="container-register__steps--primary"
          >
            {"  "}
            de 7
          </span>
        </p>
        <p className="container-register__form-title">
          Hola,{" "}
          <span className="container-register__form-title container-register__form-title--highlight">
            {user.nombres}
          </span>
        </p>
        <p>Valida que todos los datos sean correctos</p>
        <p className="container-register__form-subtitle">
          Datos personales del titular
        </p>
        <form onSubmit={handleSubmit}>
          <Step1
            currentStep={currentStepNumber}
            handleChange={handleChange}
            defaultValueDoc={user.numDocumento}
            defaultValueName={user.nombres}
            defaultValueFLN={user.apellidoPaterno}
            defaultValueMLN={user.apellidoMaterno}
            defaultValueBD={moment.utc(user.fecNacimiento).format("YYYY-MM-DD")} //"2014-02-09"
          />
          <Step2
            currentStep={currentStepNumber}
            handleChange={handleChange}
            username={user.username}
          />
          <br />
          {nextButton()}
        </form>
      </div>
    </div>
  );
};

export default Register;
