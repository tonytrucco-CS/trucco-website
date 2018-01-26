import React from 'react'

class BackLink extends React.Component {
  render() {
    return (
      <a>
        <div className='back-link' onClick={ this.props.history.goBack }>
          <div>
            <i className='fa fa-fw fa-fast-backward' />
          </div>
          <p>Rewind to Previous Screen</p>
        </div>
      </a>
    )
  }
}

export default BackLink;
