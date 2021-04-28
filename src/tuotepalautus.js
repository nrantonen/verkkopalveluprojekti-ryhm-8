import React from 'react';
import './App.css';


export default function Tuotepalautus({url}) {
    return (
      <form >
        <div>
            <h3>Palautus -ja takuulomake</h3>
            <hr/>
            <p></p>
            <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">tuote palautus </label>
            <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">takuukorjaus </label> 
                <br/>
               <p>Valitse hyvitys ehto.</p>
            <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">Haluaan uuden tuotteen </label>
            <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">Haluan hyviktykseni tililleni</label>
            <input name="etunimi" type="text" minLength="34" maxLength="34" className="form-control" placeholder="Iban-tilinumero" aria-label="Iban-tilinumero" required/>
                <br/>
                <p>Vian kuvaus/palautuksen syy:</p>
                <textarea className="form-control" placeholder="" id="floatingTextarea2" maxLength="512" required></textarea>
                <br/>
                <input class="form-check-input" type="checkbox"  id="flexCheckDefault" required/>
            <label class="form-check-label" for="flexCheckDefault">Hyväksyn <a href="#">sopimusehdot</a>.</label>
            <br/>
            <button href="#" id="" type="submit" className="btn btn-secondary">lähetä</button>
        </div>
      </form>
    );
  }