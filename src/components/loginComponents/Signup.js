import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'



function Signup({setNewLogin, newLogin}){
    const navigate = useNavigate()
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    
    function submitUser(e){
        e.preventDefault()
        fetch("http://localhost:3000/user",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then(r => r.json())
            .then(data => data.errors ? alert(data.errors) : login())
    }

    function login() {
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
            .then(data => data.error === 'Invalid email or password'  ? alert(data.error):((localStorage.setItem('Token', data.token)), (navigate("/")), (setNewLogin(!newLogin))) )
    }

    function switchToLogin(){
        navigate("/login")
    }

    return(
        <>
        <form onSubmit={(e) => submitUser(e)} >
                <label>Username:
                    <input
                        type="text"
                        placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
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
                <label>Re-Enter Password:
                    <input
                        type="text"
                        placeholder="Re-Enter Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </label>

                <input type="submit" className="submitButton" />
                
            </form>
            <p onClick={() => switchToLogin()} >Already have an account?</p>
        </>
    )
}


export default Signup;