import React,{useState, useEffect} from "react";
 import {getProfile} from "../api"

const Profile = (props) => {
    let token = ""
    const [myInfo, setMyInfo] = useState({})
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
        <div className="box">Your Profile!</div>
    )
}

export default Profile