import React from 'react';
import './App.css';

export default function Yllapito() {
    return(
        <section className="yll_loginform row">
            <div className="col-12">
                <h5>Kirjaudu ylläpitäjänä</h5>
            </div>
            <div className="col-12">
            <form action={URL + "#"} method="POST">
                <div className="yll_loginrivi">
                    <label>Sähköpostiosoite:</label><br/>
                    <input type="text" placeholder="Sähköpostiosoite" name="yll_email" maxLength="30" required />
                </div>
                <div className="yll_loginrivi">
                    <label>Salasana:</label><br/>
                    <input type="password" placeholder="Salasana" name="yll_salasana" maxLength="30" required />
                </div>
                <div><input type="submit" value="Kirjaudu sisään" /></div>
            </form>
            </div>
        </section>
    );
}