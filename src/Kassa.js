import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';

export default function Kassa({url, cart, setCart, removeFromCart, updateAmount, asiakas}) {
    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [email, setEmail] = useState('');
    const [lahiosoite, setLahiosoite] = useState('');
    const [postinro, setPostinro] = useState('');

    function cartSum() {
        let sum = 0;
        for(let i = 0; i < cart.length; i++) {
          sum += parseFloat(cart[i].hinta * cart[i].amount);
        }
        return sum;
      }

      //onko tilausprosessi valmis:
      const [finished, setFinished] = useState(false);

      function order(e) {
        e.preventDefault();
        fetch(url + 'order/newOrder.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                etunimi: etunimi,
                sukunimi: sukunimi,
                email: email,
                lahiosoite: lahiosoite,
                postinro: postinro,
                cart: cart,
                user: asiakas
            })
        })
            .then (res => {
                return res.json();
            })
            .then (
                (res) => {
                    console.log(res);
                    // tähän ostoskorin tyhjennys
                    setFinished(true);
                }, (error) => {
                    alert(error);
                }
            )
        
      }

    // kun tilausta ei ole vielä käsitelty loppuun
      if (finished ===  false) {
          return (
              <section className="container">
            <h3>Ostoskori</h3>
            {cart.length > 0 ? ( 
            <> 
            <table className="row col-12">
                    <tbody className="row col-12">  
            {cart.map((product,index) => {
                return(
                    <tr className="row" key={product.tuotenro}>
                        <td className="col-3">{product.tuotenimi}</td>
                        <td className="col-3">
                            <input type="number" 
                            step="1" min="1" 
                            onChange={e => changeAmount(e, product, index)}
                            value={product.amount}/>
                        </td>
                        <td className="col-3">{product.hinta} €</td>
                        <td className="col-3">
                            <a id="poista_tuote" onClick={() => removeFromCart(product)}><i class="fa fa-trash" aria-hidden="true"></i></a>
                        </td>
                    </tr>
                    )})}
                    <tr className="row">
                        <td className="col-6"></td>
                        <td className="col"><b>{cartSum()} €</b></td>
                    </tr>
                </tbody>
            </table>
            {/* Tilauslomake renderöidään, kun kori ei ole tyhjä */}
            
            {/* Kun asiakas on kirjautuneena, asiakkaan tiedot tulostuvat automaattisesti */}
            {asiakas != null ?  (
                <div className="row">
                <h4 className="col-12"><i class="fa fa-user-circle" aria-hidden="true"></i>  Olet kirjautunut sisään.</h4>
                
                <ul className="col-6" id="kirj_as_tilaustiedot">
                    <li><b>Tilaustiedot:</b></li>
                    <li>Asiakasnumero {asiakas.asnro}</li>
                    <li>Tilaaja: {asiakas.etunimi} {asiakas.sukunimi}</li>
                    <li>Osoite: {asiakas.lahiosoite} {asiakas.postinro}</li>
                    <li>Sähköposti: {asiakas.email}</li>
                </ul>
                <a className="col-3" href="#">Eivätkö tiedot pidä paikkaansa? Voit muokata tilitietojasi <b>asiakassivulla</b>.</a>
                <br/><button onClick={order} className="btn btn-success">Vahvista tilaus</button>
               </div>
                ) : (
                    // Tekstikentät ovat tyhjiä, kun asiakas ei ole kirjautunut sisään
                    <> 
                    <h4>Täytä tilaustiedot</h4>
                    <p>Et ole kirjautunut sisään.</p>
                    <form className="row" onSubmit={order}>
                        <div className="mb-3">
                            <label className="form-label">Sähköpostiosoite</label>
                            <input type="email" className="form-control"
                            onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Etunimi</label>
                            <input type="text" className="form-control"
                            onChange={e => setEtunimi(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sukunimi</label>
                            <input type="text" className="form-control"
                            onChange={e => setSukunimi(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Osoite</label>
                            <input type="text" className="form-control"
                            onChange={e => setLahiosoite(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Postinumero</label>
                            <input type="text" className="form-control"
                            onChange={e => setPostinro(e.target.value)} required/>
                        </div>
                        <button type="submit" className="btn btn-success">Vahvista tilaus</button>
                        </form>
                </>
                )} 
      
            </> ) :( // kun kori on tyhjä
                <p>Et ole lisännyt tuotteita ostoskoriin.</p>
            )
            }
       
        </section>
          )
      } else {
        // kun tilaus on käsitelty ->
        return (
            <>
        <h2>Tilaus hyväksytty!</h2>
        <h4><i class="fa fa-handshake-o" ></i> Kiitos, kun asioit meillä!</h4>
        </>
    )   
    }
    
    function changeAmount(e, product, index) {
        updateAmount(e.target.value,product);
    }

}
