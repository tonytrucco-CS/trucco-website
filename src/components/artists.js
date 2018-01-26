import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import ArtistBlock from './artistblock'

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {}
    }
    this.setArtist = this.setArtist.bind(this);
    this.clearArtist = this.clearArtist.bind(this);
  }

  setArtist(name) {
    if (name !== this.state.artist.name) {
      let art = _.find(this.props.artists, (artist)=> {
        return artist.name === name;
      })
      this.setState({
        artist: art
      })
    } else {
      this.setState({
        artist: {}
      })
    }
  }

  clearArtist() {
    this.setState({
      artist: {}
    })
  }

  render() {
    let artists = _.sortBy(this.props.artists, this.props.sort);
    return (
      <ul className='flex start c4'>
        {
          _.map(artists, (artist)=> {
            return (
              <ArtistBlock
                key={ artist.name }
                artist={ artist }
                active={ this.state.artist.name === artist.name }
                clearArtist={ this.clearArtist }
                inactive={ !_.isEmpty(this.state.artist) && this.state.artist.name !== artist.name }
                setArtist={ this.setArtist }
              />
            )
          })
        }
      </ul>
    )
  }
}
Artists.defaultProps = {
  sort: 'name',
  artists: []
}
Artists.propTypes = {
  sort: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired
}

export default Artists;
