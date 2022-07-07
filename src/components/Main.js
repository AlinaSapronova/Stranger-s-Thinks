import React, {useState} from "react";
import { AllPosts } from "./";


const Main = () => {
  const [posts, setPosts] = useState({});
  return (
    <div>
      <h1>main</h1>
      <AllPosts posts={posts} setPosts={setPosts}/>
    </div>
  );
};

export default Main;
