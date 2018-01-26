import React from 'react'

class Label extends React.Component {
  render() {
    return (
      <div className='label'>
        <div>
          <i className={ `fa fa-fw ${this.props.icon}` } />
        </div>
        <label>{ this.props.text }</label>
      </div>
    )
  }
}

export default Label;
