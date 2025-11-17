import './App.css';
import { Routes, Route } from "react-router-dom";
import useCSRFToken from './hooks/useCSRFToken';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CreateListingPage from './pages/CreateListingPage';
import { useState } from 'react';


function App() {
  useCSRFToken();
  const [userName, setGlobalUsername] = useState(localStorage.getItem("username"));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
//maybe call clear old local storage and cookies here

  return (
    <Routes>
      <Route path="/" element={<HomePage userName={userName} isLoggedIn={isLoggedIn} />} />
      <Route path="/createlisting" element={<CreateListingPage />} />
      <Route path="/register" element={<RegisterPage setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<LoginPage setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  )
}


export default App;

// make a react component for a login page

//make a react component for a register page

//make a page for a listing

//allow users to bid on the item

//make a page to display mutliple listings
//pagination?

//make a component to create a new listing

//make user page that you can see all your listings and bids if you are auth












/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


