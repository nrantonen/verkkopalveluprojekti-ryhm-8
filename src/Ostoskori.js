import React from 'react';

export default function Ostoskori() {
  return (
    <div className="box ZIndex">
      <p><b>Ostoskori</b></p>
      <hr />
      <ul id="ostoskori">
        <li>
          {/* Placeholder */}
          <Korituote />
        </li>
      </ul>
      <p><b>Summa: 999€</b></p>
      <button>Muokkaa</button>
    </div>
  )
}

function Korituote(props) {
  return (
    <>
      <td><a href="#">Nitoja</a></td>
      <td>2 kpl</td>
      <td>Hinta: 9€</td>
    </>
  )
}