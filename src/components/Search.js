import React, { useState } from "react";
import { Posts } from "./";

const Search = () =>{


const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

function postMatches(post, text) {
for (let i = 0; i < posts.length; i++){
    if (
        title || description || username || location === ""
    )
    return true
}
const handleChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)




let title=posts.includes("title")
let description=posts.includes("description")
let username=posts.includes("username")
let location=posts.includes("location")


}


const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;


return(
    <div>
        <input type={"text"} placeholder="Search Here" onChange={handleChange} value={searchTerm}/>
        {postsToDisplay.map((post)=>{
            <div>
            <h3>{post.title}</h3>
            <h3>{post.description}</h3>
            <h3>{post.username}</h3>
            </div>
        })}
    </div>
)
}

}



export default Search