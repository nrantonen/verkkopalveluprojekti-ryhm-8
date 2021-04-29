import React from 'react';
import './App.css';
import {useState} from 'react';

export default function Rekisteri({url}) {
    const [etunimi, setEtunimi] = useState ("");
    const [sukunimi, setSukunimi] = useState ("");
    const [email, setEmail] = useState ("");
    const [lahiosoite, setLahiosoite] = useState ("");
    const [postinro, setPostinro] = useState ("");
    const [salasana, setSalasana] = useState("");
    const [salasana2, setSalasana2] = useState("");
    
   
   
    async function save(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('etunimi',etunimi);
      formData.append('sukunimi',sukunimi);
      formData.append('email',email);
      formData.append('lahiosoite',lahiosoite);
      formData.append('postinro',postinro);
      formData.append('salasana',salasana);
      formData.append('salasana2',salasana2);

      if(salasana === salasana2){
       
      try {
          const response = await fetch (url + 'register/rekisteri.php',
            {
                method: 'POST',
                body: formData
            }
        );

        } catch(error) {
          alert(error);
        }
      } else {
      alert("salasanat ei täsmää!");
      return;
    }
    }

  
  return (
    <form onSubmit={save}>

      
    <div className="row col-12">
      <div id="r1" className="col-6">
        <h3>Luo käyttäjä</h3>
        <br/>
        <p>Etunimi</p>
        <input name="etunimi" type="text" onChange={e => setEtunimi(e.target.value)} className="form-control" placeholder="etunimi" aria-label="First name" required/>
      </div>
    </div>
    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>Sukunimi</p>
        <input name="sukunimi" type="text"onChange={e => setSukunimi(e.target.value)}  className="form-control" placeholder="sukunimi" aria-label="Last name" required/>
      </div>
    </div>

    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>Sähköposti</p>
        <input name="email"type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="sähköposti" aria-label="email" required/>
      </div>
    </div>

    <div className="row col-12">
      <div id="r1" className="col-6">
        <p>lähiosoite</p>
        <input name="lahiosoite" onChange={e => setLahiosoite(e.target.value)} type="text" className="form-control" placeholder="lähiosoite" aria-label="First name" required/>
      </div>
      </div>
    <div className="row col-12">
      <div id="r1"  className="col-6">
        <p>postinro</p>
        <input name="postinro" onChange={e => setPostinro(e.target.value)} type="number" min="0" maxLength="6" minLength="6" className="form-control" placeholder="postinumero" aria-label="Last name" required/>
      </div>
    </div>

      <div className="row col-12">
        <div id="r1"  className="col-6">
        <p>Salasana</p>
        
      <input name="salasana" onChange={e => setSalasana(e.target.value)} type="password"  className="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password" required/>
       </div>
      </div>

       <div className="row col-12">
       <div id="r1"  className="col-6">
      <p>Kirjoita salasana uudelleen.</p>
      <input name="salasana2"  onChange={e => setSalasana2(e.target.value)} type="password"  className="form-control" name="salasana" placeholder="salasana" maxLength="30" aria-label="password2" required />
      </div>
      </div>
    
    <div >
    <button id="rekisteroidy" type="submit" className="btn btn-secondary">rekisteröidy</button>
    </div>
</form>
  );
  
}
