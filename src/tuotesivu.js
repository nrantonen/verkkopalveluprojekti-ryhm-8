import React from 'react';

function Tuotesivu(props) {
  return (
    <div className="container-fluid">
      <h4>{props.nimi}</h4>
      <div className="row">
        <div className="col">
          <img src="/Nitoja.png" width="300" alt="" />
        </div>
        <div className="col">
          <label for="kpl">Kappalemäärä:</label>
          <input id="tilauskpl" type="number" /><br/>
          <button>Lisää ostoskoriin</button>
        </div>
      </div>
      <div className="row">
        <p className="col" id="tuotekuvaus">{props.kuvaus}</p>
        <p className="col">Tekniset tiedot?</p>
      </div>
      <div className="row">
        <b>Tuotteen arvostelut:</b>
      </div>
      
    </div>
  );
}

export default Tuotesivu;