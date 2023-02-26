import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navigationbar';
import Home from './home.js';
import Civic from './civic.js';
import Plan from './plan.js';
import Reg from './reg.js';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/RegPage" element={<Reg />}>
          </Route>
          <Route path="/PlanPage" element={<Plan />}>
          </Route>
          <Route path="/CivicPage" element={<Civic />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
