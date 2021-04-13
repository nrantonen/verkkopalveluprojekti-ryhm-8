import React from 'react';

export default function Ostoskori() {
  return (
    <div id="ostoskori" className="box ZIndex">
      <p><b>Ostoskori</b></p>
      <hr />
      <ul>
        {/* Placeholder */}
        <Korituote />
      </ul>
      <p><b>Summa: 999€</b></p>
      <button>Muokkaa</button>
    </div>
  )
}

function Korituote(props) {
  return (
    <li>
      <a href="#">Nitoja</a>
      9 kpl x 
      9 €
    </li>
  )
}