import React, { useContext } from 'react';
import Styles from './Wallet.module.css';
import CurrencyExchanger from '../../Context/Context';
import Clone from '../../Assets/imagesf/clone.jpg';

function Wallet() {
  const currencyFetch = useContext(CurrencyExchanger);
  /* console.log(currencyFetch.rates, setCurrencyFetch); */
  console.log(currencyFetch);
  return (
    <div className={Styles.wallet}>
      <div className={Styles.wallet__container}>
        <div className={Styles.left__container}>
          <div className={Styles.column__argon}>
            <div className={Styles.argon}>
              <div className={Styles.argon__text}>
                <i className="fa-brands fa-dropbox" />
                <p>switch</p>
              </div>
            </div>
            <hr className={Styles.hr__argon} />
          </div>
          <div className={Styles.column__clone}>
            <div className={Styles.column__clone_container}>
              <div className={Styles.img__holder}>
                <img src={Clone} alt="jane" />
              </div>
              <div className={Styles.text__holder_clone}>
                <h4 className={Styles.text__title}>Jane Doe</h4>
                <p>Prenium customer</p>
              </div>
            </div>
            <hr className={Styles.hr__clone} />
          </div>
          <div className={Styles.options}>
            <div className={Styles.options1}>
              <div>
                <i className="fa-solid fa-tv" />
              </div>
              <div>Dashboard</div>
            </div>

            <div className={Styles.options2}>
              <div>
                <i className="fa-solid fa-globe" />
              </div>
              <div>icons</div>
            </div>
            <div className={Styles.options3}>
              <div>
                <i className="fa-solid fa-cloud" />
              </div>
              <div>Maps</div>
            </div>
            <div className={Styles.options4}>
              <div>
                <i className="fa-solid fa-table-cells-large" />
              </div>
              <div>Tables</div>
            </div>
            <div className={Styles.options5}>
              <div>
                <i className="fa-solid fa-lock" />
              </div>
              <div>Logins</div>
            </div>
            <div className={Styles.options6}>
              <div>
                <i className="fa-sharp fa-solid fa-key" />
              </div>
              <div>Register</div>
            </div>
          </div>
          <div className={Styles.help}>
            <div className={Styles.help__container}>
              <div className={Styles.help__container1}>
                <div className={Styles.help__container1_text}>
                  <h4> need help ?</h4>
                  <p>
                    <span className={Styles.blur}>please verify our</span> Docs
                  </p>
                </div>
                <div className={Styles.help__container1_button}>
                  <button type="button">Documentation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.right__container}>
          <div className={Styles.right__container_content}>
            <div className={Styles.navbar}>
              <div className={Styles.elon}>
                <span>New!Live Interview with Elon Musk</span>
              </div>
              <div className={Styles.left__navnar}>
                <div className={Styles.flex__box}>
                  <div>
                    <p>
                      USD
                      <i className="fa-solid fa-arrow-right" />
                      XCFA:
                    </p>
                    <span>2.600</span>
                  </div>
                  <div>
                    <p>
                      USD
                      <i className="fa-solid fa-arrow-right" />
                      EUR:
                    </p>
                    <span>0.6690</span>
                  </div>
                </div>
                <div className={Styles.icon__container}>
                  <i className="fa-solid fa-calendar" />
                  <i className="fa-solid fa-laptop" />
                  <i className="fa-solid fa-bell" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
