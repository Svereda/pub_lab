import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pubs from './pages/pubs';
import Forum from "./pages/forum";
import Vhid from "./pages/login";
import Golovna from "./pages/golovna";
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/golovna">Головна</Link>
              </li>
              <li>
                <Link to="/pubs">паби</Link>
              </li>
              <li>
                <Link to="/forum">форум</Link>
              </li>
              <li>
                <Link to="/login">увійти</Link>
              </li>
            </ul>
          </nav>
        </div>
        

        <Routes>
          <Route path="/pubs" element={<Pubs />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Vhid />} />
          <Route path="/golovna" element={<Golovna/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;