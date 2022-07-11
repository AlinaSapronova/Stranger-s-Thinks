import React,{useState, useEffect} from "react";
 import {getProfile} from "../api";
 import {MyPosts, Messages} from "./";

const Profile = ({user}) => {
    const [myInfo, setMyInfo] = useState({});
    const [myPosts,setMyPosts] = useState([]);
    const [myMessages, setMyMessages] = useState([]);
    let token = "";
    

    useEffect(()=>{
        token = localStorage.getItem("token")
        async function getMyInfo(){
            const myReturnedInfo = await getProfile(token)
            //console.log(myReturnedInfo, "this is returned info")

            setMyInfo(myReturnedInfo)
            setMyMessages(myReturnedInfo.messages)
            setMyPosts(myReturnedInfo.post)
        }
        getMyInfo()
    },[])

    return (
       <>
            {myPosts.map((info) => (
        <div className="info" key={info._id}>Your Profile
        <h2>{info.content}</h2>
        <h3>{info.author.username}</h3>
      </div>
       
    ))} 
    </>
    )
 }

export default Profile;