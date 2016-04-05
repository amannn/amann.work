import React, {Component, PropTypes} from 'react';
import {Button} from 'components';
import styles from './ProjectList.scss';

export default class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.array
  };

  render() {
    let {projects} = this.props;

    return (
      <div>
        {projects.map(p =>
          <div key={p.name} className={styles.item}>
            <img className={styles.image} src={p.mainImageUrl} alt={p.title} />
            <div className={styles.text}>
              <h2 className={styles.title}>{p.title}</h2>
              <p className={styles.description}>{p.description}</p>
              <Button
                routerLink={`/projects/${p.name}`}
                className={styles.button}
              >
                Read more
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
