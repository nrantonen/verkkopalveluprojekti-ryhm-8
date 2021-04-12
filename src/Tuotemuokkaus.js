import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';


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
        <form action="tallennaTuoteMuokkaus.php" method="post">                    
            <h2>Muokkaa tuotteen #{product.tuotenro} tietoja</h2>
                <div>
                    <label>Tuotenimi</label>
                    <input type="hidden" name="tuotenro"
                        value={product.tuotenimi}/>
                </div>
                <div>
                    <label>Tuotenimi</label>
                    <input type="hidden" name="tuotenro"
                        value={product.tuotenimi}/>
                </div><div>
                    <label>Tuotenimi</label>
                    <input type="hidden" name="tuotenro"
                        value={product.tuotenimi}/>
                </div><div>
                    <label>Tuotenimi</label>
                    <input type="hidden" name="tuotenro"
                        value={product.tuotenimi}/>
                </div>
                <input type="submit" value="Vahvista muokkaukset" />
        </form>
      </section>
)
            
    
    
}
