import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName,makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage,setLiveMessage]=useState()
    const dispatch=useDispatch();

    const chatMessages=useSelector(store=>store.chat.messages)



    useEffect(()=>{
        const i=setInterval(()=>{
            
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(30),
            }))

        },1000);
        return ()=>clearInterval(i);

    },[])
  return (
    <>
    <div className='ml-2 p-2 w-full h-[500px] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessages.map((chat,index)=>(
        <ChatMessage key={index} name={chat.name} message={chat.message}/>
      ))}
      </div>
      
    </div>
    <form className='w-full p-2 ml-2 flex ' 
       onSubmit={(e)=>{
         e.preventDefault();
         dispatch(addMessage({
          name:"Mounika",
          message:liveMessage,
         }));
         setLiveMessage("")

       }}>
        <input className='border border-black w-96 px-2' type='text' value={liveMessage}
        onChange={(e)=>{
          setLiveMessage(e.target.value)
        }} />
        <button className='mx-2 px-2 bg-blue-100'>Send</button>
    </form>
    </>
  );
}

export default LiveChat;
