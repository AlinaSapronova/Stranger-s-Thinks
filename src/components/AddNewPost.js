import React, { useEffect } from "react"
import {createNewPost} from "../api";

const AddNewPost = ({title,description,price,location}) => {
const token = localStorage.getItem("token")
    useEffect(() => {
        createNewPost

    })


    return (
    <>
        <div>Create New Post</div>
        <form>
            <label>Title:</label>
            <input id="Title" placeholder="Title..." onChange={title} value={title}/>
            <label>Description:</label>
            <input id="Description" placeholder="Description..." />
            <label>Price:</label>
            <input id="Price" placeholder="Price..." />
            <label>Location:</label>
            <input id="Location" placeholder="location..." />
            <button type="submit" className="btn">Add Post</button>
        </form>
        </>
    )

}

export default AddNewPost;