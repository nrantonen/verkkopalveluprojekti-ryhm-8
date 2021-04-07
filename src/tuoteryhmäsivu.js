import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

export default function Tuoteryhma({url,category}) {
    const [products, setProducts] = useState([]);

    // Hakee tuotteet
    useEffect(async() => {
        try {
            //alert(category?.trnro);
            const response = await fetch(url + 'products/getproducts.php/' + category?.trnro);
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
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="tuotediv col-2" key={product.tuotenro}>
                        <img src={product.image} width="200" alt=""></img>
                        <h3>{product.tuotenimi}</h3>
                        <p>{product.kuvaus}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}