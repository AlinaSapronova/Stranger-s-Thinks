import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Profile, NavBar, Login, Register,Messages,AddNewPost, Search } from "./";


const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getMyMessage, setGetMyMessasge] = useState([]);
  const [posts, setPosts] = useState([]);
  const [token,setToken] = useState("");
  const [title,description,price,location] = useState("");
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div className="welcome">Welcome to Stranger's Things!</div>}></Route>
        <Route
          path="/Profile"
          element={<Profile getMyMessage={getMyMessage} setGetMyMessasge={setGetMyMessasge}  posts={posts} setPosts={setPosts} />}
        ></Route>
        <Route
          path="/Posts"
          element={<Posts posts={posts} setPosts={setPosts} token = {token}/>}
        ></Route>
        <Route exact
          path="/Login"
          element={
            <Login
            token ={token}
            setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>

        <Route
          path="/Register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route path="/AddNewPost" element={<AddNewPost title={title} description={description} price={price} location={location}/>}></Route>

      </Routes>
    </>
  );
};

export default Main;
