import React from 'react';
import './App.css';

export default function rekisteri() {
  return (
    <section  className="rekisterilomake">
     
    <div class="row col-12">
      <div id="r1" class="col-6">
        <p>Etunimi</p>
        <input  type="text" class="form-control" placeholder="etunimi" aria-label="First name"/>
      </div>
      <div id="r1"  class="col-6">
        <p>Sukunimi</p>
        <input  type="text" class="form-control" placeholder="sukunimi" aria-label="Last name"/>
      </div>
    </div>
    <div class="row col-12">
      <div id="r1"  class="col-6">
        <p>Sähköposti</p>
        <input type="text" class="form-control" placeholder="sähköposti" aria-label="email"/>
      </div>
    </div>
      <div class="row col-12">
        <div id="r1"  class="col-6">
        <p>Salasana</p>
      <input type="text" class="form-control" placeholder="salasana" aria-label="password"/>
       </div>
       <div id="r1"  class="col-6">
      <p>Kirjoita salasana uudelleen.</p>
      <input type="text" class="form-control" placeholder="salasana" aria-label="password2"/>
      </div>
    </div>
    <div >
    <button id="rekisteroidy" type="button" class="btn btn-secondary">rekisteröidy</button>
    </div>
</section>
  );
}
