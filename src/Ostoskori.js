import React from 'react';
import {Link} from 'react-router-dom';

export default function Ostoskori({cart}) {
  return (
    <div id="ostoskori" className="box ZIndex">
      <p><b>Ostoskori</b></p>
      <hr />
      <ul>
        {cart.map(product => (
          <Korituote nimi={product.tuotenimi} hinta={product.hinta} kpl={product.amount}/>
        ))}
        
      </ul>
      <p><b>Summa: </b></p>
      <Link to='/Kassa'>Kassalle</Link>
    </div>
  )
}

export function Korituote(props) {
  return (
    <li>
      <a href="#">{props.nimi}</a>
      {props.kpl} kpl x 
      {props.hinta} €
    </li>
  )
}