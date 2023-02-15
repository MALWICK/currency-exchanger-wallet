import React from 'react';
import { Link } from 'react-router-dom';
import PasiveNavBar from '../../components/Pasive__Navbar/PasiveNavBar';
import Styles from './Welcome.module.css';
import TechDaily from '../../Assets/imagesf/techdaily.jpg';
import Stats from '../../Assets/imagesf/stats.jpg';
import Crypto from '../../Assets/imagesf/crypto.jpg';
import Card from '../../Assets/imagesf/card.jpg';

function Welcome() {
  return (
    <div className={Styles.welcome}>
      <div className={Styles.navbar}>
        <div className={Styles.logo}>
          <img
            src="https://switchwallet.io/assets/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className={Styles.nav__links_page}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/wallet">Wallet</a>
          <a href="/balance">Balance</a>
          <a href="/converter">Converter</a>
          <a href="/privacy">Privacy</a>
        </div>
        <div className={Styles.nav__signu_login}>
          <div className={Styles.login}>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
          <div className={Styles.register}>
            <button type="button" className={Styles.register__btn}>
              <a href="/register">Register</a>
            </button>
            <div className={Styles.register__icons}>
              <i className="fa-solid fa-gift" />|
              <i className="fa-solid fa-globe" />|
              <i className="fa-solid fa-circle-half-stroke" />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.passive__navbar}>
        <PasiveNavBar />
      </div>
      <div className={Styles.body__content}>
        <div className={Styles.body__content_container}>
          <div className={Styles.left__content_container}>
            <div className={Styles.left__text_container}>
              <div className={Styles.left__text}>
                <h1>Welcome to SwitchWallet</h1>
                <p>
                  SwitchWallet is a decentralized wallet that allows you to
                  create and manage your wallets.
                </p>
                <h2>Easy And Secure Wallet Infrastructure For Your Business</h2>
                <p>
                  SwitchWallet is an enterprise-grade wallet provision service.
                  Leveraging our technology, you can securely process
                  transactions in a fraction of the time while saving cost.
                </p>
              </div>
              <div className={Styles.left__container_signup}>
                <div className={Styles.signup__trade}>
                  <i className="fa-solid fa-gift" />
                  <p>Trade your currencies free </p>
                  <div className={Styles.second__icon}>
                    <i className="fa-sharp fa-solid fa-angle-right" />
                  </div>
                </div>
                <div className={Styles.signup__options}>
                  <Link to="/wallet">
                    <button type="button">
                      <i className="fa-solid fa-user" />
                      Sign up with Email or Phone
                    </button>
                  </Link>
                </div>
                <div className={Styles.other__signup_methods}>
                  <div className={Styles.paragraph__break}>
                    <div>
                      <div>
                        <p>or continue with</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={Styles.signup__button}>
                  <button type="button">
                    <i className="fa-brands fa-google" />
                  </button>
                  <button type="button">
                    <i className="fa-brands fa-apple" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.right__content_container}>
            <div className={Styles.img__holder}>
              <img
                src={TechDaily}
                alt="mobile wallet"
                className={Styles.web__img}
              />
              <img src={Stats} alt="statistic" className={Styles.web__img_1} />
              <img src={Crypto} alt="crypto" className={Styles.web__img} />
              <img src={Card} alt="credit__card" className={Styles.web__img} />
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
      <div className={Styles.currency__container}>
        <div className={Styles.currency__container_content}>
          <div className={Styles.currency__mainheading}>
            <h2>Popular currencies</h2>
            <span>
              View more options
              <i className="fa-sharp fa-solid fa-angle-right" />
            </span>
          </div>
          <div className={Styles.currency__name}>
            <div className={Styles.currency__name_container}>
              <p>Name</p>
              <p>Last Price over 24hr</p>
              <p>24 Change</p>
            </div>
          </div>
          <div className={Styles.currency__name_detail1}>
            <div className={Styles.currency__name_container1}>
              <div className={Styles.currency__name_currency1}>
                <p>United State Dollar</p>
                <p>1 USD</p>
                <p className={Styles.change__color}>+0.02%</p>
              </div>
            </div>
            <div className={Styles.currency__name_container2}>
              <div className={Styles.currency__name_currency2}>
                <p>England Pound eu</p>
                <p>1 GBP</p>
                <p className={Styles.change__color}>+0.10%</p>
              </div>
            </div>
            <div className={Styles.currency__name_container3}>
              <div className={Styles.currency__name_currency3}>
                <p>Swiss Francs SW</p>
                <p>1 CHF</p>
                <p className={Styles.change__color_red}>-0.07%</p>
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
            <div className={Styles.propagander}>
              <div className={Styles.propagander__title}>
                <h2> Fast and Simple Exchange For Your Business</h2>
                <p>Built for your business to connect more customers</p>
              </div>
              <div className={Styles.propagander__info1}>
                <div className={Styles.propagander__info1_imgholder}>
                  <img
                    src="https://switchwallet.io/assets/images/home2.png"
                    alt="orportunities"
                  />
                </div>
                <div className={Styles.propagander__info1_textholder}>
                  <div className={Styles.propagander__info1_h3}>
                    <h3>Multichain currency Wallet API</h3>
                  </div>
                  <p>
                    Digital assets are the new world currency. SwitchWallet
                    provides an API infrastructure service that allows you to
                    transact digital assets,
                    <br /> across multiple chains and guarantee high-level
                    security for your transactions.
                  </p>
                </div>
              </div>
              <div className={Styles.propagander__info2}>
                <div className={Styles.propagander__info2_textholder}>
                  <div className={Styles.propagander__info2_h3}>
                    <h3>Secure, Low-Cost Wallet Service</h3>
                  </div>
                  <div className={Styles.propagander__info2_p}>
                    <p>
                      We help businesses save time and money building solutions
                      on the blockchain. With our easy and simple setup process,
                      well have you enjoying our service in no time.
                      SwitchWallet offers the best competitive rates, fast
                      crypto transactions, and a variety of customizable
                      features to help your business succeed.
                    </p>
                  </div>
                </div>
                <div className={Styles.propagander__info2_imgholder}>
                  <img
                    src="https://switchwallet.io/assets/images/home3.png"
                    alt="options"
                  />
                </div>
              </div>
              <div className={Styles.propagander__info3}>
                <div className={Styles.propagander__info3_imgholder}>
                  <img
                    src="https://switchwallet.io/assets/images/home4.png"
                    alt="choices"
                  />
                </div>
                <div className={Styles.propagander__info3_textholder}>
                  <div className={Styles.propagander__info2_h3}>
                    <h3>Supports Multiple Currencies</h3>
                  </div>
                  <p>
                    SwitchWallet supports transactions in multiple
                    cryptocurrencies such as BUSD, USDT, USDC, DAI and others
                  </p>
                  {/*  <img
                    src="https://www.nab.com.au/personal/accounts/savings-accounts/nab-isaver/_jcr_content/root/banner/image.coreimg.90.1920.jpeg/1666934085946/isaver-social-and-onsite-banner-1920x690.jpeg"
                    alt="slide"
                  /> */}
                </div>
              </div>
            </div>
            <div className={Styles.inquiries__container}>
              <div className={Styles.inquiries__h3}>
                <h3>Need help? </h3>
              </div>
              <div className={Styles.inquiries__flexcontainer}>
                <div className={Styles.inquiries__support}>
                  <h4>
                    <i className="fa-solid fa-headset" />
                    24/7 Chat Support
                  </h4>
                  <p>
                    Join our 24/7 chat support group to get in touch with your
                    customers.
                  </p>
                  <span>Chat now</span>
                </div>
                <div className={Styles.inquiries__faq}>
                  <h4>
                    <i className="fa-solid fa-message" />
                    FAQs
                  </h4>
                  <p>
                    View FAQs for detailed instructions on specific features.
                  </p>
                  <span>Learn More</span>
                </div>
                <div className={Styles.inquiries__blog}>
                  <h4>
                    <i className="fa-solid fa-newspaper" />
                    Blog
                  </h4>
                  <p>Stay up to date with the latest stories and commentary.</p>
                  <span>Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
