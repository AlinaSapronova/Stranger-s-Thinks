import React from "react";
import { registerUser } from "../api";
import { Login } from "./";

function Register ({username, setUsername, password, setPassword}) {

async function handleSubmit(event) {
    event.preventDefault();
    const result = await registerUser(username,password)
    if(result) {
        localStorage.setItem("token", result)
    }
    
}
return (<div className="input">
    <form onSubmit={handleSubmit}>
        <h1>Sign up here!</h1>
        <label>
            Create username:
        </label>
        <input id="username" 
        placeholder="Create username"
        value={username}
        onChange={(event) => {
            setUsername(event.target.value)
        }}></input>

        <label>
            Create password:
        </label>
        <input id="password" 
        placeholder="Create password"
        value={password}
        onChange={(event) => {
            setPassword(event.target.value)
        }}></input>

        <button type="submit" className="btn" >Create your account!</button>
    </form>
</div>)
}

export default Register;