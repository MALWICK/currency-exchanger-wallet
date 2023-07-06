import React from 'react';
import './Wallet.css';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';
import WalletDetails from '../../components/WalletDetails/WalletDetails';
import WalletActtion from '../../components/WalletAction/WalletAction';
import PortFolio from '../../components/PortFolio/PortFolio';

function Wallet() {
  return (
    <div className="wallet">
      <WalletNavbar />
      <WalletConta1 />
      <WalletActtion />
      <WalletDetails />
      <PortFolio />
    </div>
  );
}

export default Wallet;
