import React, { Component } from 'react';
import { duration } from 'moment';

import bind from 'Root/js/bind';
import { cdn } from 'Root/config.js';

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
            src={`${cdn}/images/worldcup-logo.png`}
            className={styles.worldcup} />


          <div className={styles.coming}>
            جام‌جهانی ۲۰۱۸ روسیه هم تمام شد
            <br />
            و سفر هیجان‌انگیزمون در محوطه ۶قدم به نقطه پایانی خودش رسید؛
            <br />
            شوت، گل و توی دروازه و تحقق رویای یک جام دیگر در دستان فرانسوی‌ها.
            <br />
          </div>

          <h3 className={styles.info}>
            با شروع مسابقات لیگ فوتبال باز‌می‌گردیم، منتظرمون باشید.
          </h3>

          <div className={styles.qadam}>
            <img
              src={`${cdn}/images/logo.svg`} />
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
