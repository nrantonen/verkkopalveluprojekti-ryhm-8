import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Tuoteryhma({url,category}) {
    const [products, setProducts] = useState([]);

    // Hakee tuotteet
    useEffect(() => {
        async function getproducts() {
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
    }
    getproducts();
    }, [category])

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="tuotediv col-xl-2 col-sm-4 col-6 bg-light border" key={product.tuotenro}>
                        <Link className="linkki"
                                    to={{
                                        pathname: '/tuotesivu/' + product.tuotenro,
                                        state: {
                                            tuotenro: product.tuotenro,
                                            tuotenimi: product.tuotenimi
                                        }
                                    }}>
                            <img src={url + 'img/' + product.image} width="200" alt=""></img>
                            <h3>{product.tuotenimi}</h3>
                            <p>{product.kuvaus}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}