import { Header } from '../component/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsGrid } from './Products-Grid';

import './HomePage.css';


export function HomePage({cartItems}) {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
        });
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Header cartItems={cartItems}/>

            <div className="home-page">
               <ProductsGrid products={products} />
            </div>
        </>
    )
}
