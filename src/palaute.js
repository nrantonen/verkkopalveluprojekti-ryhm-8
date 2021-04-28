import React from 'react';
import './App.css';


export default function Palaute({url}) {
  return (
    <form >
      <div>
        <div>
          <h2>tutteiden palautus</h2>
          <hr></hr>
          <p>Mahdollistamme tuotteiden palautuksen ja vaihtamisen: </p>
          <ul>
            <li>tuote on viallinen</li>
            <li>Tuote on vauriotunut</li>
            <li>Tuote ei vastannut oletuksia ja palautus aikaa on jäljellä</li>
          </ul>
          <p>
            Tuotteilla on x määräaika. Emme ota tai korvaa tuotteia joissa ei ole takuuta jäljellä.<br/>
            Palatetun tuotteen mukana pitää olla kuitti mukana.<br/>
            Palautuksen voit tehdä postitse,<br/>
            Postin pakettiautomaatilla ja Matkahuollon kautta.<br/>
            Mikäli palautat tuotteen postitse, voit kirjata sen palautetuksi jo etukäteen OmaPostissa.<br/>
          </p>
          <a href="/tuotepalautus">tuotepalautuslomake</a>
        </div>
      </div>
    </form>
  );
}
