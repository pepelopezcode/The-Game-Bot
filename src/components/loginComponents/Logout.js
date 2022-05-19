import React from 'react';


function Logout({setLoggedIn}){

    function logoutFunc(){
        localStorage.removeItem('Token')
        setLoggedIn(false)
    }
    return (
        <><button  onClick={() => logoutFunc()} >Logout</button></>
    )
}

export default Logout;