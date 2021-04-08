import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-dark">
        <h3>Tekijät:</h3>
          <div id="tekijat">
              <li>Enni Dahlström</li>
              <li>Mikael Niemi</li>
              <li>Alina Zinchenko</li>
              <li>Niko Rantonen</li>
              <li>Jukka Keränen</li>
          </div>
          <Link to="/yllapito">Hallinnoi tuotteita</Link>
        </footer>
    );
}