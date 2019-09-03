/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header, {HeaderMenuItem} from 'components/Header';

export default function LocalizedHeader(props) {
  return (
    <Header
      homeLink="/en"
      menu={
        <>
          <HeaderMenuItem
            component={menuItemProps => <Link to="/blog" {...menuItemProps} />}
          >
            Blog
          </HeaderMenuItem>
          <HeaderMenuItem
            component={menuItemProps => (
              <a href="#contact" {...menuItemProps} />
            )}
          >
            Contact
          </HeaderMenuItem>
          <HeaderMenuItem
            color="pale"
            component={menuItemProps => <Link to="/de" {...menuItemProps} />}
          >
            DE
          </HeaderMenuItem>
        </>
      }
      {...props}
    />
  );
}
