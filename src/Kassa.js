import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';

// Seuraavaksi tilaus, kun asiakas on kirjautunut sisään! 
/* Minne laitetaan tämä? Reactilla tulee raja vastaan: Too many re-renders
if (asiakas != null) {
    setEtunimi(asiakas.etunimi);
    setSukunimi(asiakas.sukunimi);
    setEmail(asiakas.email);
    setLahiosoite(asiakas.lahiosoite);
    setPostinro(asiakas.postinro);
} */

export default function Kassa({url, cart, removeFromCart, asiakas}) {
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
        if (asiakas != null) {
            setEtunimi(asiakas.etunimi);
            setSukunimi(asiakas.sukunimi);
            setEmail(asiakas.email);
            setLahiosoite(asiakas.lahiosoite);
            setPostinro(asiakas.postinro);
        }
        fetch(url + 'order/newOrder.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                etunimi: etunimi,
                sukunimi: sukunimi,
                email: email,
                lahiosoite: lahiosoite,
                postinro: postinro,
                cart: cart
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
            <h5>Ostoskori</h5>
            {cart.length > 0 ? ( 
            <> 
            <table className="row col-12">
                    <tbody className="row col-12">  
            {cart.map((product) => {
                return(
                    <tr className="row" key={product.tuotenro}>
                        <td className="col-3">{product.tuotenimi}</td>
                        <td className="col-3">{product.amount} x </td>
                        <td className="col-3">{product.hinta} €</td>
                        <td className="col-3"><a onClick={() => removeFromCart(product)}>Poista</a></td>
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
                <h5 className="col-12">Olet kirjautunut sisään.</h5>
                
                <ul className="col-6" id="kirj_as_tilaustiedot">
                    <li><b>Tilaustiedot:</b></li>
                    <li>Asiakasnumero {asiakas.asnro}</li>
                    <li>Tilaaja: {asiakas.etunimi} {asiakas.sukunimi}</li>
                    <li>Osoite: {asiakas.lahiosoite} {asiakas.postinro}</li>
                    <li>Sähköposti: {asiakas.email}</li>
                </ul>
                <a className="col-3" href="#">Eivätkö tiedot pidä paikkaansa? Voit muokata tilitietojasi <b>asiakassivulla</b>.</a>
                <br/><button onClick={order} className="btn btn-primary">Vahvista tilaus</button>
               </div>
                ) : (
                    // Tekstikentät ovat tyhjiä, kun asiakas ei ole kirjautunut sisään
                    <> 
                    <h5>Täytä tilaustiedot</h5>
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
                        <button type="submit" className="btn btn-primary">Vahvista tilaus</button>
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
        <h2>Kiitos tilauksestasi!</h2>
    )   
      }
    
}
