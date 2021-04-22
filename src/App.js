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
import Kuvanmuokkaus from './Kuvanmuokkaus';
import Yll_etusivu from './Yll_etusivu';


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
            url={URL}/>}
          />
          <Route path="/hakutulokset" render={() => <Hakutulokset
            URL = {URL}
            search = {search}
            setCriteria = {setCriteria}/>}
            exact
            />
            <Route path="/rekisteri" component={Rekisteri}/>
          <Route path="/Yllapito" render={() =>
            <Yllapito
              setYllapito = {setYllapito}
              URL={URL} />}
          />
          <Route path="/MuokkaaTuotteita" render={() => <MuokkaaTuotteita 
          url={URL}/>}
          />
          <Route path="/Tuotemuokkaus" render={() => <Tuotemuokkaus 
          url={URL}/>}
          />
           <Route path="/Kuvanmuokkaus" render={() => <Kuvanmuokkaus 
          url={URL}/>}
          />
          <Route path="/Yll_etusivu" exact render={() =>
            <Yll_etusivu yllapito={yllapito} />
            } />
        </Switch>
      </article>
      <Footer/>
    </>
  );
}

export default App;