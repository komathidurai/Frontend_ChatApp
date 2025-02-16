import { useAppStore } from '@/store';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  toast  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  toast  from 'react-hot-toast';
import ChatContainer from './Components/chat-container';
import ContactsContainer from './Components/contact-container';
import EmptyChatContainer from './Components/empty-chat-container';


const Chat = () => {
  const {userInfo} = useAppStore();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast("Please setup profile to continue.");
      navigate("/profile");
    }
 },[userInfo, navigate]);

  return (
  <div className='flex h-[100vh] text-white overflow-hidden'>chat
  <ContactsContainer />
  <ChatContainer />
  <EmptyChatContainer />
  </div>

); 
};

export default Chat;