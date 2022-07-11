import React from "react";
import { loginUser } from "../api";





const Login = ({username, setUsername, password, setPassword}) => {


const handleOnChange = (event) => {
    const changed = event.target.id;
    if(changed === "username") {
        setUsername(event.target.value)
    }
    else{
        setPassword(event.target.value)
    }
}
async function handleSubmit(event) {
    event.preventDefault()
    const result = await loginUser(username,password)
    localStorage.setItem("token",result.data.token);
console.log(result.data.token, "result from login handle")
}

return (<div className = "input">
    <form>
        <label>
            Username
        </label>
        <input id = "username" 
        onChange = {handleOnChange}
        placeholder = "username"
        value = {username}/>

        <label>
            Password
        </label>
        <input id = "password" 
        onChange = {handleOnChange}
        placeholder = "password"
        value = {password}/>
        <button type= "submit"  className = "btn" onClick={handleSubmit}>Log in</button>
    </form>
    
   
    

</div>)
}



export default Login;