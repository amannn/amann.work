/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header, {HeaderMenuItem} from 'components/Header';

export default function LocalizedHeader(props) {
  return (
    <Header
      homeLink="/de"
      menu={
        <>
          <HeaderMenuItem
            component={menuItemProps => <Link to="/blog" {...menuItemProps} />}
          >
            Blog
          </HeaderMenuItem>
          <HeaderMenuItem
            component={menuProps => <a href="#kontakt" {...menuProps} />}
          >
            Kontakt
          </HeaderMenuItem>
          <HeaderMenuItem
            color="pale"
            component={menuProps => <Link to="/en" {...menuProps} />}
          >
            EN
          </HeaderMenuItem>
        </>
      }
      {...props}
    />
  );
}
