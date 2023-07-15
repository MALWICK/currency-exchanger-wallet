import React from 'react';
import './account.css';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';
import WalletOPeration from '../../components/WalletOpera/WalletOPeration';
import WalletDetails from '../../components/WalletDetails/WalletDetails';
import PortFolio from '../../components/PortFolio/PortFolio';
import Testimonial from '../../components/testi/Testimonial';
import Banner from '../../components/Banner/Banner';

function Accounts() {
  return (
    <div className="accounts">
      <WalletNavbar />
      <WalletConta1 />
      <WalletOPeration />
      <WalletDetails />
      <PortFolio />
      <Testimonial />
      <Banner />
    </div>
  );
}

export default Accounts;
