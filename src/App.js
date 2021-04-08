import {useState,useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';
import Footer from './Footer';
import Rekisteri from './rekisteri';
import Hakutulokset from './Hakutulokset';
import Yllapito from './Yllapito';

const URL = 'http://localhost/verkkopalveluprojekti/';

function App() {

  // Hakupalkin toimintoja
  const [search,setSearch] = useState('');
  const [criteria, setCriteria] = useState(null)

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCriteria({tuotenimi: location.state.tuotenimi});
    }
  }, [location.state])

  return (
    <>
      <Header setCriteria={setCriteria} search={search} setSearch={setSearch}/>
      <article>
        <Switch>
          <Route path="/" component={Etusivu} exact/>
          <Route path="/tuoteryhmäsivu" component={Ryhma} />
          <Route path="/tuotesivu" component={Tuotesivu}/>
          <Route path="/rekisteri" component={Rekisteri}/>
          <Route path="/hakutulokset" render={() => <Hakutulokset
            URL = {URL}
            search = {search}
            setCriteria = {setCriteria}/>}
            exact
            />
            <Route path="/yllapito" component={Yllapito}/>
        </Switch>
      </article>
      <Footer/>
    </>
  );
}

export default App;