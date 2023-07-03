import React from 'react';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';
import WalletAction from '../../components/WalletAction/WalletAction';

function Wallet() {
  return (
    <div>
      <WalletNavbar />
      <WalletConta1 />
      <WalletAction />
    </div>
  );
}

export default Wallet;
