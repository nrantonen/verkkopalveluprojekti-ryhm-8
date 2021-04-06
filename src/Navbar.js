import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

    //const URL = 'http://localhost/verkkopalveluprojekti/';    
    
    export default function Navbar({url,setCategory}) {
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
        <nav className="navbar navbar-expand-sm navbar-light bg-light col-12 col-xl-4 col-md">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
                                            id: category.trnro,
                                            name: category.trnimi
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
