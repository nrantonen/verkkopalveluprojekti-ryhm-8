import React, {useState, useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import './App.css';

export default function Omattilaukset({url,asiakas}) {
    const [tilaukset, setTilaukset] = useState([]);

    useEffect(() => {
        async function tilaukset() {
          try {
              const response = await fetch(url + 'asiakas/asiakkaantilaukset.php/' + asiakas?.asnro);
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

      if(asiakas === null) {
        return <Redirect to="/" />
    }

    return (
        <section>
          <div>
          <Link to="/Asiakas">Palaa omalle sivulle</Link>
          </div>
          <h3>Kaikki tilaukset</h3>
        <div className="p-md-3">
            <table className="table table-striped">
                <thead className="otsikot">
                    <tr className="row">
                        <th className="col-3 col-md-3 col-lg-1">Tilausnro</th>
                        <th className="col-3 col-md-3 col-lg-4">Tuotenimi</th>
                        <th className="col-3 col-md-3 col-lg-1">Määrä</th>

                    </tr>
                    </thead> 
                    <tbody>
                    {tilaukset.map(tilaus => (
                    <tr key={tilaus.tilausnro} className="row">
                    <td className="col-3 col-md-3 col-lg-1"><b>{tilaus.tilausnro}</b></td>
                    <td className="col-3 col-md-3 col-lg-4">{tilaus.tuotenimi}</td>
                    <td className="col-3 col-md-3 col-lg-1">{tilaus.kpl}</td>


                    </tr>))}
                </tbody>
            </table>
        </div>
     
    </section>
    )
}
