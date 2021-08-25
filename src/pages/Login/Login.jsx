import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../scss/login.scss";
import moment from "moment";
import mobile from "../../assets/icons/gl_mobile-20x20.png";
import shield from "../../assets/icons/gl_shield-20x20.png";
import Input from "../../components/Input";
import DropdownInput from "../../components/DropdownInput";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import { getUserData } from "../../services/userServices";
import Loading from "../../components/Loading";

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);

  const ObtainUserData = async () => {
    setLoading(true);

    let res = await getUserData();
    console.log(res.data.data.tercero);
    setDataUser(res.data.data.tercero);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/registrar");
  };

  useEffect(() => {
    ObtainUserData();
  }, []);

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="container-login">
        <div className="container-login__container-advertising">
          <div className="container-login__advertising">
            <p className="container-login__title">Seguro de</p>
            <p className="container-login__title container-login__title--bold">
              Salud
            </p>
            <div className="container-login__advantage">
              <p className="container-login__item">
                <img
                  className="container-login__image-item"
                  src={mobile}
                  alt="característica"
                />{" "}
                Cómpralo de manera fácil y rápida
              </p>
              <p className="container-login__item">
                <img
                  className="container-login__image-item"
                  src={shield}
                  alt="característica"
                />
                Cotiza y compra tu seguro 100% digital
              </p>
              <p className="container-login__item">
                <img
                  className="container-login__image-item"
                  src={mobile}
                  alt="característica"
                />
                Hasta S/.12 millones de cobertura anual
              </p>
              <p className="container-login__item">
                <img
                  className="container-login__image-item"
                  src={shield}
                  alt="característica"
                />
                Más de 300clínicas en todo el Perú
              </p>
            </div>
            <p>@ 2020 RIMAC Seguros y Reaseguros.</p>
          </div>
          <div className="container-login__watermark"></div>
        </div>
        <div className="container-login__container-form">
          <div className="container-login__form">
            <form onSubmit={handleSubmit}>
              <p className="container-login__form-title">
                Obtén tu{" "}
                <span className="container-login__form-title container-login__form-title--highlight">
                  seguro ahora
                </span>
              </p>
              <p className="container-login__form-subtitle">
                Ingresa los datos para comenzar.
              </p>
              <DropdownInput
                defaultValue={dataUser.numDocumento}
                placeholder="Nro de Documento"
              />
              <br />
              <Input
                type="date"
                placeholder="Fecha de nacimiento"
                defaultValue={moment
                  .utc(dataUser.fecNacimiento)
                  .format("YYYY-MM-DD")}
                required="false"
              />
              <br />
              <Input placeholder="Celular" defaultValue={dataUser.telefono} />
              <br />
              <Checkbox
                required="true"
                content="Acepto la Politica de Protección de Datos Personales y los Terminos y Condiciones"
              />
              <br />
              <Checkbox
                required="true"
                content="Acepto la Politica de Envío  de Comunicaciones Comerciales"
              />
              <br />
              <Button name="COMENCEMOS"></Button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
