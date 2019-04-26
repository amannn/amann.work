/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';

export default function LocalizedHeader(props) {
  return (
    <Header
      homeLink="/en"
      menu={
        <>
          <Header.MenuItem
            component={menuItemProps => <Link to="/blog" {...menuItemProps} />}
          >
            Blog
          </Header.MenuItem>
          <Header.MenuItem
            component={menuItemProps => (
              <a href="#contact" {...menuItemProps} />
            )}
          >
            Contact
          </Header.MenuItem>
          <Header.MenuItem
            color="pale"
            component={menuItemProps => <Link to="/de" {...menuItemProps} />}
          >
            DE
          </Header.MenuItem>
        </>
      }
      {...props}
    />
  );
}
