/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';

export default function LocalizedHeader(props) {
  return (
    <Header
      homeLink="/de"
      menu={
        <>
          <Header.MenuItem
            component={menuItemProps => <Link to="/blog" {...menuItemProps} />}
          >
            Blog
          </Header.MenuItem>
          <Header.MenuItem
            component={menuProps => <a href="#kontakt" {...menuProps} />}
          >
            Kontakt
          </Header.MenuItem>
          <Header.MenuItem
            color="pale"
            component={menuProps => <Link to="/en" {...menuProps} />}
          >
            EN
          </Header.MenuItem>
        </>
      }
      {...props}
    />
  );
}
