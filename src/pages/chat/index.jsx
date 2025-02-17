import { useAppStore } from '@/store';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast as hotToast } from 'react-hot-toast'; // Renamed to avoid conflict
import 'react-toastify/dist/ReactToastify.css';

import ChatContainer from './Components/chat-container';
import ContactsContainer from './Components/contact-container';
import EmptyChatContainer from './Components/empty-chat-container';

const Chat = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo?.profileSetup) { // Optional chaining to prevent errors if userInfo is undefined
      hotToast("Please setup profile to continue.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContactsContainer />
      <ChatContainer />
      <EmptyChatContainer />
    </div>
  );
};

export default Chat;
