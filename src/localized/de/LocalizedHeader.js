import React from 'react';
import {Link} from 'gatsby';
import Header, {HeaderMenuItem, HeaderMenuScrollLink} from 'components/Header';

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
          <HeaderMenuScrollLink href="#kontakt">Kontakt</HeaderMenuScrollLink>
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
