import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import chatgpt from './chatgptapi'


function App() {
  const [count, setCount] = useState(0)
  chatgpt()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
import React from 'react'
import Learn from './Learn'
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const pathname = window.location.pathname;
  let page = "Home";

  if (pathname === "/") {
    page = "Home";
  } 
  else if (pathname === "/learn") {
    page = "Learn";
  }
  else {
    page = "404";
  }
  
  switch (page) {
    case "Home":
      return (
        <div>
          <Navbar />
          <Home />
        </div>
      );
    
    case "Learn":
      return (
        <div>
          <Navbar />
          <Learn />
        </div>
      );

    case "404":
      return (
        <div>
          <Navbar />
          <h1>404</h1>
        </div>
      );

    default:
      return (
        <div>
          <Navbar />
          <Home />
        </div>
      );
  }
}

export default App;