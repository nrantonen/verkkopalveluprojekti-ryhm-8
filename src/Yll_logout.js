import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Yll_logout({setYllapito,url}) {
    useEffect(() => {
        async function logout() {
            const config = {
                method: 'GET',
                credentials: 'include'
            }

            try {
                await fetch(url + 'login/logoutyllapitaja.php',config);
                setYllapito(null)
            } catch (error) {
                alert(error);
              }
            }
            logout();
          }, [])
    return (
        <div>
            <p>Ylläpitäjä kirjautunut ulos.</p>
            <Link to="/">Mene etusivulle</Link>
        </div>
    )
}
