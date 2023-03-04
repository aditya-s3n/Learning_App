import React from 'react'
import './App.css'
import Learn from './Learn'
import Home from './Home';

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
      return <Home />;
    
    case "Learn":
      return <Learn />;

    case "404":
      return <h1>404</h1>;

    default:
      <Home />;
  }
}

export default App;