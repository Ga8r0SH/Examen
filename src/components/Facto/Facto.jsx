import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Facto = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchRandomFact = async () => {
      try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        setFact(response.data.text);
      } catch (error) {
        console.error('Error fetching random fact:', error);
      }
    };

    fetchRandomFact();
    console.log(fact)
  }, []);

  return (
    <div>
      <h2>Random Fact:</h2>
      <p>{fact}</p>
    </div>
  );
};

export default Facto;