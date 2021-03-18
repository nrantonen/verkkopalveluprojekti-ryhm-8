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

    <p>Sisältö alkaa tästä</p>

    </section>

    </main>
  );
}

export default App;
