import { Switch, Route} from 'react-router-dom';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';
import Footer from './Footer';
import Hakutulokset from './Hakutulokset';


function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/" component={Etusivu} exact/>
        <Route path="/tuoteryhmäsivu" component={Ryhma} />
        <Route path="/tuotesivu" component={Tuotesivu}/>
        <Route path="/hakutulokset" component={Hakutulokset}/>
      </Switch>
        
      
      <Footer/>
    </main>
  );
}

export default App;
