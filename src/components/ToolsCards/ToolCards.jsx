import React from 'react';
import './tool.css';
import Image1 from '../../Assets/imagesf/send.png';
import Image2 from '../../Assets/imagesf/chart.png';
import Image3 from '../../Assets/imagesf/bell.png';

function ToolCards() {
  return (
    <div className="tools">
      <h1>The worlds most popular currency tools</h1>
      <div className="tools__inner">
        <div className="tools__card">
          <div className="card__inner">
            <div className="tools__card__img">
              <img src={Image1} alt="" />
            </div>
            <div className="tools__card__text1">
              <h2>Sw International Money Transfer</h2>
            </div>
            <div className="tools__card__text2">
              <p>
                Send money online fast, secure and easy. Live tracking and
                notifications + flexible delivery and payment options.
              </p>
            </div>
            <div className="btn__cont">
              <button type="button">Send Money</button>
            </div>
          </div>
        </div>
        <div className="tools__card">
          <div className="card__inner">
            <div className="tools__card__img">
              <img src={Image2} alt="" />
            </div>
            <div className="tools__card__text1">
              <h2>Switch Currency Charts </h2>
            </div>
            <div className="tools__card__text2">
              <p>
                Create a chart for any currency pair in the world to see their
                currency history. These currency charts use live mid-market
                rates, are easy to use, and are very reliable.
              </p>
            </div>
            <div className="btn__cont">
              <button type="button">View Charts</button>
            </div>
          </div>
        </div>
        <div className="tools__card">
          <div className="card__inner">
            <div className="tools__card__img">
              <img src={Image3} alt="" />
            </div>
            <div className="tools__card__text1">
              <h2>Switch Rate Alerts</h2>
            </div>
            <div className="tools__card__text2">
              <p>
                Need to know when a currency hits a specific rate? The Xe Rate
                Alerts will let you know when the rate you need is triggered on
                your selected currency pairs.
              </p>
            </div>
            <div className="btn__cont">
              <button type="button">Create alert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCards;
