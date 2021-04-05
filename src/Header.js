import React, {useState, useEffect} from 'react';
import './App.css';
import logo from "./toimistologo.png";
import Popup from './Popup';
// import Kirjautumislomake from "./Kirjautumislomake";

const URL = 'http://localhost/verkkopalveluprojekti/products/';

export default function Header() {

    // Kirjautumislomake
        const [isOpen, setIsOpen] = useState(false);

        const togglePopup = () => {
          setIsOpen(!isOpen);
        }  

        
    // Kategorioiden nouto    
    const [categories, setCategories] = useState([]);

    /* useEffect(async() => {
        try {
            const response = await fetch(URL + 'getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setTuoteryhma(json[0]);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, []) */
    
     useEffect(() => {
        let status = 0;
        fetch(URL + 'getcategories.php')
        .then(res => {
        status = parseInt(res.status);
        return res.json();
        })
        .then(
        (res) => {
            if (status === 200) {
            setCategories(res);
            } else {
            alert(res.error);
            }
            
        }, (error) => {
            alert("Häiriö järjestelmässä, yritä kohta uudelleen!");
        }
        )
    }, [])

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
                <input
                    type="button"
                    value="Kirjaudu"
                    onClick={togglePopup}
                />
                {isOpen && <Popup
                content={<>
                    <b>Kirjautuminen</b>
                    <form>
                        <input type="text" placeholder="Sähköpostiosoite" name="email" maxLength="30" required />
                        <input type="password" placeholder="Salasana" name="salasana" maxLength="30" required />
                    </form>
                    <button>Kirjaudu sisään</button><br/>
                    <a href="#">Unohditko salasanan?</a>
                </>}
                handleClose={togglePopup}
                />}
                &nbsp;/&nbsp;
                {/* Rekisteröidy */}   
                <a id="rekisteröityminen" href="/rekisteri">Rekisteröidy</a>
                <a href="#"><i className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
            </div>
            
        {/* Hakupalkki */}
        <div className="input-group rounded col-12 col-xl-4 col-md px-4 py-2 mx-auto" id="haku">
            <input type="search" className="form-control rounded" placeholder="Hae tuotteita..."
            aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="tuotehaku">
            <i className="fa fa-search"></i>
            </span>
        </div>

        {/* Tuoteryhmät */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map(category=> (
                            <li key={category.trnro} className="nav-item tuoteryhmalinkki">
                                <a className="nav-link" href="/tuoteryhmäsivu">{category.trnimi}</a>
                            </li>  
                        ))}
                    
                    </ul>
                </div>
                </div>
            </nav>
        </div>


        </header>
    );
      
}