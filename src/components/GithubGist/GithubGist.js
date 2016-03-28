import React, {Component, PropTypes} from 'react';
import styles from './GithubGist.scss';

// Mostly from http://jsfiddle.net/BinaryMuse/nrb6zxfw/

/**
 * Class level properties and helpers.
 */

// Each time we request a Gist, we'll need to generate a new
// global function name to serve as the JSONP callback.
let gistCallbackId = 0;

function nextGistCallback() {
  return 'embed_gist_callback_' + gistCallbackId++;
}

// The Gist JSON data includes a stylesheet to add to the page
// to make it look correct. `addStylesheet` ensures we only add
// the stylesheet one time.
let stylesheetAdded = false;

function addStylesheet(href) {
  if (!stylesheetAdded) {
    stylesheetAdded = true;
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    document.head.appendChild(link);
  }
}

/**
 * The component itself.
 */
export default class EmbeededGist extends Component {
  static propTypes = {
    gist: PropTypes.string.isRequired, // e.g. 'username/id'
    file: PropTypes.string // to embed a single specific file from the gist
  };

  state = {
    loading: true,
    src: ''
  };

  componentDidMount() {
    // Create a JSONP callback that will set the state
    // with the data that comes back from the Gist site
    let gistCallback = nextGistCallback();
    window[gistCallback] = (gist) => {
      this.setState({
        loading: false,
        src: gist.div
      });
      addStylesheet(gist.stylesheet);
    };

    let url = 'https://gist.github.com/' + this.props.gist + '.json?callback=' + gistCallback;
    if (this.props.file) {
      url += '&file=' + this.props.file;
    }

    // Add the JSONP script tag to the document.
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  render() {
    let children = null;
    let props = {className: styles.root};

    if (this.state.loading) {
      children = <span>Loading Github Gist...</span>;
    } else {
      props.dangerouslySetInnerHTML = {__html: this.state.src};
    }

    return React.createElement('div', props, children);
  }
}
