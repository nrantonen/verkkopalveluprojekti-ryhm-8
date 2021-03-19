import './App.css';
import logo from "./toimistologo.png";

function App() {
  return (
    <main>
      <header>
        {/* Navbar */}
        {/*Logo ja otsikko*/}
        <nav className="justify-content-center navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>&nbsp;&nbsp;
              Verkkokauppa
          </a>
        </nav>
      
      {/* Kirjautuminen, rekisteröityminen, ostoskori */}
      <div class="d-flex flex-row-reverse row p-2 bg-light">
        <div class="pt-2 col-12 col-xl-4">
          <a id="kirjautuminen" href="#">Kirjaudu sisään</a>&nbsp;/&nbsp;<a id="kirjautuminen" href="#">Rekisteröidy</a>
          <a href="#"><i class="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
        </div>
         
   {/* Hakupalkki */}
      <div class="input-group rounded col-12 col-xl-4 col-md px-4 py-2 mx-auto" id="haku">
        <input type="search" class="form-control rounded" placeholder="Hae tuotteita..."
          aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="tuotehaku">
          <i class="fa fa-search"></i>
        </span>
      </div>

      {/* Kategoriat */}
        <nav class="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">TOIMISTOTARVIKKEET</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">HUONEKALUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">ELEKTRONIIKKA</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

     
      </header>
        
      


    {/* Sisältö */}
    <section>
    <Kuvapalkki />
    <p>Sisältö alkaa tästä</p>

    </section>

    </main>
  );
}

function Kuvapalkki() {
  return (
    <div id="tuotepalkki" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/Nitoja.png" class="d-block" width="200" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block" width="200" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block" width="200" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#tuotepalkki" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Edellinen</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#tuotepalkki" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Seuraava</span>
      </button>
    </div>
  );
}

export default App;
