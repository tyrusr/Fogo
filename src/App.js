import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import useCSRFToken from './hooks/useCSRFToken';
import useNoLogoutHandler from './hooks/useNoLogoutHandler';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateListingPage from './pages/CreateListingPage';
import ListingPage from './pages/ListingPage';

import './App.css';

function App() {
  useCSRFToken();
  useNoLogoutHandler();
  const [userName, setGlobalUsername] = useState(localStorage.getItem("username"));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  return (
    <Routes>
      <Route path="/" element={<HomePage userName={userName} isLoggedIn={isLoggedIn} />} />
      <Route path="/createlisting" element={<CreateListingPage  userName={userName} isLoggedIn={isLoggedIn} />} />
      <Route path="/register" element={<RegisterPage setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<LoginPage setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/listing/:id" element={<ListingPage userName={userName} isLoggedIn={isLoggedIn} />} />
    </Routes>
  )
}


export default App;