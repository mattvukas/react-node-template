import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    // Specify how to clean up after this effect:
    return () => {};
  }, []); // empty 2nd arg - only runs once

  return (
    <div className="App">
      <header className="App-header">
        <h1>React app is good to go!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>client/src/App.js</code> and save to reload.
        </p>
        <p>Test API call: {users}</p>
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
