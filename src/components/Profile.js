import React, { useEffect, useState } from "react";
import { getMessages } from "../api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [getMyMessage, setGetMyMessasge] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function myMessages(token) {
      const showMessage = await getMessages(token);
      setGetMyMessasge(showMessage);
    }
    myMessages(token);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/AddNewPost");
  }

  return (
    <>
      <h3 className="welcome">Welcome {getMyMessage.username}</h3>
      <button className="postbtn" type="submit" onClick={handleSubmit}>
        Add New Post
      </button>

      <div>{getMyMessage.message}</div>
    </>
  );
};

export default Profile;
