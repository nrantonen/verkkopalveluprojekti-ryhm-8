import { Switch, Route} from 'react-router-dom';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/" component={Etusivu} exact/>
        <Route path="/tuoteryhmäsivu" component={Ryhma} />
        <Route path="/tuotesivu" component={Tuotesivu}/>
      </Switch>
  
      <Footer/>
    </main>
  );
}

export default App;
