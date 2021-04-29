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
import LisaaTuote from './LisaaTuote';
import Yll_logout from './Yll_logout';
import Asiakassivu from './Asiakassivu';
import Asiakaslogout from './Asiakaslogout';
import Asiakasmuokkaus from './Asiakasmuokkaus';
import Kassa from './Kassa';
import Palaute from './palaute';
import Tuotepalautus from './tuotepalautus';
import Kaikkitilaukset from './Kaikkitilaukset';
import Omattilaukset from './Asiakastilaukset';


const URL = 'http://localhost/verkkopalveluprojekti/';

function App() {

  // Hakupalkin toimintoja
  const [search,setSearch] = useState('');
  const [criteria, setCriteria] = useState(null);
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCriteria({tuotenimi: location.state.tuotenimi});
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
    }
    if('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [location.state]);


  //Ylläpito login
  const [yllapito,setYllapito] = useState(null);

  //Asiakas login
  const [asiakas,setAsiakas] = useState(null);



  return (

    <>
      <Header setCriteria={setCriteria} search={search} setSearch={setSearch} url={URL} 
      setCategory={setCategory} setAsiakas={setAsiakas} asiakas={asiakas} 
      cartSum={cartSum} cart={cart}/>
      <article>
        <Switch>
        <Route path="/" render={() => <Etusivu 
            url={URL}
            asiakas={asiakas} 
            /> }
            exact
          />
          <Route path="/tuoteryhmäsivu" render={() => <Ryhma 
            url={URL}
            category={category}/>}
            exact
          />
         <Route path="/tuotesivu" render={() => <Tuotesivu 
            url={URL} addToCart={addToCart}/>}
          />
          <Route path="/hakutulokset" render={() => <Hakutulokset
            url = {URL}
            search = {search}
            setCriteria = {setCriteria}/>}
            exact
            />
            <Route path="/rekisteri" render = {() => <Rekisteri 
            url = {URL}
            /> }/>

          <Route path="/Yllapito" render={() =>
            <Yllapito
              setYllapito = {setYllapito}
              url={URL}
              yllapito={yllapito} />}
          />
          <Route path="/MuokkaaTuotteita" render={() => <MuokkaaTuotteita 
          url={URL} yllapito={yllapito}/>}
          />
          <Route path="/Tuotemuokkaus" render={() => <Tuotemuokkaus 
          url={URL} yllapito={yllapito}/>}
          />
            <Route path="/LisaaTuote" render={() => <LisaaTuote
            url={URL}/>} 
          />
          <Route path="/Yll_etusivu" exact render={() =>
            <Yll_etusivu yllapito={yllapito} />
            } />
          <Route path="/yll_logout" render={() =>
            <Yll_logout setYllapito={setYllapito}
            url={URL} />
          } />
           <Route path="/Yll_logout" render={() =>
            <Yll_logout setYllapito={setYllapito}
            yllapito={yllapito}
            url={URL} />
          } />
          <Route path="/Asiakas" render={() =>
            <Asiakassivu asiakas={asiakas}
            setAsiakas={setAsiakas}
            url={URL} />
          } />
          <Route path="/Asiakaslogout" render={() =>
            <Asiakaslogout setAsiakas={setAsiakas}
            asiakas={asiakas}
            url={URL}/>
          } />
          <Route path="/Asiakasmuokkaus" render={() =>
            <Asiakasmuokkaus setAsiakas={setAsiakas}
            asiakas={asiakas}
            url={URL}/>
          } />
          <Route path="/Kassa" render={() =>
            <Kassa asiakas={asiakas}
            url={URL} cart={cart} setCart={setCart} 
            removeFromCart={removeFromCart}
            updateAmount={updateAmount}
            cartSum={cartSum} emptyCart={emptyCart} />
          } />
          <Route path="/Palaute" render={() =><Palaute 
          url={URL}/>}/>
            <Route path="/tuotepalautus" render={() =><Tuotepalautus 
          url={URL}/>}/>
          <Route path="/Tilaukset" render={() =>
            <Kaikkitilaukset 
            url={URL}
            yllapito={yllapito} />
           } />
          <Route path="/Omattilaukset" render={() =>
            <Omattilaukset 
            url={URL}
            asiakas={asiakas} />
          } />
        </Switch>
      </article>
      <Footer/>
    </>
  );

  
  function addToCart(product) {
    if(cart.some(item => item.tuotenro === product.tuotenro)) {
      const existingProduct = cart.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    } else {
      product["amount"] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCart = Object.assign([...cart], {[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  function cartSum() {
    let sum = 0;
    for(let i = 0; i < cart.length; i++) {
      sum += parseFloat(cart[i].hinta * cart[i].amount);
    }
    return sum.toFixed(2);
  }

  // poistaa tietyn tuotteen korista
 function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.tuotenro !== product.tuotenro);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  // tyhjentää koko korin
  function emptyCart() {
    setCart([]);
    localStorage.setItem('cart',JSON.stringify([]));
  }
}

export default App;
 