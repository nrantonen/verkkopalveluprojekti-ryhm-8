import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import './App.css';

export default function Tuotemuokkaus({url}) {
    const [product, setProduct] = useState({});

    let location = useLocation();
    let tuotenro = location.pathname.split('/');
  
    // Hae tuote
    useEffect(() => {
      async function getProductToEdit() {
      try {
        const response = await fetch(url + 'products/getProduct.php/' + tuotenro[2]);
        const json = await response.json();
        if (response.ok) {
          setProduct(json[0]);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    } getProductToEdit();
    }, [url, tuotenro]);

    return (
        <section> 
          <h2>Muokkaa tuotteen #{product.tuotenro} tietoja</h2>
        <form action={url + "products/editProduct.php"}method="post">                    
          <div className="d-flex row form-inline">
            <div className="col-12 col-md">
                <div>
                <input type="hidden" className="form-control" name="tuotenro" defaultValue={product.tuotenro}></input>
                </div>
                <div>
                    <label>Tuotenimi</label>
                    <input className="form-control" type="text" name="tuotenimi"
                        defaultValue={product.tuotenimi}></input>
                </div>
                <div>
                    <label>Hinta</label>
                    <input className="form-control" type="text" name="hinta"
                        defaultValue={product.hinta}></input>
                </div>
                <div>
                    <label>Kuvaus</label>
                    <textarea className="form-control" type="text" name="kuvaus"
                        defaultValue={product.kuvaus}></textarea>
                </div>
                <div>
                    <label>Tuoteryhmä</label>
                    <input className="form-control" type="text" name="trnro"
                        defaultValue={product.trnro}></input>
                </div>
            </div>
        
            
            {product.image != null ? (
            <div className="col-12 col-md">
                <img src={url + 'img/'+product.image} width="300" alt="" 
                 className="tuotekuvan_muokkaus"/>
                 <p><i>{product.image}</i>&nbsp;&nbsp;&nbsp;
                 <Link id="muokkaa_kuva" to={{
                            pathname: '/Kuvanmuokkaus/' + product.tuotenro }}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Muokkaa kuvaa
                      </Link></p></div>
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

