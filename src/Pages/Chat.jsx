import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"

export default function Chat() {
 const [room, setRoom] = useState()
  const [isJoined, setIsJoined] = useState(false)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState()
  // const socket = io("https://hotesss.onrender.com", { transports: ["websocket"] })
     const socket = io ("https://auction-3zsn.onrender.com", {transports: ["websocket"]})
  useEffect(() => {
    socket.on("joined", () => {
      setIsJoined(true)
    })
    socket.on("message",(msg)=>{
      setMessages((prev)=>[...prev,msg])
    })
  }, [room])

  function Send() {
    socket.emit("message", message, room)
  }

  function join() {
    socket.emit("join", room)
  }
  return (
    <div>
      {
        !isJoined ?
          <div>
            <input value={room} type='text' placeholder='Enter Room ID' onChange={(e) => setRoom(e.target.value)} />
            <button onClick={join} className='m-6 appearance-none block w-10 bg-gray-200 rounded-lg'>Join</button>
          </div>
          :
          
          <div className='bg-rose-500 p-7 m-4 ' >
          {
            messages.map((mess,index)=>{
              return(
                <p key={index}>
                  {mess}
                </p>
              )
            })
          }


          <input onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Enter Message' />
          <button onClick={Send} className='m-6 appearance-none block w-10 bg-gray-200 rounded-lg'>Send</button>
        </div>
}
</div>
)
}