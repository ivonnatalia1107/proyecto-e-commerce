import React from 'react';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './showroom.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Showroom() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const resp = await axios.get('https://backend1-xdtg.onrender.com/v1/product')
    console.log(resp.data)
    setProducts(resp.data.detail)
  }
  useEffect(() => {
    getProducts()
  }, [])



  return (

    <>
    <div className='showRoomDisplay'>
      {
        products.map(product => (

          <div  key={product._id} className="d-flex justify-content-around">
            <Card className='cardStyle' style={{ width: '18rem' }}>
              <Card.Img className="cardImg" variant="top"  src={product.img}/>
              <Card.Body className='showRoomCards'>
                <Card.Title >{product.name}</Card.Title>
                <Card.Text className='cardDescription'>{product.description} </Card.Text>
                <Card.Text className='cardDescription'>{product.country} </Card.Text>
                <Card.Text className='cardDescription'>{product.amount} </Card.Text>
                <Button  as ={Link} to={`/product/${product._id}`} variant="info">Detalles</Button>
              </Card.Body>
            </Card>
          </div>

        ))
      }

</div>
    </>
  );
}
