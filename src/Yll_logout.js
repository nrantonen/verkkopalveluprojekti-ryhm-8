import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';

export default function Yll_logout({setYllapito,url,yllapito}) {
    useEffect(() => {
        function logout() {
            const config = {
                method: 'GET',
                credentials: 'include'
            }

            try {
                fetch(url + 'login/logoutyllapitaja.php',config);
                setYllapito(null);
            } catch (error) {
                alert(error);
              }
            }
            logout();
          }, [])
    return (
        <div>
        {/* <p>Ylläpitäjä kirjautunut ulos.</p>
            <Link to="/">Siirry etusivulle</Link> */}
            <>
            {
            yllapito == null &&
            <>
                <Redirect to="/" />
            </>
        }
        </>
        </div>
    )
}
