import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PriceChart from './components/PriceChart';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceChart />
    </div>
  );
}

export default App;