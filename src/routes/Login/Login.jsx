import React, { useContext, useState } from "react";
import { loginService, signupService } from "../../services/user";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SpinnerFunction } from "../../components/Spinner/Spinner";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);
  const { setToken, setName, setMail } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    if (isMember) {
      try {
        const userData = await loginService(dataObject);
        console.log(userData);
        setToken(userData.detail.token);
        setName(userData.detail.user.name);
        setMail(userData.detail.user.mail);
        navigate("/miperfil");
      } catch (error) {
        alert("Usuario o clave invalida. Revisa tu clave o registrate.");
        return {
          message: "Usuario o clave invalida",
        };
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const userData = await signupService(dataObject);
        console.log(userData);
        setToken(userData.detail.token);
        setName(userData.detail.user.name);
        setMail(userData.detail.user.mail);
      }catch (error) {
        console.error("Error al registrarte:", error);
        alert(`Atención: Si rellenaste todos los campos y no estabas registrado previamente ahora puedes ingresar`);
      } finally {
        setLoading(false);
        console.error("Operación de registro finalizada");
      }
    }
  };

  return (
    <section className="loginBox">
      <section className="form">
        <form onSubmit={onSubmit}>
          <h3 className="titleForm">
            {isMember ? "Ingresa" : "Registrate"}
          </h3>
          <div className="inputBox">
            {!isMember && (
              <div className="inputComponents">
                <label className="labels" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  className="inputs"
                  id="name"
                  type="text"
                  name="name"
                ></input>
              </div>
            )}
            <div className="inputComponents">
              <label className="labels" htmlFor="mail">
                Email
              </label>
              <input
                className="inputs"
                id="mail"
                type="text"
                name="mail"
              ></input>
            </div>
            <div className="inputComponents">
              <label className="labels" htmlFor="password">
                Contraseña
              </label>
              <input
                className="inputs"
                id="password"
                type="password"
                name="password"
              ></input>
            </div>
            <div className="buttons">
              {loading ? (
                <SpinnerFunction />
              ) : (
                <button type="submit">Enviar</button>
              )}
              <p className="pButton">
                {isMember ? "Aun no estas registrado?" : "Ya estas registrado?"}
                <button
                  type="button"
                  onClick={() => setIsMember(!isMember)}
                  disabled={loading}
                >
                  {isMember ? "Registro" : "Ingreso"}
                </button>
              </p>
            </div>

          </div>
        </form>
      </section>
    </section>
  );
};