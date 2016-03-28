import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {IconButton} from 'components';
import styles from './Footer.scss';

export default class Footer extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  render() {
    let {menu} = this.props;

    let socialLinks = [
      {
        url: 'mailto:jan@amann.me',
        image: 'mail.svg',
        name: 'jan@amann.me'
      }, {
        url: 'https://github.com/amannn',
        image: 'github.svg',
        name: 'Github'
      }, {
        url: 'https://twitter.com/jamannnnnn',
        image: 'twitter.svg',
        name: 'Twitter'
      }, {
        url: 'https://linkedin.com/in/amannn',
        image: 'linkedin.svg',
        name: 'Linked In'
      }
    ];

    return (
      <footer className={styles.root}>
        <div className={styles.links}>
          {menu.map(item =>
            <Link key={item.url} className={styles.link} to={item.url}>{item.name}</Link>
          )}
        </div>
        <div className={styles.social}>
          {socialLinks.map(link =>
            <IconButton key={link.url} href={link.url}
                        target="_blank"
                        className={styles.socialIcon}>
              <span className={styles.socialImg}
                    style={{
                      backgroundImage: `url(${require('./images/' + link.image)})`
                    }}>
                Github
              </span>
            </IconButton>
          )}
        </div>
      </footer>
    );
  }
}
