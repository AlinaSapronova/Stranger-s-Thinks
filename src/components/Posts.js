import React, { useEffect } from "react";
import { getPost } from "../api";
import Messages from "./Messages";

const AllPosts = ({posts, setPosts}) => {
  const token = localStorage.getItem("token")
  useEffect(() => {
    
    getPost().then((result) => {
      setPosts(result.data.posts);
    });
  }, []);
  
  console.log(token);


  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => {
        let postId = post._id;
        return(
           <div key={postId} className="posts">
          <h2>{post.title}</h2>
          <h3>{post.author.username}</h3>
          <p>{post.description}</p>
          <h3>{post.price}</h3>
          <h3>{post.location}</h3>
          <Messages token = {token} postId = {postId}/>
        </div>
        )
       
        })}
    </>
  );
};

export default AllPosts;
