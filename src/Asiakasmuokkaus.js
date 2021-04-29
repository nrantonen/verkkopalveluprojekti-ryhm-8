import React, {useState, useEffect} from 'react';
import { useLocation,useHistory } from 'react-router';
import {Link,Redirect} from 'react-router-dom';


export default function Asiakasmuokkaus({url, asiakas}) {
    const [tiedot,setTiedot] = useState('');
    const [sukunimi,setSukunimi] = useState('');
    const [etunimi,setEtunimi] = useState('');
    const [email,setEmail] = useState('');
    const [lahiosoite,setLahiosoite] = useState('');
    const [postinro,setPostinro] = useState('');

    function save() {

    }

    if(asiakas === null) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h5>Muokkaa tietoja</h5>
            <form onSubmit={save}>
                <div>
                    <div>
                        <input type="hidden" className="form-control" name="asnro" defaultValue={tiedot.asnro} />
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Sukunimi</label>
                        <input className="form-control" type="text" name="sukunimi"
                        defaultValue={tiedot.sukunimi} onChange={e => setSukunimi(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Etunimi</label>
                        <input className="form-control" type="text" name="etunimi"
                        defaultValue={tiedot.etunimi} onChange={e => setEtunimi(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email"
                        defaultValue={tiedot.email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Lähiosoite</label>
                        <input className="form-control" type="text" name="lahiosoite"
                            defaultValue={tiedot.lahiosoite}
                            onChange={e => setLahiosoite(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Postinumero</label>
                        <input className="form-control" type="number" name="postinro"
                        defaultValue={tiedot.postinro} onChange={e => setPostinro(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-success" value="Vahvista muokkaukset">Vahvista muutokset</button>
                &nbsp;
                <Link className="btn btn-secondary" to="/Asiakassivu">Palaa tallentamatta</Link>
                </div>
            </form>
        </div>
    )
}