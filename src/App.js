import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Math from './components/Math';
import Quotes from './components/Quotes';

const App = (() => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Math />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
  </Router>
)
);

export default App;
