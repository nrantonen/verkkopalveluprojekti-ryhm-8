import React from 'react';

export default function LisaaTuote({url}) {
    
    return (
            <form action= {url + "products/addProducts.php"} method="POST">
                <div>
                    <label>Tuotenimi</label>
                    <input name="tuotenimi" maxlength="255" required id="tuotenimi" type="text"></input>
                </div>
                <div>
                    <label>Hinta</label>
                    <input name="hinta" required id="hinta"></input>
                </div>
                <div>
                    {/* Selvitä miten saat kuvan lisättyä */}
                    <label>Kuva</label>
                    <input></input>
                </div>
                <div>
                    <label>Kuvaus</label>
                    <textarea name="kuvaus" maxlength="255" id="kuvaus"></textarea>
                </div>
                <div>
                   {/* Tähän tuoteryhmä valinta jotenkin järkevämmin */}
                   <label>Tuoteryhmä</label>
                   <input name="trnro" required id="trnro"></input>
                </div>
                <input type="submit" value="Lisää tuote"></input>
            </form>
    );
}