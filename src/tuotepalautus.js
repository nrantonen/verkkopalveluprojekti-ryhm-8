import React from 'react';
import './App.css';


export default function Tuotepalautus({url}) {
    return (
      <form >
        <div>
          <div className="row col 6">
            <h3>Palautus -ja takuulomake</h3>
            <hr/>
          </div>
          <div className="col-6" id="r1" >
            <h4>Palautuksen syy</h4>
            <input  className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">tuote palautus </label>
            <br/>
            <input className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">takuukorjaus </label> 
          </div>

          <div className="col-6" id="r1">
               <h4>Valitse hyvitys ehto.</h4>
            <input  className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">Haluaan uuden tuotteen </label>
            <br/>
            <input className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">Haluan hyviktykseni tililleni</label>
            <input  name="iban" type="text" minLength="18" maxLength="34" className="form-control" placeholder="Iban-tilinumero" aria-label="Iban-tilinumero" />
          </div>

          <div className="row col-6" id="r1">
                <p >etunimi</p>
                <input   name="etunimi" type="text" className="form-control" placeholder="etunimi" aria-label="Last name" required/>
               
          </div>

          <div className="row col-6" id="r1">
                <p >sukunimi</p>
                <input   name="sukunimi" type="text" className="form-control" placeholder="sukunimi" aria-label="Last name" required/>
          </div>

          <div className="row col-6"id="r1" >
                <p >sähköposti</p>
                <input    name="sposti" type="text" className="form-control" placeholder="sähköposti" aria-label="Last name" required/>
          </div>

          <div className="row col-6"id="r1" >
                <p>Vian kuvaus/palautuksen syy:</p>
                <textarea className="form-control" placeholder="" id="floatingTextarea2" maxLength="512" required></textarea>
          </div>
          <div>
                <input className="form-check-input" type="checkbox"  id="flexCheckDefault" required/>
            <label className="form-check-label" for="flexCheckDefault">Hyväksyn <a href="#">sopimusehdot</a>.</label>
            <br/>
            <button href="#" id="" type="submit" className="btn btn-secondary">lähetä</button>
          </div>
        </div>
      </form>
    );
  }