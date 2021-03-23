import React from 'react';

function Tuotesivu(props) {
  return (
    <div>
      <h4>{props.nimi}</h4>
      <div>
        <img src="/Nitoja.png" width="300" alt="" />
      </div>
      <div id="tuotekuvaus">
        <p>{props.kuvaus}</p>
      </div>
      
    </div>
  );
}

export default Tuotesivu;