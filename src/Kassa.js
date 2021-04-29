import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';

export default function Kassa({url, cart, removeFromCart, emptyCart, cartSum, updateAmount, asiakas}) {
    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [email, setEmail] = useState('');
    const [lahiosoite, setLahiosoite] = useState('');
    const [postinro, setPostinro] = useState('');
    const [asnro, setAsnro] = useState('');

    // tilauksen jälkeen näytetään yhteenveto, mitä asiakas tilasi
    const [kori, setKori] = useState('');
    const [summa, setSumma] = useState('');

      //onko tilausprosessi valmis:
      const [finished, setFinished] = useState(false);

      function order(e) {
        e.preventDefault();
        if (asiakas != null) {
            setEtunimi(asiakas.etunimi);
            setSukunimi(asiakas.sukunimi);
            setLahiosoite(asiakas.lahiosoite);
            setPostinro(asiakas.postinro);
            setEmail(asiakas.email);
        }
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
                    setAsnro(res.asnro);
                    // ennen korin tyhjennystä korin sisältö annetaan toisille muuttujille,
                    // joiden avulla lopulta näytetään yhteenveto tehdystä tilauksesta 
                    // --> mitä tilattiin, paljonko maksoi
                    setKori(cart);
                    setSumma(cartSum());
                    // tilaus on käsitelty -> ostoskori tyhjennetään
                    emptyCart();
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
            <h1>Ostoskori</h1>
            {cart.length > 0 ? ( 
            <> 
            <table className="row kassalista col-12">
                <thead>  
                    <tr className="row col-12 tilaus_otsikot invisibleborder">
                        <th className="col-3">Tuote</th>
                        <th className="col-3">Kpl</th>
                        <th className="col-3">Hinta</th>
                        <th className="col-3"></th>
                    </tr>
                </thead>
            <tbody>
            {cart.map((product,index) => {
                return(
                    <tr className="row" key={product.tuotenro}>
                        <td className="col-3">{product.tuotenimi}</td>
                        <td className="col-3">
                            <input type="number" id="kplmäärä"
                            step="1" min="1" 
                            onChange={e => changeAmount(e, product, index)}
                            value={product.amount}/> <span id="tuote_x"> x </span>
                        </td>
                        <td className="col-3">{product.hinta} €</td>
                        <td className="col-3">
                            <a id="poista_tuote" onClick={() => removeFromCart(product)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                        </td>
                    </tr>
                    )})}
                    <tr className="row invisibleborder">
                        <td className="col-6 text-end kplsumma">Summa: </td>
                        <td className="col">{cartSum()} €</td>
                    </tr>
                </tbody>
            </table>
            {/* Tilauslomake renderöidään, kun kori ei ole tyhjä */}
            
            {/* Kun asiakas on kirjautuneena, asiakkaan tiedot tulostuvat automaattisesti */}
            {asiakas != null ?  (
                <div className="row">
                <h4 className="col-12"><i className="fa fa-user-circle" aria-hidden="true"></i>  Olet kirjautunut sisään.</h4>
                
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
                    <h4 className="mt-3">Täytä tilaustiedot</h4>
                    <p>Et ole kirjautunut sisään.</p>
                    <form className="row" onSubmit={order}>
                        <div className="mb-3">
                            <label className="form-label">Sähköpostiosoite</label>
                            <input type="email" className="form-control"
                            onChange={e => setEmail(e.target.value)} required/>
                            <small id="emailHelp" className="form-text text-muted">Lähetämme laskun ilmoittamaasi sähköpostiin.</small>
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
                        <button type="submit" className="btn btn-success"><b>{cartSum()} €</b>&nbsp;- Vahvista tilaus</button>
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
            <h2><b>Kiitos!</b> Tilauksesi on vastaanotettu! <i className="fa fa-handshake-o" ></i></h2>
            <h4>Asiakasnumerosi on <b>{asnro}.</b><br/>Lähetämme laskun sähköpostiisi, kun tilauksesi on käsitelty.</h4>

            <ul className="col-6" id="tilaus_yhteenveto">
                <li><h5>Tilauksen tiedot:</h5></li>
                <li>Tilaaja: {etunimi} {sukunimi}</li>
                <li>Toimitusosoite: {lahiosoite} {postinro}</li>
                <li>Sähköposti: {email}</li>
            </ul>


            {kori.map((tuote,index) => {
                    return(
                        <tr className="row" key={tuote.tuotenro}>
                            <td className="col-3">{tuote.tuotenimi}</td>
                            <td className="col-3">{tuote.amount}</td>
                            <td className="col-3">{tuote.hinta} €</td>
                            <td>{summa}</td>
                        </tr>
                        )})}
        </>
    )   
    }
    
    function changeAmount(e, product, index) {
        updateAmount(e.target.value,product);
    }

}
