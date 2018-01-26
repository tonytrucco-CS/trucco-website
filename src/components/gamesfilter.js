import React from 'react'
import PropTypes from 'prop-types'

class GamesFilter extends React.Component {
  constructor(props) {
    super();
  }

  setValue(key, val) {
    let temp = {};
    temp[key] = val;
    this.setState(temp);
  }

  render() {
    return (
      <div className='flex'>
        <ul className='filter'>
          <li>
            <p>Platform</p>
          </li>
          <FilterOption
            icon='fa-globe'
            text='All'
            value='all'
            active={ this.props.platform === 'all' }
            setQuery={ this.props.setQuery }
          />
          <FilterOption
            icon='fa-desktop'
            text='PC'
            value='pc'
            active={ this.props.platform === 'pc' }
            setQuery={ this.props.setQuery }
          />
          <FilterOption
            icon='fa-gamepad'
            text='Console'
            value='console'
            active={ this.props.platform === 'console' }
            setQuery={ this.props.setQuery }
          />
        </ul>
      </div>
    )
  }
}
GamesFilter.defaultProps = {
  platform: 'all'
}
GamesFilter.propTypes = {
  platform: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
}


function FilterOption(props) {
  return (
    <li className={ props.active ? 'active' : '' } onClick={ ()=> { props.setQuery(props.value) } }>
      <div>
        <i className={ `fa fa-fw ${props.icon}` } />
        <p className='mobile-hidden'>{ props.text }</p>
      </div>
    </li>
  )
}

export default GamesFilter;
