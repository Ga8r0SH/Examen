import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Facto from './components/Facto/Facto';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/fact" element={<Facto />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;