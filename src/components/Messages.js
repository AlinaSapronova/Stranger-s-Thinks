import React from "react"
import {sendMessage} from "../api"

const Messages = ({token, postId}) => {
    // console.log(token, postId, "This is from messages")

async function handleSubmit(event) {
    event.preventDefault();
    const content = event.target[0].value;
    sendMessage(token,postId,content) 
    event.target[0].value = "";
    // console.log(token)
}
return (
    <form onSubmit = {handleSubmit}>
        <label>
            Send a message:
        </label>
        <input></input>
        <button>Submit</button>
    </form>
)

}

export default Messages;