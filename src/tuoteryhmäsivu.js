import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

export default function Tuoteryhma({url,category}) {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getproducts.php/' + category?.id);
            const json = await response.json();
            if (response.ok) {
                setProducts(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [category])

    return (
        <div>
            {products.map(product => (
                <div key={product.tuotenro}>
                    <p>{product.tuotenimi}</p>
                </div>
            ))}
        </div>
    );
}