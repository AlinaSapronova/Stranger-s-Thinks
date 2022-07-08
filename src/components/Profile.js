import React,{useState, useEffect} from "react";
 import {getProfile} from "../api"

const Profile = ({myInfo, setMyInfo}) => {
    let token = ""
    
    useEffect(()=>{
        token=localStorage.getItem("token")
        async function getMyInfo(){
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo, "this is returned info")
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])
    return (
        <div className="info">Your Profile!</div>
    )
}

export default Profile