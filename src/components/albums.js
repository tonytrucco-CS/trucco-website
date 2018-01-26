import React from 'react'
import PropTypes from 'prop-types'

import Swipeable from 'react-swipeable'
import _ from 'lodash'
import classNames from 'classnames'

import AlbumList from './albumlist'

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      display: 1
    }
    this.contentCheck = this.contentCheck.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.contentCheck)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.contentCheck)
  }

  contentCheck(e) {
    if (!e.target.classList.contains('fa') && !e.target.classList.contains('albums') && !e.target.classList.contains('album-ul') && !e.target.classList.contains('album-nav')) {
      this.props.clearArtist();
    }
  }

  navigate(direction) {
    let index = _.cloneDeep(this.state.index);
    if (direction === 'left') {
      index = index-this.state.display;
      if (index < 0) {
        index = 0;
      }
    } else {
      index = index+this.state.display;
      if (index > this.props.albums.length-this.state.display-1) {
        index = this.props.albums.length-this.state.display;
      }
    }
    this.setState({
      index: index
    })
  }

  render() {
    let albums = this.props.albums;
    let leftClass = classNames(
      'fa',
      'fa-chevron-circle-left',
      this.state.index === 0 ? '' : 'active'
    )
    let rightClass = classNames(
      'fa',
      'fa-chevron-circle-right',
      'margin-l-auto',
      (this.state.index + this.state.display === albums.length) ? '' : 'active'
    )
    return (
      <div className='albums'>
        <Swipeable
          onSwipedRight={ ()=> { this.navigate('left') } }
          onSwipedLeft={ ()=> { this.navigate('right') } }
        >
          <AlbumList
            display={ this.state.display }
            index={ this.state.index }
            albums={ albums }
            artist_name={ this.props.artist_name }
          />
        </Swipeable>
        <div className='flex centered album-nav'>
          <i
            onClick={ ()=> { this.navigate('left') } }
            className={ leftClass }
          />
          <i
            onClick={ ()=> { this.navigate('right') } }
            className={ rightClass }
          />
        </div>
      </div>
    )
  }
}
Albums.defaultProps = {
  albums: [],
  artist_name: ''
}
Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  artist_name: PropTypes.string.isRequired
}

export default Albums;
