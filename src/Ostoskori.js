import React from 'react';
import {Link} from 'react-router-dom';

export default function Ostoskori({cart, cartSum}) {
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
      {cart.length > 0 ?  (
                    <>
                    <Link className="btn btn-success" to='/Kassa'>Kassalle</Link>
                    </>
                ) : (
                      <b>Ostoskorisi on tyhjä.</b>
                )}
      
    </div>
  )

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