import React from "react"
import { registerUser } from "../api";

function Register ({username,password,setUsername,setPassword,setIsLoggedIn}) {

async function handleSubmit(event) {
    event.preventDefault();
    const token = await registerUser(username,password) 
    if(token) {
        setIsLoggedIn(true)
        localStorage.setItem("token",token)
    }
}
return (<div className="input">
    <form onSubmit={handleSubmit}>
        <h1>Sign up here</h1>
        <lable>
            Create username:
        </lable>
        <input id="username" 
        placeholder="Create username"
        value={username}
        onChange={(event) => {
            setUsername(event.target.value)
        }}></input>

        <lable>
            Create password:
        </lable>
        <input id="password" 
        placeholder="Create password"
        value={password}
        onChange={(event) => {
            setPassword(event.target.value)
        }}></input>
        <button type="submit">Create your account!</button>
    </form>
</div>)
}

export default Register;