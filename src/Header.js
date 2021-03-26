import React, {Link, useEffect, useState} from 'react';
import './App.css';
import logo from "./toimistologo.png";
import Kirjautumislomake from "./Kirjautumislomake";

const url = 'http://localhost/verkkopalveluprojekti/';

export default function Header({url}) {
    const [categories, setCategories] = useState([]);

    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
            } else {
                alert(json.error);
            }
        } catch(error) {
            alert(error);
        }
    }, [])

    return (
        <header>
            {/* Navbar */}
            {/*Logo ja otsikko*/}
            <nav className="justify-content-center navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>&nbsp;&nbsp;
                Tepon Toimistotavarat
            </a>
            </nav>
        
        {/* Kirjautuminen, rekisteröityminen, ostoskori */}
        <div className="d-flex flex-row-reverse row p-2 bg-light">
            <div className="pt-2 col-12 col-xl-4">
            <a id="kirjautuminen" href="#">Kirjaudu sisään</a>&nbsp;/&nbsp;<a id="rekisteröityminen" href="#">Rekisteröidy</a>
            <a href="#"><i className="fa fa-shopping-cart px-3" alt="ostoskori" aria-hidden="true"></i></a>
            </div>
            
        {/* Hakupalkki */}
        <div className="input-group rounded col-12 col-xl-4 col-md px-4 py-2 mx-auto" id="haku">
            <input type="search" className="form-control rounded" placeholder="Hae tuotteita..."
            aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="tuotehaku">
            <i className="fa fa-search"></i>
            </span>
        </div>

        {/* Kategoriat */}

        <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                   {/* TÄMÄ */}
                    {categories.map(category => (
                        <li key={category.id}>
                            <Link
                            className="nav-item"
                            to={{
                                pathname: '/',
                                state: {
                                    id:category.id,
                                    name:category.name
                                }
                            }}
                            >{category.name}                            
                            </Link>
                        </li>  
                    ))}
                    </ul>
                </div>
                </div>
            </nav>
            </div>

        {/* Kovakoodattu */}
            {/* <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/tuoteryhmäsivu">TOIMISTOTARVIKKEET</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">HUONEKALUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ELEKTRONIIKKA</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </div> */}

        
        </header>
    );
      
}