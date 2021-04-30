import React, {useState, useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';
import './App.css';

export default function Asiakassivu({asiakas,url}) {

    const [tiedot, setTiedot] = useState([]);

    useEffect(() => {
        async function tiedot() {
          try {
              const response = await fetch(url + 'asiakas/asiakastiedot.php');
              const json = await response.json();
              if (response.ok) {
                  setTiedot(json);
              } else {
                  alert(json.error);
              }
          } catch (error) {
              alert(error);
          }
        } tiedot();
      }, [])


      if(asiakas === null) {
        return <Redirect to="/" />
    }


    return (
        <div>
            <h5>Tilinhallinta</h5>
            <div>
                <p><b>Asiakastiedot</b></p>
                <div>
                    <p>Asiakasnumero: {asiakas.asnro}</p>
                    <p>Nimi: {asiakas.etunimi} {asiakas.sukunimi}</p>
                    <p>Sähköposti: {asiakas.email}</p>
                    <p>Lähiosoite: {asiakas.lahiosoite}, postinumero: {asiakas.postinro}</p>
                </div>
            </div>
            <div>
                <Link to="/Asiakasmuokkaus">Muokkaa omia tietoja</Link>
            </div>
            <div>
                <Link to="/Omattilaukset">Tilaukset</Link>
            </div>
            <Link to="/Asiakaslogout">Kirjaudu ulos</Link>
        </div>

    )
}
