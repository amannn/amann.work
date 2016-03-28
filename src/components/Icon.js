import React, {PropTypes, Component} from 'react';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    fill: PropTypes.string,
    opacity: PropTypes.number,
    size: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    fill: 'white',
    size: 24
  };

  icons = {
    'close': (
      <g id="close">
        <polygon points="19,6.4 17.6,5 12,10.6 6.4,5 5,6.4 10.6,12 5,17.6 6.4,19 12,13.4 17.6,19 19,17.6 13.4,12 "></polygon>
      </g>
    ),

    'chevron-left': (
      <g id="chevron-left">
        <polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "></polygon>
      </g>
    ),

    'chevron-right': (
      <g id="chevron-right">
        <polygon points="10,6 8.6,7.4 13.2,12 8.6,16.6 10,18 16,12 "></polygon>
      </g>
    ),

    'mail': (
      <g id="mail">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </g>
    ),

    'document': (
      <g id="document">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </g>
    ),

    'flower-outline': (
      <g id="flower-outline" stroke="#8FC1B7">
        <path x="1" d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>
      </g>
    ),

    'heart-outline': (
      <g id="heart-outline" stroke="#8FC1B7">
        <g transform="translate(2.000000, 3.000000)">
          <path d="M14.5,0 C12.76,0 11.09,0.81 10,2.09 C8.91,0.81 7.24,0 5.5,0 C2.42,0 0,2.42 0,5.5 C0,9.28 3.4,12.36 8.55,17.04 L10,18.35 L11.45,17.03 C16.6,12.36 20,9.28 20,5.5 C20,2.42 17.58,0 14.5,0 L14.5,0 Z" id="heart-outline"></path>
        </g>
      </g>
    ),

    'lightning-bolt': (
      <g id="lightning-bolt" fill="#8FC1B7">
        <path d="M18,10.000125 L12.99925,10.000125 L15.00025,0 L6,14.000375 L10.99925,14.000375 L8.9995,24 L18,10.000125 L18,10.000125 Z M8.00075,13.0003125 L12.50075,6.06262891 L11.50075,11.0001875 L16.00125,11.0001875 L11.50075,18.000125 L12.50075,13.0003125 L8.00075,13.0003125 L8.00075,13.0003125 Z"></path>
      </g>
    )
  };

  render() {
    let {name, fill, size, opacity, className} = this.props;
    let icon = this.icons[name];

    return (
      <svg style={{fill, opacity, width: size, height: size}}
           className={className}
           viewBox={`0 0 ${size} ${size}`}
           xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
    );
  }
}
