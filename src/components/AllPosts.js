import React, { useState, useEffect } from "react";
import { getPost } from "../api";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPost().then((result) => {
      setPosts(result.data.posts);
    });
  }, []);
  console.log(posts, "the posts");
  return (
    <>
      <h1>posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h3>{post.author.username}</h3>
          <p>{post.description}</p>
          <h3>{post.price}</h3>
          <h3>{post.location}</h3>
          

        </div>
      ))}
    </>
  );
};

export default AllPosts;
