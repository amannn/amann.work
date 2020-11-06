import cx from 'classnames';
import React, {Children} from 'react';
import styles from './ProjectVisual.module.scss';

export default function ProjectVisual({children, className}) {
  const childrenArray = Children.toArray(children);

  function isChildMobile(child) {
    return [undefined, 'mobile'].includes(child.props.type);
  }

  function isChildDesktop(child) {
    return child.props.type === 'desktop';
  }

  let layout;
  if (childrenArray.every(isChildMobile)) {
    layout = 'mobiles';
  } else {
    layout = 'mixed';
  }

  return (
    <div className={cx(styles.root, className)}>
      {layout === 'mobiles' ? (
        <div className={styles.mobiles}>{children}</div>
      ) : (
        <>
          <div className={styles.desktops}>
            {childrenArray.filter(isChildDesktop)}
          </div>
          <div className={cx(styles.mixedMobiles, styles.mobiles)}>
            {childrenArray.filter(isChildMobile)}
          </div>
        </>
      )}
    </div>
  );
}
