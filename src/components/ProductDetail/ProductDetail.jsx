import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detail.css'

export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const resp = await axios.get('https://backend-w1wu.onrender.com/v1/product');
                const productData = resp.data.detail;


                const selectedProduct = productData.find(product => product._id === id);

                setProduct(selectedProduct);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, [id]);

    return (
        <>
        <section className='detailRoom'>
            <div className='detailCard'>
                {product && (
                    <div key={product._id}>
                        <h1 className='title'>{product.name}</h1>
                        <img className='imgDetail' src={product.img} alt={product.name} />
                        <div className='description'>
                        <p>{product.description}</p>
                        <p>{product.country}</p>
                        <p>{product.amount}</p>
                        </div>
                    </div>
                )}
            </div>
            </section>
        </>
    );
};