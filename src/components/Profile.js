import React, { useState, useEffect } from "react";
import { getMessages } from "../api";

const Profile = ({posts, setPosts} ) => {
const token = localStorage.getItem("token");

  useEffect(() => {
    async function getMessages(token) {
      const showMessage = await getMessages(token);
      getMessages(showMessage );
    }
    getMessages();
  }, []);
 
  return (
    <div>
      <h3>Hello</h3>
    </div>

   )
   
};

export default Profile;
