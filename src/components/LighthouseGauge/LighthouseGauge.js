import cx from 'classnames';
import {useState} from 'react';
import VisibilitySensor from 'components/VisibilitySensor';
import styles from './LighthouseGauge.module.scss';

export default function LighthouseGauge({className, score}) {
  const [animate, setAnimate] = useState(false);
  const maxGaugeArc = 352;
  const gaugeArc = (score / 100) * maxGaugeArc;

  function onVisible() {
    setAnimate(true);
  }

  return (
    <div className={cx(className, styles.wrapper, styles.wrapperPass)}>
      <VisibilitySensor onVisible={onVisible} />
      <div className={styles.svgWrapper}>
        <svg className={styles.gauge} viewBox="0 0 120 120">
          <circle
            className={styles.gaugeBase}
            cx="60"
            cy="60"
            r="56"
            strokeWidth="8"
          />
          <circle
            // animate="end"
            className={cx(styles.gaugeArc, animate && styles.gaugeArcAnimated)}
            cx="60"
            cy="60"
            // initial="start"
            r="56"
            strokeWidth="8"
            style={{
              transform: 'rotate(-87.9537deg)',
              strokeDasharray: gaugeArc + ', 352'
            }}
            // variants={{
            //   start: {
            //     strokeDasharray: '0, 352'
            //   },
            //   end: {
            //     strokeDasharray: gaugeArc + ', 352'
            //   }
            // }}
          />
        </svg>
      </div>
      <div className={styles.percentage}>{score}</div>
    </div>
  );
}
