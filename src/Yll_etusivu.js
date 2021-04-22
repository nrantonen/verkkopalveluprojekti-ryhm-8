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
            <Link to="/MuokkaaTuotteita"><h6>Hallinnoi tuotteita</h6></Link>
        </div>
    )
}
