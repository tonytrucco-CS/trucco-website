import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

class SortFilter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    }
    this.contentCheck = this.contentCheck.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.contentCheck)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.contentCheck)
  }

  contentCheck(e) {
    if (!e.target.classList.contains('drop-link')) {
      this.setState({
        show: false
      })
    }
  }

  setValue(key, val) {
    let temp = {};
    temp[key] = val;
    this.setState(temp);
  }

  render() {
    let selected = _.find(this.props.options, (option)=> {
      return option.value === this.props.selected
    })
    if (!selected) {
      selected = this.props.options[0];
    }
    return (
      <div className='flex end'>
        <div className='dropdown' onClick={ ()=> { this.setValue('show', !this.state.show) } }>
          <p className={ this.state.show ? 'active' : '' }>
            <span>{ this.props.title }</span>
            <span><strong>{ selected.name }</strong></span>
            <i className='fa fa-chevron-down' />
          </p>
          { this.state.show &&
            <Options
              selected={ selected }
              setQuery={ this.props.setQuery }
              options={ this.props.options }
            />
          }
        </div>
      </div>
    )
  }
}
SortFilter.defaultProps = {
  options: [],
  selected: '',
  title: 'Sort By'
}
SortFilter.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
}


function Options(props) {
  return (
    <ul>
      {
        _.map(props.options, (option)=> {
          return (
            <li
              key={ option.value }
              onClick={ ()=> { props.setQuery(option.value) } }
              className={ option.value === props.selected.value ? 'active' : '' }
            >
              <p className='drop-link'>{ option.name }</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SortFilter;
