import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Kuvapalkki({url}) {
    const [products, setProducts] = useState([]);
  
    useEffect(async() => {
      try {
        const response = await fetch(url + 'products/getproducts.php/3');
        const json = await response.json();
        if (response.ok) {
          setProducts(json);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }, []);
  
      return (
        <div id="tuotepalkki" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {products.map((product, i) => (
              
              <div key={i} className={'carousel-item'+(i === 0 ? ' active' : '')}>
                <Link to={{
                  pathname: '/tuotesivu/'+product.tuotenro
                }}>
                  <img src={url + 'img/'+product.image} className="d-block mx-auto" width="200" alt=""/>
                  <div className="carousel-caption">
                    <h4>{product.tuotenimi}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#tuotepalkki" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Edellinen</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#tuotepalkki" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Seuraava</span>
          </button>
        </div>
      );
    }