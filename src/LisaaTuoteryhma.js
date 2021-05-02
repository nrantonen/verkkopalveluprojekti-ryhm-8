import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function LisaaTuote({url}) {
    const [trnimi,setTrnimi] = useState("");

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('trnimi',trnimi);
        try {
            const response = await fetch (url + 'products/addCategory.php',
              {
                  method: 'POST',
                  body: formData
              }
          );
          if (response.ok) {
            document.getElementById("LisaaTuoteryhma").reset();
          }
          } catch(error) {
            alert(error);
          }
        }
    
    return (
            <form onSubmit={save} id="LisaaTuoteryhma">
                <div className="col-2">
                    <label>Tuoteryhmänimi</label>
                    <input className="form-control" name="trnimi" maxLength="255" required type="text"
                        onChange={e => setTrnimi(e.target.value)}></input>
                </div>
                <div className="col-2 mt-4 mb-4">
                    <button className="form-control btn-primary" type="submit">Lisää tuoteryhmä</button>
                </div>
                <Link className="btn btn-secondary" to={{
                  pathname: '/Yll_etusivu'
                }}>Takaisin</Link>
            </form>
    );
}