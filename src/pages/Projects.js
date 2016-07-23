import React, {Component, PropTypes} from 'react';
import {Header, PageContent, ProjectList} from 'components';

export default class Projects extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render() {
    let {projects, menus} = this.props.model;

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
