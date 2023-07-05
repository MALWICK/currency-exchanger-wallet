import React from 'react';
import './Wallet.css';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';

function Wallet() {
  return (
    <div className="wallet">
      <WalletNavbar />
      <WalletConta1 />
    </div>
  );
}

export default Wallet;
