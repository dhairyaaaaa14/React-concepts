import React from "react";
//Component to understand the concept of Routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        

        <Route path="/users" element={<Users />}></Route>
        

        <Route path="/" element={<Home />}></Route>
        
      </Routes>
    </Router>
  );
}

export default Routing;

function Home() {
  return <h1>Hello Home</h1>;
}

function Users() {
  return <h1>Hello Users</h1>;
}

function About() {
  return <h1>hello About</h1>;
}
