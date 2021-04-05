import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

export default function Tuoteryhma() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            const response = await fetch(url + 'getproducts.php' + category?.id);
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
                <div key={product.id}>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    );
}