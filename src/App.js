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
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCriteria({tuotenimi: location.state.tuotenimi});
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
      setProduct({tuotenro: location.state.tuotenro,tuotenimi: location.state.tuotenimi});
    }
  }, [location.state])

  return (

    <>
      <Header setCriteria={setCriteria} search={search} setSearch={setSearch} url={URL} setCategory={setCategory}/>
      <article>
        <Switch>
          <Route path="/" component={Etusivu} exact/>
          <Route path="/tuoteryhmäsivu" render={() => <Ryhma 
            url={URL}
            category={category}/>}
            exact
          />
         <Route path="/tuotesivu" render={() => <Tuotesivu 
            url={URL}
            product={product}/>}
            exact
          />
          <Route path="/hakutulokset" render={() => <Hakutulokset
            URL = {URL}
            search = {search}
            setCriteria = {setCriteria}/>}
            exact
            />
            <Route path="/rekisteri" component={Rekisteri}/>
          <Route path="/Yllapito" component={Yllapito}/>
        </Switch>
      </article>
      <Footer/>
    </>
  );
}

export default App;