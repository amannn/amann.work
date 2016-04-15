import React, {Component, PropTypes} from 'react';
import {DOMUtils, EnvUtils} from 'utils';
import {Footer} from 'components';
import model from 'model';
import './App.scss'; // Exposes only global CSS.

/**
 * This component passes `model` down to every child component.
 */
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  /**
   * So there are no empty header images when navigating to a project page.
   */
  preloadProjectImages() {
    // The inner `map` function returns an array of arrays. This can be passed
    // to `concat.apply` to flatten the array, since apply accepts an array
    // of parameters as the second parameter. However, a native `flatMap` would
    // be way cooler – hopefully TC39 will take this on soon.
    let images = Array.prototype.concat.apply([],
      model.projects
        .filter(project => project.feature.type === 'image')
        .map(project => [
          project.feature.url,
          project.mainImageUrl,
          project.bgImageUrl
        ])
    );

    DOMUtils.preloadImages(images);
  }

  render() {
    let {children} = this.props;

    if (EnvUtils.isClient()) this.preloadProjectImages();

    return (
      <div>
        {React.cloneElement(children, {model})}
        <Footer menu={model.menus.footer} />
      </div>
    );
  }
}
