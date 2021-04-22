import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';



export default function MuokkaaTuotteita({url}) {
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
      async function productsToEdit() {
        try {
            const response = await fetch(url + 'products/allProducts.php');
            const json = await response.json();
            if (response.ok) {
                setProducts(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
      } productsToEdit();
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
          <Link to="/Yll_etusivu">Palaa ylläpitäjän etusivulle</Link>
          </div>
          <h3>Tuotteiden hallinnointi</h3>
        <div className="p-md-3">
            <table className="table table-striped">
                <thead className="otsikot">
                    <tr className="row">
                        <th className="col-3 col-lg-1">Tuotenro</th>
                        <th className="col-3 col-lg-2">Nimi</th>
                        <th className="col-3 col-lg-1">Hinta</th>
                        <th className="col-3 col-lg-2">Tuoteryhmä</th>
                        <th className="col-12 col-lg-6">Kuvaus</th>
                    </tr>
                    </thead> 
                    <tbody>
                    {products.map(product => (   
                    <tr key={product.tuotenro} className="row">
                    <td className="col-12 col-md-3 col-lg-1"><b>#{product.tuotenro}</b></td>
                    <td className="col-12 col-md-3 col-lg-2"><b>{product.tuotenimi}</b></td>
                    <td className="col-12 col-md-3 col-lg-1">{product.hinta} €</td>
                    <td className="col-12 col-md-3 col-lg-2"><span id="tuoteryhma_selite">Tuoteryhmä </span>{product.trnro}</td>
                    <td className="col-12 col-md-9 col-lg-4">{product.kuvaus}</td>
                    
                    <td className="d-flex justify-content-md-end col-md-3 col-lg-2">
                        <Link id="muokkaa_tuote" to={{
                            pathname: '/Tuotemuokkaus/' + product.tuotenro }}>
                              <i className="fa fa-arrow-up" aria-hidden="true"></i> 
                              <i className="fa fa-arrow-left" aria-hidden="true"></i> 
                            &nbsp;Muokkaa tuotetietoja
                        </Link></td>

                    <td className="col-md-8 col-lg-5">
                        <i><img className="tuotekuvan_muokkaus" src={url + 'img/'+product.image} width="30" alt=""/> {product.image}</i>
                    </td>

                    <td className="d-flex justify-content-md-end col-md-4 col-lg"><p id="poista_tuote" onClick={() => deleteProduct(product.tuotenro)}>Poista</p></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
     
    </section>
    

    )
}
