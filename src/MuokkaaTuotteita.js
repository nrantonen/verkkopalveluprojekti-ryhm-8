import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


export default function MuokkaaTuotteita({url}) {
    const [products, setProducts] = useState([]);
 
    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/productsToEdit.php');
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
        fetch(url + 'products/deleteProducts.php',{
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
        <section>
        <div>
            <table id="tuotelista">
                <thead>
                    <tr className="row">
                        <th className="col-1">Tuotenro</th>
                        <th className="col-2">Nimi</th>
                        <th className="col-2">Hinta</th>
                        <th className="col-1">Tuoteryhmä</th>
                        <th className="col-4">Kuvaus</th>
                        <th className="col-2"></th>
                    </tr>
                    </thead> 
                    <tbody>
                    {products.map(product => (   
                    <tr key={product.tuotenro} className="row">
                    <td className="col-1">{product.tuotenro}</td>
                    <td className="col-2">{product.tuotenimi}</td>
                    <td className="col-2">{product.hinta}</td>
                    <td className="col-1">{product.trnro}</td>
                    <td className="col-4">{product.kuvaus}</td>
                    <td className="col-1">
                        <Link id="muokkaa_tuote" to={{
                            pathname: '/Tuotemuokkaus/' + product.tuotenro }}>Muokkaa
                        </Link></td>
                    <td className="col-1"><a id="poista_tuote" href="#" onClick={() => deleteProduct(product.tuotenro)}>Poista</a></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
     
    </section>
    

    )
}
