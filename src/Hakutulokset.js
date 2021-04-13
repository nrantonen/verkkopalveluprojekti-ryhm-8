import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function Hakutulokset ({URL,search}) {
    const [results, setResults] = useState([]);
    const [feedback, setFeedback] = useState('');
    useEffect(async() => {
        try {
            const response = await fetch(URL + 'products/searchProducts.php/' + search);
            const json = await response.json();
            if (response.ok) {
                setResults(json);
                if (search.length < 1) {
                    setFeedback("Rajaa hakutuloksia kirjoittamalla jotain hakukenttään.");
                } else if (search.length > 0 && results.length > 0) {
                    setFeedback("Hakusanalla "+ search + " löytyy "+results.length+" tuotetta:");
                } else {
                    setFeedback("Tuotteita ei löytynyt hakusanalla "+search+". Kokeile toista hakusanaa.");
                }
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [search, results.length]) // Uusi haku aina kun hakusana muuttuu


    return (
        <section id="hakulista" className="row">
            <h3 className="col-12">Tuotehaku</h3>
            <h5 className="col-12">{feedback}</h5>
            {results.map(result => (
                <div key={result.tuotenro} className="flex-row col-12 col-lg-5" id="tuotekpl">
                <p className="col-12"> 
                <Link id="tuotenimi" 
                    to={'/tuotesivu/' + result.tuotenro}>
                        {result.tuotenimi}
                </Link> 
                    <span id="hinta">  {result.hinta} €</span></p>
                <div id ="tuotetiedot" className="osa col-12 col-sm-6" >
                    <p>
                        <Link 
                            id="ryhmanimi"
                            to={{
                                pathname: '/tuoteryhmäsivu',
                                state: {
                                    trnro: result.trnro,
                                    trnimi: result.trnimi
                                }
                            }}>{result.trnimi}
                        </Link>
                    </p>

                    <p id="tuotekuvaus">{result.kuvaus}</p>  
                    </div>
                    <div className="osa col-12 col-sm-6 float-sm-right-center">
                        <a href="#">
                            <img className="img-thumbnail img-fluid" id="tuotekuva" src={URL + "img/"+ result.image}></img>
                        </a>
                    </div>
                </div>
            
          ))} </section> 
    );
    }
    
export default Hakutulokset;
