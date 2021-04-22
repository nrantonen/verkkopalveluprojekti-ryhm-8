import React from 'react'
import { Link } from 'react-router-dom'

export default function Asiakassivu() {
    return (
        <div>
            <h5>Tilinhallinta</h5>
            <div>
                <Link to="#">Asiakastiedot</Link>
            </div>
            <div>
                <Link to="#">Tilaukset</Link>
            </div>
            <Link to="#">Kirjaudu ulos</Link>
        </div>

    )
}
