import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Navigator';
import Math from './components/Math';

const App = (() => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Math />} />
      {/* <Route path="/quote" element={<Quote />} /> */}
    </Routes>
  </Router>
)
);

export default App;
