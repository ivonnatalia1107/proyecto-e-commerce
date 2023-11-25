import React from 'react';
import { useContext, useState } from "react";
import { loginService, signupService } from "../../services/user";
import { UserContext } from "../../context/UserContext";
import './login.css'


export const Login = () => {
  const [isMember, setIsMember] = useState(false);
  const { token, setToken } = useContext(UserContext)

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    if (isMember) {
      const userData = await loginService(dataObject);
      console.log(userData)
      setToken(userData.detail.token)
    } else {
      const userData = await signupService(dataObject);
      console.log(userData);
      setToken(userData.detail.token)
    }
  };

  return (
    <section className='loginBox'>
      <section className='form'>
        <p>{token}</p>
        <form onSubmit={onSubmit}>
          <h3 className='titleForm'>{isMember ? "Ingresa" : "Registrate"}</h3>
          <div className='inputBox'>
            {!isMember && (
              <div className='inputComponents'>
                <label className='labels' htmlFor="firstName">Name</label><input className='inputs' id="firstName" type="text" name="name"></input>
              </div>
            )}
            <div className='inputComponents'>
              <label className='labels' htmlFor="mail">Email</label><input className='inputs' id="mail" type="text" name="mail"></input>
            </div>
            <div className='inputComponents'>
              <label className='labels' htmlFor="password">Contraseña</label><input className='inputs' id="password" type="password" name="password"></input>
            </div>
            <div className='buttons'>
              <button type="submit">Enviar</button>
              <p className='pButton'>{isMember ? "Aun no estas registrado?" : "Ya estas registrado?"}
                <button type="button" onClick={() => setIsMember(!isMember)}>
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
