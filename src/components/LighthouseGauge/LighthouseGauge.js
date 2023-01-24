import cx from 'classnames';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import VisibilitySensor from 'components/VisibilitySensor';
import styles from './LighthouseGauge.module.scss';

export default function LighthouseGauge({
  className,
  score,
  scoreLabel = score
}) {
  const t = useTranslations('LighthouseGauge');
  const [animate, setAnimate] = useState(false);

  const maxGaugeArc = 352;
  const gaugeArc = animate ? (score / 100) * maxGaugeArc : 0;

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
            className={styles.gaugeArc}
            cx="60"
            cy="60"
            r="56"
            strokeWidth="8"
            style={{
              transform: 'rotate(-87.9537deg)',
              strokeDasharray: gaugeArc + ', 352'
            }}
          />
        </svg>
      </div>
      <div className={styles.scoreLabel}>{scoreLabel}</div>
      <p className={styles.description}>{t('description')}</p>
    </div>
  );
}
