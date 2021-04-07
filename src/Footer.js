import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark">
            <div className="inline">
                <h3>Tekijät:</h3>
                    <div id="tekijat">
                        <li>Enni Dahlström</li>
                        <li>Mikael Niemi</li>
                        <li>Alina Zinchenko</li>
                        <li>Niko Rantonen</li>
                        <li>Jukka Keränen</li>
                    </div>
            </div>
            <div>
                <a id="yllapito" href="/Yllapito">Ylläpito</a>
            </div>
        </footer>
    );
}