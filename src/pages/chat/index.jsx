import { useAppStore } from '@/store';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import  toast  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  toast  from 'react-hot-toast';



const Chat = () => {
  const {userInfo} = useAppStore();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast("Please setup profile to continue.");
      navigate("/profile");
    }
 },[userInfo, navigate]);

  return <div></div>
  
};

export default Chat;