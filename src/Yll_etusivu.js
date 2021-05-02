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
            <div className="yll_link">
                <Link to="/MuokkaaTuotteita">
                    <button type="button" className="btn btn-primary"><h6>Hallinnoi tuotteita</h6></button>
                </Link>
            </div>
            <div className="yll_link">
                <Link to="/LisaaTuote">
                    <button type="button" className="btn btn-primary"><h6>Lisää tuotteita</h6></button>
                </Link>
            </div>
            <div className="yll_link">
                <Link to="/LisaaTuoteryhma">
                    <button type="button" className="btn btn-primary"><h6>Lisää tuoteryhmiä</h6></button>
                </Link>
            </div>
            <div className="yll_link">
                <Link to="/Tilaukset">
                    <button type="button" className="btn btn-primary"><h6>Katso kaikki tilaukset</h6></button>
                </Link>
            </div>
        </div>
    )
}