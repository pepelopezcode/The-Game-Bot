import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'


function Login({setNewLogin, newLogin}){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLoginSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
            .then((r) => r.json())
            .then(data => data.error === 'Invalid email or password'  ? alert(data.error):((localStorage.setItem('Token', data.token)), (navigate("/")), (setNewLogin(!newLogin)) ))
        }

    function switchToSignup(){
        navigate("/signup")
    }


    return(
        <>
        <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <label>Email:
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    
                    <input type="submit" className="submitButton" />
                </form>
                <p onClick={() => switchToSignup()} >Signup</p>
        </>
    )
}

export default Login;