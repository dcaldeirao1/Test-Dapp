import React from 'react';
import EthBalance from './components/EthBalance';
import './App.css';
import MetaMaskConnectButton from './MetaMaskConnectButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Portfolio</h1>
        <EthBalance />
        <MetaMaskConnectButton />
      </header>
    </div>
  );
}

export default App;
