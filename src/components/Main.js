import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Profile, NavBar, Login, Register,Messages } from "./";


const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myInfo, setMyInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [token,setToken] = useState("");
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Landing page</div>}></Route>
        <Route
          path="/Profile"
          element={<Profile myInfo={myInfo} setMyInfo={setMyInfo}  posts={posts} setPosts={setPosts} />}
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

      </Routes>
    </>
  );
};

export default Main;
