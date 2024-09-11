

import React from 'react'

import {Routes, Route } from "react-router-dom";
import ChatbotPage from '../Pages/ChatbotPage';
import Login from '../Components/Login';

const BotscreenRoute = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Login />}></Route>
            <Route path={"/chatbotpage"} element={<ChatbotPage />}></Route>
        </Routes>

    </div>
  )
}

export default BotscreenRoute