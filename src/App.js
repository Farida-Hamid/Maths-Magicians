import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  // Route,
  // Link,
} from 'react-router-dom';
// import Calculator from './components/calculator';
import Header from './components/Header';


const App = (() => (
  <Router>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} /> */}
    </Routes>
  </Router>
)
);

export default App;
