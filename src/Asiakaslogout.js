import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';

export default function Asiakaslogout({url,setAsiakas,asiakas}) {
    useEffect(() => {
        function logout() {
            const config = {
                method: 'GET',
                credentials: 'include'
            }

            try {
                fetch(url + 'login/logoutasiakas.php',config);
                setAsiakas(null);
            } catch (error) {
                alert(error);
              }
            }
            logout();
          }, [])
    return (
        <div>
            <>
            {
            asiakas == null &&
            <>
                <Redirect to="/" />
            </>
        }
        </>
        </div>
    )
}
