import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

export default function Rekisteri({url}) {
    
  return (
    <form  action={url + "register/rekisteri.php"} method="POST">

      
    <div className="row col-12">
      <div id="r1" className="col-6">
        <h3>Luo käyttäjä</h3>
        <br/>
        <p>Etunimi</p>
        <input name="etunimi" type="text" className="form-control" placeholder="etunimi" aria-label="First name" required/>
      </div>
    </div>
    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>Sukunimi</p>
        <input name="sukunimi" type="text" className="form-control" placeholder="sukunimi" aria-label="Last name" required/>
      </div>
    </div>

    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>Sähköposti</p>
        <input name="email"type="email" className="form-control" placeholder="sähköposti" aria-label="email" required/>
      </div>
    </div>

    <div className="row col-12">
      <div id="r1" className="col-6">
        <p>lähiosoite</p>
        <input name="lahiosoite" type="text" className="form-control" placeholder="lähiosoite" aria-label="First name" required/>
      </div>
      </div>
    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>postinro</p>
        <input name="postinro" type="number" min="0" maxLength="6" minLength="6" className="form-control" placeholder="postinumero" aria-label="Last name" required/>
      </div>
    </div>

      <div className="row col-12">
        <div id="r1"  className="col-6">
        <p>Salasana</p>
      <input name="salasana"  type="password" className="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password" required/>
       </div>
      </div>

       <div className="row col-12">
       <div id="r1"  className="col-6">
      <p>Kirjoita salasana uudelleen.</p>
      <input name="salasana2"  type="password" className="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password2" required />
      </div>
      </div>
    
    <div >
    <button href="#" id="rekisteroidy" type="submit" className="btn btn-secondary">rekisteröidy</button>
    </div>
</form>
  );
}
