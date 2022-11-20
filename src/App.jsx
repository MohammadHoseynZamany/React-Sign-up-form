import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import SignUpSuccess from "./components/SignUpSuccess"

export default function(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignUpSuccess" element={<SignUpSuccess />} />
        </Routes>
      </BrowserRouter>
  )
}