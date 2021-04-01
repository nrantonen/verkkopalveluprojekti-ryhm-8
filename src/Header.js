import React, {useState, useEffect} from 'react';
import './App.css';
import './SearchResults.css';
import logo from "./toimistologo.png";
import Popup from './Popup';
import Navbar from './Navbar';

const URL = 'http://localhost/verkkopalveluprojekti/';

export default function Header() {

    //Haku
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState([]);

    function searchProducts(e) {
        e.preventDefault();
        let status = 0;
        fetch(URL + 'products/searchProducts.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tuotenimi: search
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setResults(res);
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert('Haussa sattui virhe.');
            })}

    // Kirjautumislomake
        const [isOpen, setIsOpen] = useState(false);

        const togglePopup = () => {
          setIsOpen(!isOpen);
        }  

        
    
   

    return (
        <header>
            {/* Navbar */}
            {/*Logo ja otsikko*/}
            <nav className="justify-content-center navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>&nbsp;&nbsp;
                Tepon Toimistotavarat
            </a>
            </nav>
        
        {/* Kirjautuminen, rekisteröityminen, ostoskori */}
        <div className="d-flex flex-row-reverse row p-2 bg-light">
            <div className="pt-2 col-12 col-xl-4">
                {/* Kirjaudu */}
                <a id="kirjautuminen" href="#" onClick={togglePopup}>Kirjaudu</a>
                {isOpen && <Popup
                content={<>
                    <b>Kirjautuminen</b>
                    <form action={URL + "login/login.php"} method="POST">
                        <input type="text" placeholder="Sähköpostiosoite" name="email" maxLength="30" required />
                        <input type="password" placeholder="Salasana" name="salasana" maxLength="30" required />
                        <input type="submit" value="Kirjaudu sisään" /><br/>
                    </form>
                    <a href="#">Unohditko salasanan?</a>
                </>}
                handleClose={togglePopup}
                />}
                &nbsp;/&nbsp;
                {/* Rekisteröidy */}   
                <a id="rekisteröityminen" href="#">Rekisteröidy</a>
                <a href="#"><i className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
            </div>
            
        {/* Hakupalkki KESKEN */}
        
        <div className="input-group rounded col-12 col-xl-4 col-md px-4 py-2 mx-auto" id="haku">
            <form onSubmit={searchProducts}>
            <input type="text" className="form-control rounded" placeholder="Hae tuotteita..."
            aria-describedby="search-addon" name="haku" id="haku" value={search} 
            onChange = {e => setSearch(e.target.value)}/>
            <button onClick="submit">
            <i className="fa fa-search"></i></button>
            </form>
        </div>
        
        {/* Tuoteryhmät */}
        <Navbar />
        </div>

        {/* Hakutulokset KESKEN */}
        <section id="hakulista" className="row">
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
                            <img className="img-thumbnail img-fluid" id="tuotekuva" src={URL + "img/"+ result.kuva}></img>
                        </a>
                    </div>
                </div>
            
          ))} </section> 
        

        </header>
    );
      
}