import React, { Component } from 'react';
import { duration } from 'moment';

import bind from 'Root/js/bind';

import styles from './index.less';

let time = new Date(2018, 5, 13, 12).getTime();

class Landing extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  @bind
  estimate() {
    let remain = duration(new Date(time - Date.now()).getTime());

    this.setState({
      days: remain.days(),
      hours: remain.hours(),
      minutes: remain.minutes(),
      seconds: remain.seconds()
    });
  }

  componentWillMount() {
    this.estimate();

    setInterval(() => {
      this.estimate();
    }, 1000);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={require('Root/static/images/worldcup-logo.png')}
            className={styles.worldcup} />

          <div className={styles.timeContainer}>
            <div className={styles.time}>
              <span className={styles.counter}>{this.state.days}</span>
              <span className={styles.name}>روز</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>{this.state.hours}</span>
              <span className={styles.name}>ساعت</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>{this.state.minutes}</span>
              <span className={styles.name}>دقیقه</span>
            </div>

            <div className={styles.time}>
              <span className={styles.counter}>{this.state.seconds}</span>
              <span className={styles.name}>ثانیه</span>
            </div>
          </div>

          <h2 className={styles.info}>
            به زودی با بازی پیش بینی مسابقات
            <br />
            جام جهانی ۲۰۱۸ روسیه
          </h2>

          <div className={styles.qadam}>
            <img
              src={require('Root/static/images/logo.svg')} />
              <h2>
                شش قدم
              </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
