import React from 'react'
import {Redirect, Link} from 'react-router-dom';


export default function Yll_etusivu({yllapito}) {

    if(yllapito === null) {
        return <Redirect to="/Yllapito" />
    }
    

    return (
        <div>
            <Link to="/Yll_logout">Kirjaudu ulos</Link>
            <h2>Ylläpidon etusivu</h2>
            <div>
                <Link to="/MuokkaaTuotteita"><h6>Hallinnoi tuotteita</h6></Link>
            </div>
            <div>
                <Link to="/LisaaTuote"><h6>Lisää tuotteita</h6></Link>
            </div>
            <div>
                <Link to="/LisaaTuoteryhma"><h6>Lisää tuoteryhmiä</h6></Link>
            </div>
            <div>
                <Link to="/Tilaukset"><h6>Katso kaikki tilaukset</h6></Link>
            </div>
        </div>
    )
}