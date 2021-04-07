import React from 'react';
import './App.css';

export default function Yllapito() {
    return(
        <section className="yll_section">
            <div>
                <h5>Kirjaudu ylläpitäjänä</h5>
            </div>
            <div>
            <form action={URL + "#"} method="POST">
                <div><input type="text" placeholder="Sähköpostiosoite" name="yll_email" maxLength="30" required /></div>
                <div><input type="password" placeholder="Salasana" name="yll_salasana" maxLength="30" required /></div>
                <div><input type="submit" value="Kirjaudu sisään" /></div>
            </form>
            </div>
        </section>
    );
}