import React,{useState} from 'react';
import './App.css';
import {useHistory} from 'react-router';
import {Redirect} from 'react-router-dom';


export default function Yllapito({setYllapito,url,yllapito}) {


    const [yll_email, setYllEmail] = useState('matti.yllapitaja@kauppa.fi');
    const [yll_salasana, setYllSalasana] = useState('matti75v');


    let history = useHistory();

    async function login(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('yll_email',yll_email);
        formData.append('yll_salasana',yll_salasana);

        const config = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept' : 'application/json',
            },
            body: formData
        }

        try {
            const response = await fetch(url + 'login/loginyllapitaja.php',config);
            const json = await response.json();

            if (response.ok) {
                setYllapito(json);
                //Redirect sivulle
                history.push('/Yll_etusivu');
            } else {
                alert("Virhe kirjautumisessa.");
            }
        } catch (error) {
            alert(error);
        }
    }

    return(
        <>
        {yllapito == null && 
            <>
                <section className="yll_loginform row">
                    <div className="col-12">
                        <h5>Kirjaudu ylläpitäjänä</h5>
                    </div>
                    <div className="col-12">

                    <form onSubmit={login}>
                        <div className="yll_loginrivi">
                            <label>Sähköpostiosoite:</label><br/>
                            <input type="text" placeholder="Sähköpostiosoite" name="yll_email" value={yll_email} onChange={e => setYllEmail(e.target.value)} maxLength="30" required />
                        </div>
                        <div className="yll_loginrivi">
                            <label>Salasana:</label><br/>
                            <input type="password" placeholder="Salasana" name="yll_salasana" value={yll_salasana} onChange={e => setYllSalasana(e.target.value)} maxLength="100" required />
                        </div>
                        <div><input type="submit" value="Kirjaudu sisään" /></div>
                    </form>
                    </div>
                </section>
            </>
        }
        {
            yllapito != null &&
            <>
                <Redirect to="/Yll_etusivu" />
            </>
        }
        </>
    );
}
