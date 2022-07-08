import React from "react";
import { Route, Routes } from "react-router-dom";
import { Posts,Profile,NavBar,Login,Register } from "./";


const Main = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path ="/"  element ={<div>Landing page</div>}></Route>
        <Route path = "/Profile" element = {<Profile/>}></Route>
        <Route path = "/Posts"  element = {<Posts/>}></Route>
        <Route path = "/Login" element = {<Login />}></Route>
        <Route path = "/Register" element = {<Register />}></Route>
      </Routes>
      </>
   
  );
};

export default Main;
