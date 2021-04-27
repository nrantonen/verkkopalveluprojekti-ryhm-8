import React from 'react';
import {Link} from 'react-router-dom';

export default function Ostoskori({cart}) {
  return (
    <div id="ostoskori" className="box ZIndex">
      <p><b>Ostoskori</b></p>
      <hr />
      <ul>
        {cart.map(product => (
          <Korituote tuotenro={product.tuotenro} nimi={product.tuotenimi} hinta={product.hinta} kpl={product.amount}/>
        ))}
        
      </ul>
      <p><b>Summa: {cartSum()} €</b></p>
      <Link to='/Kassa'>Kassalle</Link>
    </div>
  )

  function cartSum() {
    let sum = 0;
    for(let i = 0; i < cart.length; i++) {
      sum += parseFloat(cart[i].hinta * cart[i].amount);
    }
    return sum;
  }
}

 function Korituote(props) {
  return (
    <li>
      <a href="#">{props.nimi}</a>
      {props.kpl} kpl x 
      {props.hinta} €
    </li>
  )
}