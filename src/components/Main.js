import React, {useState} from "react";
import { AllPosts } from "./";
import {NavBar} from "./"


const Main = () => {
  const [posts, setPosts] = useState({});
  return (
    <div>
      <NavBar />
      <AllPosts posts={posts} setPosts={setPosts}/>
      
    </div>
  );
};

export default Main;
