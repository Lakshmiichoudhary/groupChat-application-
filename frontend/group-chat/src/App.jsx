import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/auth/Login'
import ChatZone from './components/chatPage/ChatZone'
import CreateAccount from './components/auth/CreateAccount'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/signup' element={<CreateAccount/>}></Route>
      <Route path='/chat' element={<ChatZone/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
