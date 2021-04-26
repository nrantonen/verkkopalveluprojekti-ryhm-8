import React, {useState, useEffect} from 'react';
import { useLocation,useHistory } from 'react-router';
import {Link,Redirect} from 'react-router-dom';
import './App.css';

export default function Tuotemuokkaus({url, yllapito}) {
    const [product, setProduct] = useState({});
    const [tuotenimi,setTuotenimi] = useState("");
    const [hinta,setHinta] = useState(0);
    const [kuvaus,setKuvaus] = useState("");
    const [trnro,setTrnro] = useState([]);
    const [file, setFile] = useState(null);
    let location = useLocation();
    let tuotenro = location.pathname.split('/');
    let history = useHistory();

    // Hae tuote
    useEffect(() => {
      async function getProductToEdit() {
      try {
        const response = await fetch(url + 'products/getProduct.php/' + tuotenro[2]);
        const json = await response.json();
        if (response.ok) {
          setProduct(json[0]);
          setTuotenimi(json[0].tuotenimi);
          setHinta(json[0].hinta);
          setKuvaus(json[0].kuvaus);
          setTrnro(json[0].trnro);
          setFile(json[0].image);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    } 
    getProductToEdit();
    }, []);

    function handleChange(e) {
      setFile(e.target.files[0]);
    }

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('tuotenimi',tuotenimi);
        formData.append('hinta',hinta);
        formData.append('kuvaus',kuvaus);
        formData.append('trnro',trnro);
        formData.append('file',file);
        try {
          const response = await fetch (url + 'products/editProduct.php/' + tuotenro[2],
            {
                method: 'POST',
                body: formData
            }
        );
        if (response.ok) {
          history.push('/MuokkaaTuotteita');
        }
        } catch(error) {
          alert(error);
        }
      }
      // Tämä sivu ei näy, jos ylläpitäjä ei ole kirjautunut
      if(yllapito === null) {
            return <Redirect to="/Yllapito" />
        }

      return (
        <section> 
          <h2>Muokkaa tuotteen #{product.tuotenro} tietoja</h2>
        <form onSubmit={save}>                    
          <div className="d-flex row form-inline">
            <div className="col-12 col-md">
                <div>
                <input type="hidden" className="form-control" name="tuotenro" defaultValue={product.tuotenro}></input>
                </div>
                <div>
                    <label>Tuotenimi</label>
                    <input className="form-control" type="text" name="tuotenimi"
                        defaultValue={product.tuotenimi} onChange={e => setTuotenimi(e.target.value)}></input>
                </div>
                <div>
                    <label>Hinta</label>
                    <input className="form-control" type="text" name="hinta"
                        defaultValue={product.hinta} onChange={e => setHinta(e.target.value)}></input>
                </div>
                <div>
                    <label>Kuvaus</label>
                    <textarea className="form-control" type="text" name="kuvaus"
                        defaultValue={product.kuvaus} onChange={e => setKuvaus(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Tuoteryhmä</label>
                    <input className="form-control" type="text" name="trnro"
                        defaultValue={product.trnro}
                        onChange={e => setTrnro(e.target.value)}></input>
                </div>
            </div>
        
            
            {product.image != null ? (
            <div className="col-12 col-md">
                <img src={url + 'img/'+product.image} width="300" alt="" 
                 className="tuotekuvan_muokkaus"/><br/>
                <i>{product.image}</i>&nbsp;&nbsp;&nbsp;
                <h5>Uusi kuva</h5>
                 <input className="btn btn-secondary" type="file" name="file" onChange={handleChange}></input>
                {file != null ?  (
                    <>
                    <p>Nimi: {file.name}</p>
                    <p>Tyyppi: {file.type}</p>
                    </>
                ) : (
                      <i>Tuotekuvan on oltava tyyppiä .PNG</i>
                )}</div>
             ) : (
              <></>
            )}
            
          </div>
                <button type="submit" className="btn btn-success" value="Vahvista muokkaukset">Vahvista muutokset</button>
                &nbsp;
                <Link className="btn btn-secondary" to={{
                  pathname: '/MuokkaaTuotteita'
                }}>Palaa tallentamatta</Link>
        </form>
      </section>
)
            
    
    
}

