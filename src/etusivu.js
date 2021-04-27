import React from 'react';
import Kuvapalkki from './Kuvapalkki';

export default function etusivu({url}) {
    return (
        <article>
            <Kuvapalkki url={url}/>
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