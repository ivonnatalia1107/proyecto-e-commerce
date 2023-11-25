import React from 'react';
import { Carrito } from '../Carrito';
import {UserContext} from "../../context/UserContext";
import { useContext } from 'react';
import './miPerfil.css'

export default function MiPerfil() {
  const {  token, name, mail } = useContext(UserContext);
  return (
    <>
    <section className='miPerfil'>
      <div className='cardProfile'>
    <div className='titleProfile'>Mi Perfil</div>
    <p className='textProfile'> Hola! <b>{name}</b>, cualquier información de tu pedido llegará al siguiente correo electrónico: <b>{mail}</b></p>
    </div>
    </section>
    <Carrito/>
    </>
  )
}
