import React from 'react'

import classNames from 'classnames'

class CircleProfile extends React.Component {
  constructor(props) {
    super();
    this.click = this.click.bind(this);
  }

  click() {
    if (this.props.click) {
      this.props.click();
    } else {
      window.open(this.props.url, '_blank');
    }
  }

  render() {
    let imgClass = classNames(
      'artist-image',
      (this.props.click || this.props.url) ? 'clickable' : ''
    )
    return (
      <div>
        <div
          onClick={ (this.props.click || this.props.url) ? this.click : null }
          className={ imgClass }
          style={{ backgroundImage: 'url("' + process.env.PUBLIC_URL + this.props.image + '")' }}
        >
        </div>
      </div>
    )
  }
}

export default CircleProfile;
