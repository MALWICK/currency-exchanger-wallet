import React from 'react';
import './WalletAction.css';

function WalletAction() {
  return (
    <div className="wallet__action">
      <div className="wallet__action__innerContainer">
        <div className="firstwallet__Div">
          <div className="walletdiv1">
            <p className="convert">Convert</p>
          </div>
          <div className="walletdiv1">
            <p className="convert">Send</p>
          </div>
          <div className="walletdiv1">
            <p className="convert">Charts</p>
          </div>
          <div className="walletdiv1">
            <p className="convert">Alert</p>
          </div>
        </div>
        <div className="secondwallet__Div">
          <div className="input__div">
            <span>Amount</span>
            <input
              type="number"
              placeholder="Enter the amount to be converted"
            />
          </div>
          <div className="input__div">
            <span>From</span>
            <input
              type="number"
              placeholder="Enter the amount to be converted"
            />
          </div>
          <div className="convert__logoAction">
            <span className="convertAction">
              <i className="fa-solid fa-repeat" />
            </span>
          </div>
          <div className="input__div">
            <span>To</span>
            <input
              type="number"
              placeholder="Enter the amount to be converted"
            />
          </div>
        </div>
        <div className="text__action__button">
          <div className="text">
            <p>
              We use mid-makert rate for our Converter. This is for
              informational purposes only. <br /> tou wont recieve this rate
              when sending Money.
              <span className="check___rates">Check send rates</span>
            </p>
          </div>
          <div className="btn__div">
            <button type="button">Convert</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletAction;
