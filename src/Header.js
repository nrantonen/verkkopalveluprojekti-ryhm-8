import React, {useState} from 'react';
import './App.css';
import './SearchResults.css';
import logo from "./logo.png";
import Popup from './Popup';
import Ostoskori from './Ostoskori';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {useHistory} from 'react-router';

export default function Header({setSearch, url, setCategory, cart, cartSum, setAsiakas, asiakas}) {

    // Kirjautumislomake
        const [isOpen, setIsOpen] = useState(false);

        const togglePopup = () => {
          setIsOpen(!isOpen);
        }  

        const [email, setEmail] = useState('post@post.com');
        const [salasana, setSalasana] = useState('matti75v');

        let history = useHistory();

        async function login(e) {
            e.preventDefault();
            const formData = new FormData();

            formData.append('email',email);
            formData.append('salasana',salasana);

            const config = {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept' : 'application/json',
                },
                body: formData
            }

            try {
                const response = await fetch(url + 'login/loginasiakas.php',config);
                const json = await response.json();

                if (response.ok) {
                    setAsiakas(json);
                    //Redirect sivulle
                    history.push('/Asiakas');
                } else {
                    alert("Virhe kirjautumisessa.");
                }
            } catch (error) {
                alert(error);
            }
        }


    const [cartShown, setCartShown] = useState(false);
    const toggleCart = () => { setCartShown(!cartShown); }
   
    return (
        <header>
            {/* Navbar */}
            {/*Logo ja otsikko*/}
            <nav className="justify-content-center navbar navbar-dark bg-dark">
            <Link className="navbar-brand fs-2 fw-bold" to="/">
                <img src={logo} width="70" height="70" className="d-inline-block align-middle" alt=""/>&nbsp;&nbsp;
                Tepon Toimistotavarat
            </Link>
            </nav>
        
        {/* Kirjautuminen, rekister??ityminen, ostoskori */}
        <div className="flex-row-reverse row m-1 p-2 bg-light">
            <div className="pt-2 col-12 col-md col-lg">
                {/* Kirjaudu */}
                <a id="kirjautuminen" href="#" onClick={togglePopup}>Asiakastili</a>
                {isOpen && <Popup
                content={<>
                    <b>Kirjautuminen</b>
                    <>
                    {asiakas == null && 
                        <>
                            <form onSubmit={login}>
                                <div className="login-form">
                                    <input type="text" className="form-control" placeholder="S??hk??postiosoite" name="email" value={email} onChange={e => setEmail(e.target.value)} maxLength="30" required />
                                </div>
                                <div className="login-form">
                                    <input type="password" className="form-control" placeholder="Salasana" name="salasana" value={salasana} onChange={e => setSalasana(e.target.value)} maxLength="30" required />
                                </div>
                                <div className="login-form">
                                    <button type="submit" className="btn btn-outline-success btn-sm">Kirjaudu sis????n</button><br/>
                                </div>
                            </form>
                            <a href="#">Unohditko salasanan?</a> 
                            <br/>
                            {/* Rekister??idy */}  
                            <Link id="rekister??ityminen" to="/rekisteri">Rekister??idy</Link>
                    </>
                    }
                    {
                        asiakas != null &&
                        <>
                            <div>
                                <p>Olet kirjautunut.</p>
                            </div>
                            <div>
                                <Link to="/Asiakas">Omalle sivulle</Link>
                            </div>
                            <div>
                                <Link to="/Asiakaslogout">Kirjaudu ulos</Link>
                            </div>
                        </>
                    }
                    </>
                </>}
                handleClose={togglePopup}
                />}
                &nbsp;&nbsp;
                 
               
                <a href="#" onClick={toggleCart}><i className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
                {cartShown && <Ostoskori cartSum={cartSum} cart={cart} asiakas={asiakas} handleClose={toggleCart}/>}
            </div>
            
        {/* Hakupalkki */}
            <div className="input-group form-inline col col-md col-lg px-4 py-2 mx-auto" id="haku">
                <input type="search" className="form-control rounded-pill rounded" placeholder="Hae tuotteita..."
                aria-describedby="search-addon" name="haku"
                onChange = {e => setSearch(e.target.value)}/>                
                <Link id="hakupainike" to="/hakutulokset">
                <i id="kuvake" className="fa fa-search"></i></Link> 
            </div>
    
        {/* Tuoteryhm??t */}
        <Navbar url={url} setCategory={setCategory}/>
        </div>

        

        </header>
    );
      
}