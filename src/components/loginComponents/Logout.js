import React from 'react';


function Logout(){

    function logoutFunc(){
        fetch("http://localhost:3000/logout", {
            method: "DELETE",
        })
        ;

    }
    return (
        <><button  onClick={() => logoutFunc()} >Logout</button></>
    )
}

export default Logout;