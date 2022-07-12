import React, { useEffect } from "react"
import {createNewPost} from "../api";





const AddNewPost = ({title,setTitle, description, setDescription, price, setPrice, location, setLocation,}) => {
const token = localStorage.getItem("token")
const handleOnChange = (event) => {
   
    const changed = event.target;
    if(changed === "title") {
        setTitle(event.target.value)
        
    }
    else if(changed === "description") {
        setDescription(event.target.value)
        
    }
    else if(changed === "price") {
        setPrice(event.target.value)
        
    }
    else if (changed === "location") {
        setLocation(event.target.value)
        
    }
   
}

async function handleSubmit(event){
    event.preventDefault()
    const result = await createNewPost(title,description,price,location, token)
    localStorage.setItem("token", result.data)
}


    return (
    <>
        <div>Create New Post</div>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input id="Title" placeholder="Title..." onChange={handleOnChange} />
            <label>Description:</label>
            <input id="Description" placeholder="Description..." onChange={handleOnChange} />
            <label>Price:</label>
            <input id="Price" placeholder="Price..." onChange={handleOnChange} />
            <label>Location:</label>
            <input id="Location" placeholder="Location..." onChange={handleOnChange} />
            <button type="submit" className="btn">Add Post</button>
        </form>
        </>
    )

}

export default AddNewPost;