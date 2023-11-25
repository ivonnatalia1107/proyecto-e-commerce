import React from 'react';
import { useContext, useState } from "react";
import { loginService, signupService } from "../../services/user";
import { UserContext } from "../../context/UserContext";
import './login.css'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);
  const { token, setToken, name, mail, setName, setMail } = useContext(UserContext);
 

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    if (isMember) {
      try {
      const userData = await loginService(dataObject);
      console.log(userData)
      setToken(userData.detail.token);
      setName(userData.detail.user.name);
      setMail(userData.detail.user.mail)
      navigate('/miperfil')
    }  catch (error) {
      alert('Usuario o clave invalida. Revisa tu clave o registrate.');
      return {
        message: 'Usuario o clave invalida',
      };
    }

    } else {
      const userData = await signupService(dataObject);
      console.log(userData);
      alert('Felicidades! ya eres parte de la comunidad frutera, ahora porfavor ingresa a tu perfil');
      setToken(userData.detail.token);
      setName(userData.detail.user.name);
      setMail(userData.detail.user.mail);

    }
  };

  return (
    <section className='loginBox'>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <h3 className='titleForm'>{isMember ? "Ingresa" : "Registrate"}</h3>
          <div className='inputBox'>
            {!isMember && (
              <div className='inputComponents'>
                <label className='labels' htmlFor="firstName">Nombre</label><input className='inputs' id="name" type="text" name="name"></input>
              </div>
            )}
            <div className='inputComponents'>
              <label className='labels' htmlFor="mail">Email</label><input className='inputs' id="mail" type="text" name="mail"></input>
            </div>
            <div className='inputComponents'>
              <label className='labels' htmlFor="password">Contraseña</label><input className='inputs' id="password" type="password" name="password"></input>
            </div>
            <div className='buttons'>
              <button type="submit" >Enviar </button>
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
