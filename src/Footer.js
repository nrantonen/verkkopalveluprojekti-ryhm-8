import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark row">
            <div className="col-12 col-md-6">
                <h3>Tekijät:</h3>
                    <div id="tekijat">
                        <li>Enni Dahlström</li>
                        <li>Mikael Niemi</li>
                        <li>Alina Zinchenko</li>
                        <li>Niko Rantonen</li>
                        <li>Jukka Keränen</li>
                    </div>
            </div>
            <div className="col-12 col-md-6">
                <a id="yllapitolinkki" href="/Yllapito">Ylläpito</a>
            </div>
        </footer>
    );
}