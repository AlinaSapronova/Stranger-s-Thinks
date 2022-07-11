import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ user }) => {
  const [myInfo, setMyInfo] = useState({});

  let token = "";

  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      //console.log(myReturnedInfo, "this is returned info")
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);
  //console.log(myInfo);
  return (
     myInfo ? 
    <>
      {myInfo.data.map((message) => (
        <div className="info" key={message._id}>
          Your Profile
          <h2>{message.content}</h2>
          <h3>{message.author.username}</h3>
        </div>
      ))}
    </>
   : null
   )
};

export default Profile;
