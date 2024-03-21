import React, { useState, useEffect } from 'react';

const MetaMaskConnectButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const fetchWalletAddress = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const address = accounts[0];
            console.log('Connected to MetaMask:', address);
            setWalletAddress(address);
          } else {
            setWalletAddress(null);
          }
        } catch (error) {
          console.error('Error fetching MetaMask accounts:', error);
        }
      }
    };

    fetchWalletAddress();
  }, []); // Run effect only once on component mount

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        console.log('Connected to MetaMask:', address);
        setWalletAddress(address);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  const disconnectMetaMask = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(null);
      console.log('Disconnected from MetaMask');
    } catch (error) {
      console.error('Error disconnecting from MetaMask:', error);
    }
  };
  

  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Connected Wallet Address: {walletAddress}</p>
          <button onClick={disconnectMetaMask}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connectMetaMask}>Connect MetaMask Wallet</button>
      )}
    </div>
  );
};

export default MetaMaskConnectButton;
