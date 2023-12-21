import React from 'react';

const Footer = ({ fact }) => {
  return (
    <footer>
      <p>Current Random Fact: {fact}</p>
    </footer>
  );
};

export default Footer;