import React, {useState, useEffect} from "react";

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
                    setFeedback("Hakusanalla "+search+ " löytyy "+results.length+" tuotetta")
                } else {
                    setFeedback("Tuotteita ei löytynyt hakusanalla "+search+". Kokeile toista hakusanaa.")
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
            <h3>Tuotehaku</h3>
            {/* <h2>Hakusanalla <i>{search}</i> löytyy {results.length} tuotetta</h2> */}
            <h4>{feedback}</h4>
            {results.map(result => (
                <div key={result.tuotenro} className="col-5 d-flex" id="tuotekpl">
                    <div className="osa col-6" >
                        <p> <a href="#" id="tuotenimi">{result.tuotenimi}</a> <span id="hinta">{result.hinta} €</span></p>
                        <p> <a href="#" id="ryhmanimi">{result.trnimi}</a></p>
                        <p id="tuotekuvaus">{result.kuvaus}</p>  
                        <a href="#"><i id="ostoskori" className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
                    </div>
                    <div className="osa col-6">
                        <a href="#">
                            <img className="img-thumbnail img-fluid" id="tuotekuva" src={URL + "img/"+ result.image}></img>
                        </a>
                    </div>
                </div>
            
          ))} </section> 
    );
    }
    
export default Hakutulokset;
