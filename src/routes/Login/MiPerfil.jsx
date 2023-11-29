import React from 'react';
import {UserContext} from "../../context/UserContext";
import { useContext } from 'react';
import './miPerfil.css'
import { Link } from 'react-router-dom';
import Showroom from '../../components/showroom/showroom';

export default function MiPerfil() {
  const {  token, name, mail } = useContext(UserContext);
  return (
    <>
    <section className='miPerfil'>
      <div className='cardProfile'>
    <div className='titleProfile'>Mi Perfil</div>
    <p className='textProfile'> Hola! <b>{name}</b>, cualquier información de tu pedido llegará al siguiente correo electrónico: <b>{mail}</b></p>
    <p>Nota: Para hacer mas rapida la devolucion de tu dinero en caso de problemas con el estock o que no te agrade el producto que recibiste cada producto se cancela por separado.</p>
    </div>
    </section>
  <Link to={"/Showroom"}> Seguir comprando </Link>
    </>
  )
}
