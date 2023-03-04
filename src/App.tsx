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