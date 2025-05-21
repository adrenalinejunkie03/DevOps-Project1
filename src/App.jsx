import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import UserDetail from './Pages/UserDetail';

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <Link to="/">🏠 Home</Link>
          <Link to="/about">ℹ️ About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
