import React,{useState} from "react";
import { loginUser } from "../api";



const Login = (props) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleOnChange = (event) => {
    const changed = event.target.id;
    if(changed === "username") {
        setUsername(event.target.value)
    }
    else{
        setPassword(event.target.value)
    }
}
const handleSubmit = async () => {
    const token = loginUser(username,password)
    localStorage.setItem("token", token);
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
    </form>
    <button type= "submit" onClick={handleSubmit} className = "btn">Log in</button>

</div>)
}



export default Login;