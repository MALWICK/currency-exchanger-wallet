import React from 'react';
import './Wallet.css';
import WalletNavbar from '../../components/WalletNavBar/WalletNavbar';
import WalletConta1 from '../../components/WalletCont1/WalletConta1';
import WalletActtion from '../../components/WalletAction/WalletAction';
import WalletDetails from '../../components/WalletDetails/WalletDetails';
import PortFolio from '../../components/PortFolio/PortFolio';
import ToolsCard from '../../components/ToolsCards/ToolCards';
import Banner from '../../components/Banner/Banner';
import Testi from '../../components/testi/Testimonial';

function Wallet() {
  return (
    <div className="wallet">
      <WalletNavbar />
      <WalletConta1 />
      <WalletActtion />
      <WalletDetails />
      <PortFolio />
      <ToolsCard />
      <Testi />
      <Banner />
    </div>
  );
}

export default Wallet;
