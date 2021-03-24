import { Switch, Route} from 'react-router-dom';
import './App.css';
import Tuotesivu from './tuotesivu.js';
import Ryhma from './tuoteryhmäsivu';
import Etusivu from './etusivu';
import Header from './Header';


function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/" component={Etusivu} exact/>
        <Route path="/tuoteryhmäsivu" component={Ryhma} />
      </Switch>
        
      
      <Footer/>
    </main>
  );
}



function Footer() {
  return (
    <footer className="bg-dark">
        <h3>Tekijät:</h3>
          <div id="tekijat">
              <li>Enni Dahlström</li>
              <li>Mikael Niemi</li>
              <li>Alina Zinchenko</li>
              <li>Niko Rantonen</li>
              <li>Jukka Keränen</li>
          </div>
    </footer>
  );
}


export default App;
