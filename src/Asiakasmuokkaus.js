import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {Link,Redirect} from 'react-router-dom';


export default function Asiakasmuokkaus({url, asiakas,setAsiakas}) {
    const [sukunimi,setSukunimi] = useState(asiakas.sukunimi);
    const [etunimi,setEtunimi] = useState(asiakas.etunimi);
    const [email,setEmail] = useState(asiakas.email);
    const [lahiosoite,setLahiosoite] = useState(asiakas.lahiosoite);
    const [postinro,setPostinro] = useState(asiakas.postinro);
    const [asnro,setAsnro] = useState(asiakas.asnro);

    let history = useHistory();

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('sukunimi',sukunimi);
        formData.append('etunimi',etunimi);
        formData.append('email',email);
        formData.append('lahiosoite',lahiosoite);
        formData.append('postinro',postinro);
        formData.append('asnro',asnro);

        console.log(sukunimi, etunimi, email, lahiosoite, postinro, asnro );
         try {
          const response = await fetch (url + 'asiakas/asiakasmuokkaus.php',
            {
                method: 'POST',
                body: formData
            }
        );
        if (response.ok) {
            history.push('/Asiakas');
        }
        } catch(error) {
          alert(error);
        } 
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
                        <input type="hidden" className="form-control" name="asnro" defaultValue={asnro} />
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Sukunimi</label>
                        <input className="form-control" type="text" name="sukunimi"
                        defaultValue={sukunimi} onChange={e => setSukunimi(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Etunimi</label>
                        <input className="form-control" type="text" name="etunimi"
                        defaultValue={etunimi} onChange={e => setEtunimi(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email"
                        defaultValue={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Lähiosoite</label>
                        <input className="form-control" type="text" name="lahiosoite"
                            defaultValue={lahiosoite}
                            onChange={e => setLahiosoite(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-4">
                        <label>Postinumero</label>
                        <input className="form-control" type="number" name="postinro"
                        defaultValue={postinro} onChange={e => setPostinro(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-success" value="Vahvista muokkaukset">Vahvista muutokset</button>
                &nbsp;
                <Link className="btn btn-secondary" to="/Asiakas">Palaa tallentamatta</Link>
                </div>
            </form>
        </div>
    )
}