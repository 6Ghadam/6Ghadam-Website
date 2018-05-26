import React, { Component } from 'react';

import { cdn } from 'Root/config.js';

import styles from './index.less';

class Landing extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={`${cdn}/images/worldcup-logo.png`}
            className={styles.worldcup} />

          <div className={styles.timeContainer}>
            <div className={styles.time}>
              <span className={styles.counter}>15</span>
              <span className={styles.name}>روز</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>3</span>
              <span className={styles.name}>ساعت</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>12</span>
              <span className={styles.name}>دقیقه</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>37</span>
              <span className={styles.name}>ثانیه</span>
            </div>
          </div>

          <h1 className={styles.info}>
            به زودی با بازی پیش بینی مسابقات جام جهانی ۲۰۱۸ روسیه
          </h1>

          <div className={styles.qadam}>
            <img
              src={`${cdn}/images/logo.svg`} />
              <h4>
                شش قدم
              </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
