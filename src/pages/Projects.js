import React, {Component, PropTypes} from 'react';
import {Header} from 'components';
import {PageContent, ProjectList} from 'components';

export default class Projects extends Component {
  static propTypes = {
    state: PropTypes.object
  };

  render() {
    let {projects, menus} = this.props.state;

    return (
      <div>
        <Header title="Projects" mini menu={menus.main} />

        <PageContent fullWidth>
          <ProjectList projects={projects} />
        </PageContent>
      </div>
    );
  }
}
