import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./pages/Dashboard/Home.jsx";
import Expense from "./pages/Dashboard/Expense.jsx";
import Income from "./pages/Dashboard/Income.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";

import UserProvider from "./context/UserContext.jsx";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
