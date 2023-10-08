import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pubs from './pages/pubs';
import Forum from "./pages/forum";
import Vhid from "./pages/login";
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/pubs">паби</Link>
            </li>
            <li><Link to="/forum">форум</Link></li>
            <li><Link to="/login">увійти</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/pubs" element={<Pubs />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Vhid />} />
          <Route path="/" element={<h1>Головна сторінка</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;