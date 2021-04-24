import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import './App.css';

export default function Kuvanmuokkaus({url}) {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState(null);
    let location = useLocation();
    let history = useHistory();
    let tuotenro = location.pathname.split('/');
    
    // haetaan muokattavan tuotteen kuvatiedot
    useEffect(() => {
      async function getImage() {
      try {
        const response = await fetch(url + 'products/getProduct.php/' + tuotenro[2]);
        const json = await response.json();
        if (response.ok) {
          setProduct(json[0]);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    } getImage();
    }, []); 

  // tallennetaan uusi kuva ja palataan takaisin muokkauksen pääsivulle
  function save(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file);
    fetch (url + 'products/editPicture.php/' + tuotenro[2],
      {
        method: 'POST',
        body: formData,
      }
    )
    .then (() => {
        history.push('/Tuotemuokkaus/' + tuotenro[2]);
    }) 
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
    return (
        <div className="row mb-5">
            <h3 className="col-12 text-md-center">Muokkaa tuotteen <b>{product.tuotenimi}</b> kuvaa</h3> 
            <div className="col-sm-6 my-md-5 justify-content-md-end d-flex ">
            {product.image != null ? (
              <div>
                <h5 className="col-12">Nykyinen kuva: <i>{product.image}</i></h5>
                <img className="tuotekuvan_muokkaus" src={url + 'img/' + product.image} width="300" alt=""/>
              </div>
            ) : (
              <p><i>Tuotekuvaa ei löytynyt.</i></p>
            )}
            </div>
            <form onSubmit={save} className="col-sm-3 my-5">
                <h5 className="col-12">Uusi kuva: </h5>
                <div>
                <input className="btn btn-secondary" type="file" name="file" onChange={handleChange}></input>
                {file != null ?  (
                    <>
                    <p>Nimi: {file.name}</p>
                    <p>Tyyppi: {file.type}</p>
                    <button className="btn col-12 btn-success mb-2">Tallenna muutokset ja palaa tuotetietoihin</button>
                    <Link className="btn col-12 btn-secondary" 
                    to={{pathname: '/Tuotemuokkaus/' + product.tuotenro}}>
                      Palaa edelliselle sivulle tallentamatta</Link>
                    </>
                ) : (
                    <p>
                      <i>Tuotekuvan on oltava tyyppiä .PNG</i>
                      <Link className="mt-md-4 btn btn-success" 
                      to={{pathname: '/Tuotemuokkaus/' + product.tuotenro}}>
                      Palaa edelliselle sivulle tekemättä muutoksia</Link>
                    </p>
                )}
                
                </div>
                
                <br/>
                
                
            </form>
        </div>
    )
}

 
