import React, { useState, useEffect } from 'react';
import { providers, utils } from 'ethers';

const EthBalance = () => {
  const [ethBalance, setEthBalance] = useState(null);

  useEffect(() => {
    const fetchEthBalance = async () => {
      try {
        console.log('Fetching ETH balance...');
        if (window.ethereum) {
          const provider = new providers.Web3Provider(window.ethereum);
          console.log('Provider:', provider);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log('Address:', address);
          const balance = await provider.getBalance(address);
          console.log('Balance:', balance);
          const formattedBalance = utils.formatEther(balance);
          console.log('Formatted Balance:', formattedBalance);
          setEthBalance(formattedBalance);
        } else {
          console.log('MetaMask not detected.');
        }
      } catch (error) {
        console.error('Error fetching ETH balance:', error);
      }
    };

    fetchEthBalance();
  }, []);

  return (
    <div>
      <h2>ETH Balance:</h2>
      {ethBalance !== null ? (
        <p>{ethBalance} ETH</p>
      ) : (
        <p>Loading ETH balance...</p>
      )}
    </div>
  );
};

export default EthBalance;
