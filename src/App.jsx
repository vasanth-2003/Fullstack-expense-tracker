import React from 'react'
import {Routes,Route,Navigate,BrowserRouter } from 'react-router-dom'
import Home from './pages/Dashboard/Home'
import Expense from "./pages/Dashboard/Expense"
import Income from "./pages/Dashboard/Income"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import UserProvider from './context/Usercontenx'

function App() {
  console.log(window.location.pathname);

  return (
    <UserProvider>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </BrowserRouter>

    </div>
    </UserProvider>
    
  )
}

export default App

const Root = ()=>{
  const isAunthenticated = !!localStorage.getItem("token")
  
  return(
    isAunthenticated ? (
      <Navigate to = "/dashboard"/>
    ):(
      <Navigate to = "/login"/>
    )
  )

}