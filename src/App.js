import { Switch, Route, useLocation} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';
import Footer from './Footer';
import Rekisteri from './rekisteri';
import Navbar from './Navbar';
import Yllapito from './Yllapito';

const URL = 'http://localhost/verkkopalveluprojekti/';

function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
    }
  }, [location.state])

  return (
    <body>
      <main>
        <Header/>
        <Navbar url={URL} setCategory={setCategory}/>
        <Switch>
          <Route path="/" component={Etusivu} exact/>
          <Route path="/tuoteryhmäsivu" render={() => <Ryhma 
            url={URL}
            category={category}/>}
            exact
          />
          <Route path="/tuotesivu" component={Tuotesivu}/>
          <Route path="/rekisteri" component={Rekisteri}/>
          <Route path="/Yllapito" component={Yllapito}/>
        </Switch>
    
        <Footer/>
      </main>
    </body>
  );
}

export default App;