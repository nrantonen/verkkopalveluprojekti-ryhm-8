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
import MuokkaaTuotteita from './MuokkaaTuotteita';
import Tuotemuokkaus from './Tuotemuokkaus';
import Yll_etusivu from './Yll_etusivu';
import Yll_logout from './Yll_logout';


const URL = 'http://localhost/verkkopalveluprojekti/';

function App() {

  // Hakupalkin toimintoja
  const [search,setSearch] = useState('');
  const [criteria, setCriteria] = useState(null);
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCriteria({tuotenimi: location.state.tuotenimi});
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
    }
  }, [location.state]);


  //Ylläpito login
  const [yllapito,setYllapito] = useState(null);

  //Asiakas login
  const [asiakas,setAsiakas] = useState(null);



  return (

    <>
      <Header setCriteria={setCriteria} search={search} setSearch={setSearch} url={URL} setCategory={setCategory} setAsiakas={setAsiakas}/>
      <article>
        <Switch>
          <Route path="/" component={Etusivu} exact render={() =>
            <Etusivu asiakas={asiakas} /> }
          /> 
          <Route path="/tuoteryhmäsivu" render={() => <Ryhma 
            url={URL}
            category={category}/>}
            exact
          />
         <Route path="/tuotesivu" render={() => <Tuotesivu 
            url={URL}/>}
          />
          <Route path="/hakutulokset" render={() => <Hakutulokset
            url = {URL}
            search = {search}
            setCriteria = {setCriteria}/>}
            exact
            />
            <Route path="/rekisteri" component={Rekisteri}/>
          <Route path="/Yllapito" render={() =>
            <Yllapito
              setYllapito = {setYllapito}
              url={URL}
              yllapito={yllapito} />}
          />
          <Route path="/MuokkaaTuotteita" render={() => <MuokkaaTuotteita 
          url={URL}/>}
          />
          <Route path="/Tuotemuokkaus" render={() => <Tuotemuokkaus 
          url={URL}/>}
          />
          <Route path="/Yll_etusivu" exact render={() =>
            <Yll_etusivu yllapito={yllapito} />
            } />
          <Route path="/yll_logout" render={() =>
            <Yll_logout setYllapito={setYllapito}
            url={URL} />
          } />
        </Switch>
      </article>
      <Footer/>
    </>
  );
}

export default App;