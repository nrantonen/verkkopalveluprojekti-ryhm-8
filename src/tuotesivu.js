import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export default function Tuotesivu({url, addToCart}) {
  const [product, setProduct] = useState({});

  let location = useLocation();
  let productId = location.pathname.split('/');

  // Hae tuote
  useEffect(async() => {
    try {
      const response = await fetch(url+'products/getProduct.php/'+productId[2]);
      const json = await response.json();
      if (response.ok) {
        //console.log(json);
        setProduct(json[0]);
      } else {
        alert(json.error);
      }
    } catch (error) {
      alert(error);
    }
  }, []);
  

  return (
    <div className="container-fluid">
      <h4>{product.tuotenimi}</h4>
      <div className="row">
        <div className="col">
          <img src={url + 'img/'+product.image} width="300" alt="" />
        </div>
        <div className="col">
          <h5>{product.hinta} €</h5>
          <label>Kappalemäärä:</label>
          <input id="tilauskpl" type="number" /><br/>
          <button onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
      </div>
      <div className="row">
        <p id="tuotekuvaus">{product.kuvaus}</p>
      </div>
      <div className="row">
        <b>Tuotteen arvostelut:</b>
      </div>
      
    </div>
  );
}