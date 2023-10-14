import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'; // Додайте Navigate
import Pubs from './pages/pubs';
import Forum from "./pages/forum";
import Vhid from "./pages/login";
import Golovna from "./pages/golovna";
import './styles.css';
import logotyp from './image/logo.png'
import login from './image/login.png'

function App() {
  return (
    <Router>
      <div className="App">
        
        
        <div className="header">
          <div className="container">
            <div className="header-line">
              <div className="header-logo">
                <img src={logotyp} alt="Логотип" className="logo"/>
              </div>

              <div className="nav">
                <ul>
                  <Link className="nav-item" to="/golovna">ГОЛОВНА</Link>
                  <Link className="nav-item" to="/pubs">ПАБИ</Link>
                  <Link className="nav-item" to="/forum">ФОРУМ</Link>
                </ul>
              </div>

              <div className="card">
                <Link className="nav-item" to="/login"><img src={login} alt="Логотип" className="logo" /></Link>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/pubs" element={<Pubs />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Vhid />} />
          <Route path="/golovna" element={<Golovna />} />
          <Route path="/" element={<Navigate to="/golovna" />} />
        </Routes>

        <footer className="footer">
          Copyright © Svereda
        </footer>

      </div>
    </Router>
  );
}

export default App;
//#212529