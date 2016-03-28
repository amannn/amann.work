import React, {Component, PropTypes} from 'react';
import {PageContent, Header} from 'components';

export default class Project extends Component {
  static propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object,
    params: PropTypes.object
  };

  render() {
    let {state, params} = this.props;
    let {projects, menus} = state;

    let project = projects.filter(
      cur => cur.name === params.name
    )[0];

    let headerProps = {
      menu: menus.main,
      animateText: true,
      background: {
        type: 'image',
        url: project.bgImageUrl,
        blends: project.bgImageBlends
      },
      title: project.title,
      description: project.description,
      feature: project.feature,
      // No `animateText`, because this would make the image transparent
      // and for some viewports the line would shine through the image.
    };

    return (
      <div>
        <Header {...headerProps} />
        <PageContent>
          {project.bodyContent}
        </PageContent>
      </div>
    );
  }
}
