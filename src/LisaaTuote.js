import React from 'react';
import {useState} from 'react';

export default function LisaaTuote({url}) {
    const [file,setFile] = useState(null);
    const [tuotenimi,setTuotenimi] = useState("");
    const [hinta,setHinta] = useState(0);
    const [kuvaus,setKuvaus] = useState("");
    const [trnro,setTrnro] = useState([]);

    function handleChange(e) {
        setFile(e.target.files[0])
    }

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('tuotenimi',tuotenimi);
        formData.append('hinta',hinta);
        formData.append('kuvaus',kuvaus);
        formData.append('trnro',trnro);
        try {
            const response = await fetch (url + 'products/addProducts.php',
              {
                  method: 'POST',
                  body: formData
              }
          );
          if (response.ok) {
            document.getElementById("LisaaTuote").reset();
            setFile(null);
          }
          } catch(error) {
            alert(error);
          }
        }
    
    return (
            <form onSubmit={save} id="LisaaTuote">
                <div className="col-2">
                    <label>Tuotenimi</label>
                    <input className="form-control" name="tuotenimi" maxlength="255" required id="tuotenimi" type="text"
                        onChange={e => setTuotenimi(e.target.value)}></input>
                </div>
                <div className="col-2">
                    <label>Hinta</label>
                    <input className="form-control" name="hinta" required id="hinta" onChange={e => setHinta(e.target.value)}></input>
                </div>
                <div className="col-2">
                    {/* Selvitä miten saat kuvan lisättyä */}
                    <label>Kuva</label>
                    <input className="form-control" type="file" name="file" onChange={handleChange}></input>
                </div>
                {file != null ? (
                    <>
                        <p>Nimi: {file.name}</p>
                        <p>Tyyppi: {file.type}</p>
                        <p>Koko: {file.size}</p>
                    </>
                ) : (
                    <p>Tiedostoa ei ole valittu</p>
                )
                }
                <div className="col-2">
                    <label>Kuvaus</label>
                    <textarea className="form-control" name="kuvaus" maxlength="255" id="kuvaus" onChange={e => setKuvaus(e.target.value)}></textarea>
                </div>
                <div className="col-2">
                   {/* Tähän tuoteryhmä valinta jotenkin järkevämmin */}
                   <label>Tuoteryhmä</label>
                   <input className="form-control" name="trnro" required id="trnro" onChange={e => setTrnro(e.target.value)}></input>
                </div>
                <div className="col-2">
                    <button className="form-control" type="submit">Lisää tuote</button>
                </div>
            </form>
    );
}