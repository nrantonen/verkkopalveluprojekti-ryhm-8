import React, {useState, useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import './App.css';

export default function Kaikkitilaukset({url,yllapito}) {
    const [tilaukset, setTilaukset] = useState([]);

    useEffect(() => {
        async function tilaukset() {
          try {
              const response = await fetch(url + 'asiakas/kaikkitilaukset.php');
              const json = await response.json();
              if (response.ok) {
                  setTilaukset(json);
              } else {
                  alert(json.error);
              }
          } catch (error) {
              alert(error);
          }
        } tilaukset();
      }, [])

      if(yllapito === null) {
        return <Redirect to="/Yllapito" />
    }

    return (
        <section>
          <div>
          <Link to="/Yll_etusivu">Palaa ylläpitäjän etusivulle</Link>
          </div>
          <h3>Kaikki tilaukset</h3>
        <div className="p-md-3">
            <table className="table table-striped">
                <thead className="otsikot">
                    <tr className="row">
                        <th className="col-3 col-lg-1">Asiakasnro</th>
                        <th className="col-3 col-lg-2">Tilausnro</th>
                        <th className="col-3 col-lg-2">Tuotenro ja tuote</th>
                        <th className="col-3 col-lg-1">Määrä</th>
                        <th className="col-3 col-lg-1">Tila</th>
                        <th className="col-3 col-lg-1">Tilauspvm</th>
                    </tr>
                    </thead> 
                    <tbody>
                    {tilaukset.map(tilaus => (   
                    <tr key={tilaus.tilausnro} className="row">
                    <td className="col-3 col-md-3 col-lg-1"><b>{tilaus.asnro}</b></td>
                    <td className="col-3 col-md-3 col-lg-2"><b>{tilaus.tilausnro}</b></td>
                    <td className="col-3 col-md-3 col-lg-2">{tilaus.tuotenro} - {tilaus.tuotenimi}</td>
                    <td className="col-3 col-md-3 col-lg-1">{tilaus.kpl}</td>
                    <td className="col-3 col-md-3 col-lg-1"><b>{tilaus.tila}</b></td>
                    <td className="col-3 col-md-3 col-lg-1"><b>{tilaus.tilauspvm}</b></td>

                    </tr>))}
                </tbody>
            </table>
        </div>
     
    </section>
    )
}
