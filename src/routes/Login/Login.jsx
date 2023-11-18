import React from 'react';
import { useContext, useState } from "react";
import { loginService, signupService } from "../../services/user";
import { UserContext } from "../../context/UserContext";
import './login.css'


export const Login = () => {
  const [isMember, setIsMember] = useState(false);
  const {token, setToken } = useContext(UserContext)

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
    <section>
        <p>{token}</p>
      <form onSubmit={onSubmit}>
        <h3 className='titleForm'>{isMember ? "Ingresa" : "Registrate"}</h3>
        {!isMember && (
          <div>
            <label className='labels' htmlFor="firstName">Name</label>
            <input id="firstName" type="text" name="firstName"></input>
          </div>
        )}
        <div>
          <label  className='labels' htmlFor="mail">Email</label>
          <input id="mail" type="text" name="mail"></input>
        </div>
        <div>
          <label className='labels' htmlFor="password">Password</label>
          <input id="password" type="password" name="password"></input>
        </div>
        <button  type="submit">Submit</button>
        <p>
          {isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={() => setIsMember(!isMember)}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </section>
  );
};
