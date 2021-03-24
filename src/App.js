import { Switch, Route} from 'react-router-dom';
import './App.css';
import logo from "./toimistologo.png";
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';

function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/" component={Etusivu} exact/>
        <Route path="/tuoteryhmäsivu" component={Ryhma} />
      </Switch>
        
      
      <Footer/>
    </main>
  );
}



function Footer() {
  return (
    <footer className="bg-dark">
        <h3>Tekijät:</h3>
          <div id="tekijat">
              <li>Enni Dahlström</li>
              <li>Mikael Niemi</li>
              <li>Alina Zinchenko</li>
              <li>Niko Rantonen</li>
              <li>Jukka Keränen</li>
          </div>
    </footer>
  );
}

function Header() {
  return (
    <header>
        {/* Navbar */}
        {/*Logo ja otsikko*/}
        <nav className="justify-content-center navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>&nbsp;&nbsp;
              Tepon Toimistotavarat
          </a>
        </nav>
      
      {/* Kirjautuminen, rekisteröityminen, ostoskori */}
      <div className="d-flex flex-row-reverse row p-2 bg-light">
        <div className="pt-2 col-12 col-xl-4">
          <a id="kirjautuminen" href="#">Kirjaudu sisään</a>&nbsp;/&nbsp;<a id="kirjautuminen" href="#">Rekisteröidy</a>
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

      {/* Kategoriat */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/tuoteryhmäsivu">TOIMISTOTARVIKKEET</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">HUONEKALUT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">ELEKTRONIIKKA</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

     
      </header>
  );
}
export default App;
