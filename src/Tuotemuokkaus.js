import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
// import {Link} from 'react-router-dom';


export default function Tuotemuokkaus({url}) {
    const [product, setProduct] = useState({});

    let location = useLocation();
    let tuotenro = location.pathname.split('/');
  
    // Hae tuote
    useEffect(async() => {
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
    }, []);

    
    return (
        <section> 
          {/* Tuotteen tietojen muokkaaminen toimii näin, mutta reititys keskeneräinen. */}
        <form action={url + "products/editProduct.php"} method="post">                    
            <h2>Muokkaa tuotteen #{product.tuotenro} tietoja</h2>
                <div>
                <input type="hidden" name="tuotenro" defaultValue={product.tuotenro}></input>
                </div>
                <div>
                    <label>Tuotenimi</label>
                    <input type="text" name="tuotenimi"
                        defaultValue={product.tuotenimi}></input>
                </div>
                <div>
                    <label>Hinta</label>
                    <input type="text" name="hinta"
                        defaultValue={product.hinta}></input>
                </div>
                <div>
                    <label>Kuvaus</label>
                    <textarea type="text" name="kuvaus"
                        defaultValue={product.kuvaus}></textarea>
                </div>
                <div>
                    <label>Tuoteryhmä</label>
                    <input type="text" name="trnro"
                        defaultValue={product.trnro}></input>
                </div>
                <input type="submit" value="Vahvista muokkaukset"/>
        </form>
      </section>
)
            
    
    
}