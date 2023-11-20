import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

export const ProductDetail = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const resp = await axios.get('https://backend-w1wu.onrender.com/v1/product')
        console.log(resp.data)
        setProducts(resp.data.detail)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <h2>Product Detail</h2>
            <p>Product ID: {id}</p>
        </div>
    );
};

