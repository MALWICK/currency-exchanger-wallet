import React from 'react';
import style from './testi.module.css';
import stars from '../../Assets/imagesf/stars.png';
import jane from '../../Assets/imagesf/jane.png';

function Testimonial() {
  return (
    <div className={style.testi}>
      <div className={style.title}>
        <h1>Real Customer review</h1>
        <p>Heres what our customers are saying about us.</p>
      </div>
      <div className={style.testi__container}>
        <div className={style.card1}>
          <div className={style.stars__cont}>
            <img src={stars} alt="stars" />
          </div>
          <div className={style.testi__text}>
            <p>
              Have ordered from Liquory twice and had good service on each
              order. Good transport communication regarding delivery.Will be
              returning for more sometime soon.
            </p>
          </div>
          <div className={style.jane__cont}>
            <img src={jane} alt="jane" />
          </div>
        </div>
        <div className={style.card1}>
          <div className={style.stars__cont}>
            <img src={stars} alt="stars" />
          </div>
          <div className={style.testi__text}>
            <p>
              Have ordered from Liquory twice and had good service on each
              order. Good transport communication regarding delivery.Will be
              returning for more sometime soon.
            </p>
          </div>
          <div className={style.jane__cont}>
            <img src={jane} alt="jane" />
          </div>
        </div>
        <div className={style.card1}>
          <div className={style.stars__cont}>
            <img src={stars} alt="stars" />
          </div>
          <div className={style.testi__text}>
            <p>
              Have ordered from Liquory twice and had good service on each
              order. Good transport communication regarding delivery.Will be
              returning for more sometime soon.
            </p>
          </div>
          <div className={style.jane__cont}>
            <img src={jane} alt="jane" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
