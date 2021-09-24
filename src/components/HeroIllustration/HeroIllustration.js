import {useTransform, useViewportScroll} from 'framer-motion';
import Image from 'next/image';
import {useEffect, useRef} from 'react';
import styles from './HeroIllustration.module.scss';
import sketchBackground from './sketch-background.svg';
import sketchIllustrationBackground from './sketch-illustration-background.svg';
import sketchIllustrationForeground from './sketch-illustration-foreground.svg';

export default function HeroIllustration() {
  const {scrollY} = useViewportScroll();
  const scrollProgress = useTransform(scrollY, [0, 970], [0, 1]);
  const illustrationBackgroundRef = useRef();
  const illustrationForegroundRef = useRef();

  // Apply this manually, as we need to apply `rotate` before
  // `translateY` to get the translation on the transformed
  // axis. This isn't possible with Framer Motion.
  useEffect(() => {
    const illustrationForeground = illustrationForegroundRef.current;
    const illustrationBackground = illustrationBackgroundRef.current;

    const offset = 100;

    scrollProgress.onChange((value) => {
      illustrationBackground.style.transform = `rotate(15deg) translateY(${
        value * offset
      }px)`;
      illustrationForeground.style.transform = `rotate(15deg) translateY(${
        value * -offset
      }px)`;
    });
  }, [scrollProgress]);

  return (
    <div className={styles.root}>
      <div className={styles.sketchBackground}>
        <Image priority src={sketchBackground} />
      </div>
      <div
        ref={illustrationBackgroundRef}
        className={styles.sketchIllustrationBackground}
      >
        <Image priority src={sketchIllustrationBackground} />
      </div>
      <div
        ref={illustrationForegroundRef}
        className={styles.sketchIllustrationForeground}
      >
        <Image priority src={sketchIllustrationForeground} />
      </div>
    </div>
  );
}
