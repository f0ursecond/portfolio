import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/card';
import About from './components/about';
import Skill from './components/skill';


function App() {
  return (
    <div className='min-h-screen py-10 px5 sm: px-4 bg-gray-100'>
      <Card />
      <About />
      <Skill />
    </div>
  );
}

export default App;
