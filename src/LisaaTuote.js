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

    function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('tuotenimi',tuotenimi);
        formData.append('hinta',hinta);
        formData.append('kuvaus',kuvaus);
        formData.append('trnro',trnro);
        fetch (url + 'products/addProducts.php',
            {
                method: 'POST',
                body: formData
            }
        )
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
    }
    
    return (
            <form onSubmit={save}>
                <div>
                    <label>Tuotenimi</label>
                    <input name="tuotenimi" maxlength="255" required id="tuotenimi" type="text"
                        onChange={e => setTuotenimi(e.target.value)}></input>
                </div>
                <div>
                    <label>Hinta</label>
                    <input name="hinta" required id="hinta" onChange={e => setHinta(e.target.value)}></input>
                </div>
                <div>
                    {/* Selvitä miten saat kuvan lisättyä */}
                    <label>Kuva</label>
                    <input type="file" name="file" onChange={handleChange}></input>
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
                <div>
                    <label>Kuvaus</label>
                    <textarea name="kuvaus" maxlength="255" id="kuvaus" onChange={e => setKuvaus(e.target.value)}></textarea>
                </div>
                <div>
                   {/* Tähän tuoteryhmä valinta jotenkin järkevämmin */}
                   <label>Tuoteryhmä</label>
                   <input name="trnro" required id="trnro" onChange={e => setTrnro(e.target.value)}></input>
                </div>
                <button type="submit">Lisää tuote</button>
            </form>
    );
}