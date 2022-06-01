import React from 'react';
import {useNavigate} from 'react-router-dom'


function Logout(){
    const navigate = useNavigate()

    function logoutFunc(){
        localStorage.removeItem('Token')
        navigate("/login")
    }
    return (
        <><button  onClick={() => logoutFunc()} >Logout</button></>
    )
}

export default Logout;