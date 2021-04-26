import React from 'react';
import {Korituote} from './Ostoskori';
import {useState,useEffect} from 'react';


export default function Kassa({url, cart, asiakas}) {
    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [email, setEmail] = useState('');
    const [lahiosoite, setLahiosoite] = useState('');
    const [postinro, setPostinro] = useState('');

    return (
        <div>
            <h5>Ostoskori</h5>
            
        {cart.map(product => (
          <Korituote key={product.tuotenro} nimi={product.tuotenimi} hinta={product.hinta} kpl={product.amount}/>
        ))}
        
        {asiakas != null ?  (
                    <>
                    <h5>Kirjautuneena {asiakas.etunimi} {asiakas.sukunimi}</h5>
                    <form className="row">
                        <div className="mb-3">
                            <label className="form-label">Sähköpostiosoite</label>
                            <input type="email" className="form-control" defaultValue={asiakas.email}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Etunimi</label>
                            <input type="text" defaultValue={asiakas.etunimi} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sukunimi</label>
                            <input type="text" defaultValue={asiakas.sukunimi} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Osoite</label>
                            <input type="text" defaultValue={asiakas.lahiosoite} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Postinumero</label>
                            <input type="text" defaultValue={asiakas.postinro} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Tee tilaus</button>
                        </form>
                    </>
                ) : (
                    <>
                    <h5>Täytä toimitustiedot</h5>
                    <p>Et ole kirjautunut sisään.</p>
                    <form className="row">
                        <div className="mb-3">
                            <label className="form-label">Sähköpostiosoite</label>
                            <input type="email" className="form-control" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Etunimi</label>
                            <input type="text" value={etunimi} className="form-control"
                            onChange={e => setEtunimi(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sukunimi</label>
                            <input type="text" value={sukunimi} className="form-control"
                            onChange={e => setSukunimi(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Osoite</label>
                            <input type="text" value={lahiosoite} className="form-control"
                            onChange={e => setLahiosoite(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Postinumero</label>
                            <input type="text" value={postinro} className="form-control"
                            onChange={e => setPostinro(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Tee tilaus</button>
                        </form>
                </>
                )} 
      
        </div>
    )
}
