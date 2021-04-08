import React, {useState} from 'react';
import './App.css';
import './SearchResults.css';
import logo from "./toimistologo.png";
import Popup from './Popup';
import Ostoskori from './Ostoskori';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


export default function Header({setCriteria, search, setSearch, URL, setCategory}) {

    // Kirjautumislomake
        const [isOpen, setIsOpen] = useState(false);

        const togglePopup = () => {
          setIsOpen(!isOpen);
        }  
    const [cartShown, setCartShown] = useState(false);
    const toggleCart = () => { setCartShown(!cartShown); }
   
    return (
        <header>
            {/* Navbar */}
            {/*Logo ja otsikko*/}
            <nav className="justify-content-center navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>&nbsp;&nbsp;
                Tepon Toimistotavarat
            </Link>
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
                <a id="rekisteröityminen" href="/rekisteri">Rekisteröidy</a>
                <a href="#" onClick={toggleCart}><i className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
                {cartShown && <Ostoskori handleClose={toggleCart}/>}
            </div>
            
        {/* Hakupalkki */}
        
        <div className="input-group rounded col-12 col-xl-4 col-md px-4 py-2 mx-auto" id="haku">
            <div className="input-group">
            <input type="text reset" className="form-control rounded-pill rounded" placeholder="Hae tuotteita..."
            aria-describedby="search-addon" id="hakukentta" name="haku"
            onChange = {e => setSearch(e.target.value)}/></div>
            <div>
            <Link onClick={setCriteria(search)} to="/hakutulokset" /* onClick={clearInput} */>
            <i className="fa fa-search"></i></Link> 
                    {/* Ilman välivaihetta [search, setSearch] hakusana jää kenttään, mutta kentän arvo on silti
                     null eikä haku palauta mitään.
                     ----> Välivaiheen avulla hakusana jää yhä kenttään toiselle sivulle siirryttäessä, mutta
                    haku onnistuu. */}
            </div>
        </div>

        {/* Tuoteryhmät */}
        <Navbar url={URL} setCategory={setCategory}/>
        </div>

        

        </header>
    );
      
}