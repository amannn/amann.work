import React from 'react';
import {Link} from 'gatsby';
import Header, {HeaderMenuItem, HeaderMenuScrollLink} from 'components/Header';

export default function LocalizedHeader(props) {
  return (
    <Header
      homeLink="/en"
      menu={
        <>
          <HeaderMenuItem
            component={menuItemProps => <Link {...menuItemProps} to="/blog" />}
          >
            Blog
          </HeaderMenuItem>
          <HeaderMenuScrollLink href="#contact">Contact</HeaderMenuScrollLink>
          <HeaderMenuItem
            color="pale"
            component={menuItemProps => <Link {...menuItemProps} to="/de" />}
          >
            DE
          </HeaderMenuItem>
        </>
      }
      {...props}
    />
  );
}
