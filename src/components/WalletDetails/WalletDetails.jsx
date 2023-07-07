import React from 'react';
import Styles from './walletDetail.module.css';

function WalletDetails() {
  return (
    <div className={Styles.wallet__cont}>
      <div className={Styles.currency__container}>
        <div className={Styles.currency__container_content}>
          <p className={Styles.switch__heading}>
            Switch Wallet Live Exchange Rates
          </p>
          <div className={Styles.currency__mainheading}>
            <h2>Popular currencies</h2>
            <span>
              View more options
              <i className="fa-sharp fa-solid fa-angle-right" />
            </span>
          </div>
          <div className={Styles.currency__name}>
            <div className={Styles.currency__name_container}>
              <div>
                <p>Name</p>
              </div>
              <div className={Styles.center__me}>
                <p>Last Price over 24hr</p>
              </div>
              <div>
                <p>24 Change</p>
              </div>
            </div>
          </div>
          <div className={Styles.currency__name_detail1}>
            <div className={Styles.currency__name_container1}>
              <div className={Styles.currency__name_currency1}>
                <div>
                  <p>United State Dollar</p>
                </div>
                <div>
                  <p>1 USD</p>
                </div>
                <div>
                  <p className={Styles.change__color}>+0.02%</p>
                </div>
              </div>
            </div>
            <div className={Styles.currency__name_container2}>
              <div className={Styles.currency__name_currency2}>
                <div>
                  <p>England Pound eu</p>
                </div>
                <div>
                  <p>1 GBP</p>
                </div>
                <div>
                  <p className={Styles.change__color}>+0.10%</p>
                </div>
              </div>
            </div>
            <div className={Styles.currency__name_container3}>
              <div className={Styles.currency__name_currency3}>
                <div>
                  <p>Swiss Francs SWI</p>
                </div>
                <div>
                  <p>1 CHF</p>
                </div>
                <div>
                  <p className={Styles.change__color_red}>-0.07%</p>
                </div>
              </div>
            </div>
            <div className={Styles.get__started}>
              <div className={Styles.get__started_p}>
                <h2>Sign up now to build your own portfolio for free!</h2>
              </div>
              <div className={Styles.get__started_button}>
                <button type="button">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.ads}>
        <div className={Styles.ads__container}>
          <div className={Styles.add1}>
            <h3>
              <i className="fa-solid fa-dollar-sign" />
              38 billion
            </h3>
            <p>24h trading volume on Currency Exchange</p>
          </div>
          <div className={Styles.add2}>
            <h3>
              350
              <i className="fa-regular fa-plus" />
            </h3>
            <p>Worldwide currencies listed</p>
          </div>
          <div className={Styles.add3}>
            <h3>120 million</h3>
            <p>Registered Users</p>
          </div>
          <div className={Styles.add4}>
            <h3>
              <i className="fa-solid fa-percent" />
              0.10
            </h3>
            <p> Lowest transactions fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletDetails;
