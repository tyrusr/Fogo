import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CreateListingPage from './pages/CreateListingPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createlisting" element={<CreateListingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" elements={<LoginPage />} />
    </Routes>
  )
}


// make a react component for a login page

//make a react component for a register page

//make a page for a listing

//allow users to bid on the item

//make a page to display mutliple listings
//pagination?

//make a component to create a new listing

//make user page that you can see all your listings and bids if you are auth














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

export default App;
