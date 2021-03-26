import React from 'react';

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
    return (
      <div id="tuotepalkki" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Nitoja.png" className="d-block mx-auto" width="200" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/pöytälamppu.png" className="d-block mx-auto" width="200" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/lehtikotelo.png" className="d-block mx-auto" width="200" alt="..."/>
          </div>
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