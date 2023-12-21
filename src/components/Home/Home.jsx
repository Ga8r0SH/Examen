import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Hello, Facto!</h1>
      <Link to="/fact">Random Fact</Link>
    </div>
  );
};

export default Home;