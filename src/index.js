import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { BrowserRouter , Route } from 'react-router-dom'
import {NavBar} from "./components"
import {Profile} from "./components"
import {getPost} from "./api"


const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
const app = () =>{
  const [posts, setPosts] = useState()
}



root.render(
  <BrowserRouter>
  <Route path="/Main"> <Main/></Route>
  </BrowserRouter>
);
