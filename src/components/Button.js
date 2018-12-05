import React from 'react';
import '../App.css';


export default ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);