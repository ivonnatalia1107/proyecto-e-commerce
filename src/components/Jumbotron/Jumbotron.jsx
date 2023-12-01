import Carousel from 'react-bootstrap/Carousel';
import "./jumbotron.css"
import { Link } from 'react-router-dom';


export default function Jumbotron() {


  return (
    <>
      <Carousel className='carrousel'>

        <Carousel.Item className='slice'>

          <img className='img' src="https://res.cloudinary.com/duybxe2k2/image/upload/v1696185139/Proyecto%205%20UDD%20Verduleria%20e-commerce/jumbotron_bvvvww.jpg" />

          <Carousel.Caption className='text'>
            <div className='text_A' >
              <h1>Sobre nosotros</h1>
              <p>Somos una tienda de delivery de frutas y verduras que funciona desde el 2020 como respuesta a las nuevas necesidades del mercado.</p>
              <p>Si no tienes tiempo para ir a comprar, tranquil@! Nosotros llevamos los mejores productos hasta tu hogar. </p>
              <p>Ingresa o Registrate para comenzar tu compra</p>
              <Link className='jumbotronLink' to={"/login"}>Ingresa/Registrate</Link>
            </div>
           

          </Carousel.Caption>

        </Carousel.Item >

        <Carousel.Item className='slice'>
          <img className='img' src="https://res.cloudinary.com/duybxe2k2/image/upload/v1696185744/Proyecto%205%20UDD%20Verduleria%20e-commerce/jumbotron2_gltd3x.jpg" />

          <Carousel.Caption className='text'>
          <div className='text_A' >
            <h1>Horario de entrega</h1>
            <p>Porque sabemos esos agotadores turnos y que al salir del trabajo literal ya esta todo cerrado, nosotros repartimos hasta las 23:00 horas!
            </p>
            <h2> Horario de reparto:</h2>
            <ul>
              <li>
                Lunes a Viernes 18:00 a 23:00 hrs.
              </li>
              <li>
                Sabado y Domingo 12:00 a 16:00 hrs.
              </li>
            </ul>
            </div>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>

    </>
  )
}
