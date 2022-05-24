import React, {useState} from 'react';



function Signup({setSignupSwitch}){
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    //handles the user creation
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
            .then(data => data.errors ? alert(data.errors) :console.log(data))
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
            <p onClick={() => setSignupSwitch(false)} >Already have an account?</p>
        </>
    )
}


export default Signup;