/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useMemo} from 'react';
import HeaderMenuItem from './HeaderMenuItem';

export default function HeaderMenuScrollLink({children, href}) {
  const MemoizedComponent = useMemo(
    () =>
      function Component(props) {
        function onClick(event) {
          const selector = event.target.getAttribute('href');
          const element = document.querySelector(selector);

          if (element.scrollIntoView) {
            event.preventDefault();
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }

        return <a {...props} href={href} onClick={onClick} />;
      },
    [href]
  );

  return (
    <HeaderMenuItem component={MemoizedComponent}>{children}</HeaderMenuItem>
  );
}
