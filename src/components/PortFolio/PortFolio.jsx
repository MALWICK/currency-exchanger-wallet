import React from 'react';
import './portfolio.css';
import Image1 from '../../Assets/imagesf/sa.png';
import Image2 from '../../Assets/imagesf/sa1.png';
import Image3 from '../../Assets/imagesf/sas.png';
import Image4 from '../../Assets/imagesf/Xe-App-iPhones__1_.png';

function PortFolio() {
  return (
    <div className="port__container">
      <div className="left__port">
        <div className="port__maintext">
          <h1>Build your Portfolio</h1>
          <p>Start your trade with these easy steps</p>
        </div>
        <div className="port__options">
          <div className="port__option1">
            <div className="box__img">
              <img src={Image1} alt="" />
            </div>
            <div className="box__text">
              <h2>Verify your identity</h2>
              <p>
                complete the identity verification process to secure your
                account and transactions
              </p>
            </div>
          </div>
          <div className="port__option1">
            <div className="box__img">
              <img src={Image2} alt="" />
            </div>
            <div className="box__text">
              <h2>Fund your Account</h2>
              <p>
                Add funds to your account to start trading currency. you can add
                funds with a variety of payment methods
              </p>
            </div>
          </div>
          <div className="port__option1">
            <div className="box__img">
              <img src={Image3} alt="" />
            </div>
            <div className="box__text">
              <h2>Start Trading</h2>
              <p>
                Youre good to go!Buy/Sell currencies.set up recurring buys for
                your investments, and discover what Switch Wallet has to offer.
              </p>
            </div>
          </div>
          <div className="port__btn">
            <button type="button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="right__port">
        <img src={Image4} alt="" />
      </div>
    </div>
  );
}

export default PortFolio;
