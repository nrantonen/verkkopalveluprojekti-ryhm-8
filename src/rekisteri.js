import React from 'react';
import './App.css';
const URL = 'http://localhost/verkkopalveluprojekti/';

export default function rekisteri() {
  return (
    <form  action={URL + "register/rekisteri.php"} method="POST">
      
    <div class="row col-12">
      <div id="r1" class="col-6">
        <p>Etunimi</p>
        <input name="etunimi" type="text" class="form-control" placeholder="etunimi" aria-label="First name" required/>
      </div>
      <div id="r1"  class="col-6">
        <p>Sukunimi</p>
        <input name="sukunimi" type="text" class="form-control" placeholder="sukunimi" aria-label="Last name" required/>
      </div>
    </div>
    <div class="row col-12">
      <div id="r1"  class="col-6">
        <p>Sähköposti</p>
        <input name="email"type="email" class="form-control" placeholder="sähköposti" aria-label="email" required/>
      </div>
    </div>

    <div class="row col-12">
      <div id="r1" class="col-6">
        <p>lähiosoite</p>
        <input name="lahiosoite" type="text" class="form-control" placeholder="lähiosoite" aria-label="First name" required/>
      </div>
      <div id="r1"  class="col-6">
        <p>postinro</p>
        <input name="postinro" type="number" maxLength="6" minLength="6" class="form-control" placeholder="postinumero" aria-label="Last name" required/>
      </div>
    </div>

      <div class="row col-12">
        <div id="r1"  class="col-6">
        <p>Salasana</p>
      <input name="salasana" type="password" class="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password" required/>
       </div>
       <div id="r1"  class="col-6">
      <p>Kirjoita salasana uudelleen.</p>
      <input name="salasana2" type="password" class="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password2" />
      </div>
    </div>
    <div >
    <button id="rekisteroidy" type="submit" class="btn btn-secondary">rekisteröidy</button>
    </div>
</form>
  );
}
