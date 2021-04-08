import React, {useEffect,useState} from 'react';
import './App.css';

const URL = 'http://localhost/verkkopalveluprojekti/';

export default function Yllapito() {

    const [products, setProducts] = useState([]);
 
    useEffect(async() => {
        try {
            const response = await fetch(URL + 'products/productsForDelete.php');
            const json = await response.json();
            if (response.ok) {
                setProducts(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [])

    function deleteProduct(tuotenro) {
        let status = 0;
        fetch(URL + 'products/deleteProducts.php',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            tuotenro: tuotenro
          })
        })
        .then(res => {
          status = parseInt(res.status);
          return res.json();
        })
        .then(
          (res) => {
              if (status === 200) {
                const newListWithoutRemoved = products.filter((product) => product.tuotenro !== tuotenro);
              setProducts(newListWithoutRemoved);
            } else {
              alert(res.error);
              }
          }, (error) => {
              alert(error);
          }
        )
      }

    return (
        <div>

            <table id="tuotelista">
                <thead>
                    <tr className="row">
                        <th className="col">Tuotenro</th>
                        <th className="col">Nimi</th>
                        <th className="col">Hinta</th>
                        <th className="col">Tuoteryhmä</th>
                        <th className="col">Kuvaus</th>
                        <th className="col"></th>
                    </tr>
                    </thead>
                    
                <tbody>
                    {products.map(product => (   
                    <tr key={product.tuotenro} className="row">
                    <td className="col">{product.tuotenro}</td>
                    <td className="col">{product.tuotenimi}</td>
                    <td className="col">{product.hinta}</td>
                    <td className="col">{product.trnro}</td>
                    <td className="col">{product.kuvaus}</td>
                    <td className="col"><a id="poista_tuote" href="#" onClick={() => deleteProduct(product.tuotenro)}>Poista</a></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
