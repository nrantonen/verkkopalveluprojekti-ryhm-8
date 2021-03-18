import './App.css';

function App() {
  return (
    <main>
      <header>
        <div></div>
        {/* Navbar */}
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              <img src="#" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Verkkokauppa
            </a>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#">kategoria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">kategoria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">kategoria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">kategoria</a>
            </li>
          </ul>
        </div>
      </nav>
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
