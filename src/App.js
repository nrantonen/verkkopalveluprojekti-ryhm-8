import { Switch, Route} from 'react-router-dom';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';
import Footer from './Footer';
import Rekisteri from './rekisteri';

// const URL = 'http://localhost/toimistotarvike/';

function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/" component={Etusivu} exact/>
        <Route path="/tuoteryhmäsivu" component={Ryhma} />
        <Route path="/tuotesivu" component={Tuotesivu}/>
        <Route path="/rekisteri" component={Rekisteri}/>
      </Switch>
  
      <Footer/>
    </main>
  );
}

export default App;
