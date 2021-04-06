import React, { useState, useEffect } from 'react';

const URL = 'http://localhost/verkkopalveluprojekti/';

export default function etusivu() {
    return (
        <article>
            <Kuvapalkki/>
            <section id="kuvaus">
            <h3>Asiaa meistä</h3>
            <p>Verkkokauppamme tarjoaa suuren valikoiman erilaisia toimistotarvikkeita
                tarpeisiinne. Ostosten tekeminen on helppoa ja nopeaa sekä vaivatonta. Toivomme, että
                löydätte tarvitsemanne.
            </p>
            </section>
        </article>
    );
}

function Kuvapalkki() {
  const [products, setProducts] = useState([]);

  useEffect(async() => {
    try {
      const response = await fetch(URL + 'products/getproducts.php/3');
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
            
            <div className={'carousel-item'+(i === 0 ? ' active' : '')}>
              <img src={product.image} className="d-block mx-auto" width="200" alt=""/>
              <div className="carousel-caption">
                <h4>{product.tuotenimi}</h4>
              </div>
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