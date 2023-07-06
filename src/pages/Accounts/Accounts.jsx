import React from 'react';
import './account.css';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';
import WalletOPeration from '../../components/WalletOpera/WalletOPeration';

function Accounts() {
  return (
    <div className="accounts">
      <WalletNavbar />
      <WalletConta1 />
      <WalletOPeration />
    </div>
  );
}

export default Accounts;
