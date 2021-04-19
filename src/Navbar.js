import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

     const url = 'http://localhost/verkkopalveluprojekti/';    
    
    export default function Navbar({setCategory}) {
    // Kategorioiden nouto    
    const [categories, setCategories] = useState([]);

    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setCategory(json[0]);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [])


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-lg">
                <div className="container-fluid">
                <button className="navbar-toggler nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span>Tuoteryhmät <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map(category => (
                            <li key={category.trnro} className="nav-item tuoteryhmalinkki">
                                <Link 
                                    className="nav-link" 
                                    to={{
                                        pathname: '/tuoteryhmäsivu',
                                        state: {
                                            trnro: category.trnro,
                                            trnimi: category.trnimi
                                        }
                                    }}
                                >{category.trnimi}
                                </Link>
                            </li>  
                        ))}
                    </ul>
                </div>
                </div>
            </nav>
    )
}
