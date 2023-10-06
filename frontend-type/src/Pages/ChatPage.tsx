import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ChatPage() {
  const [chats,setChats]=useState([])
  const fetchChats= async ()=>{
    const {data}=await axios.get('http://localhost:5000/api/chat/');
    setChats(data)
    console.log(data);
  }
  useEffect(()=>{
    fetchChats();
  },[])
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage