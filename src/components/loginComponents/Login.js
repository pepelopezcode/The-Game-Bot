import React, {useState} from 'react';


function Login(){

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
            .then(data => data.error === 'Invalid email or password'  ? alert(data.error):console.log(data) )
            
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
        </>
    )
}

export default Login;