import React, { useEffect, useState } from 'react'

function ChatZone() {
  const [message,setMessage] = useState("")
  const [chat,setChat] = useState([])
  const [users,setUsers] = useState([])

  const fetchChat = async () => {
    const response = await fetch("http://localhost:4040/chat");
    const data = await response.json()
    console.log(data)
    setChat(data)
  }

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:4040/user");
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch("http://localhost:4040/chat",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ message }),
    });
    setMessage('');
    fetchChat();
  }

  useEffect(()=> {
    fetchChat();
    fetchUsers();
  },[])

  return (
    <>
      <div className='p-3 bg-cyan-700 text-white'>
        <p className='p-2 font-bold text-3xl mx-12'>Bridge</p>
      </div>
      <div className='p-2 bg-gradient-to-tr from-cyan-700 to-cyan-500 h-screen'>
        <div>
          {users.map((user)=>(
            <p key={user.id} className='bg-white w-32 p-3'>{user.name} :</p>
          ))}
        </div>
        <div>
          {chat.map((mes,id) => (
              <p key={id} className='text-white p-2'>{mes.message}</p>
          ))}
        </div>
      <form onSubmit={handleSubmit}>
          <input
            className='p-3 outline-none'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message here'
          />
          <button className='p-3 bg-cyan-700 text-white rounded-r-md'>Send</button>
        </form>
      </div>
    </>
  )
}

export default ChatZone
