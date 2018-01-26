import React from 'react'

import _ from 'lodash'
import classNames from 'classnames'

import Albums from './albums'
import CircleProfile from './circleprofile'

class ArtistBlock extends React.Component {
  render() {
    let artistClass = classNames(
      'artist',
      this.props.active ? 'active' : '',
      this.props.inactive ? 'inactive' : ''
    )
    let artist = this.props.artist;
    return (
      <li className={ artistClass }>
        <CircleProfile
          click={ ()=> { this.props.setArtist(artist.name) } }
          image={ `/images/music/${_.toLower(_.replace(artist.name, ' ', ''))}/${artist.cover}` }
        />
        <h2>{ artist.name }</h2>
        <div className='stats'>
          <p className='flex centered'><span>Formed:</span><span className='margin-l-auto'><strong>{ artist.formed }</strong></span></p>
          <p className='flex centered'><span>Albums:</span><span className='margin-l-auto'><strong>{ artist.albums.length }</strong></span></p>
        </div>
        { this.props.active &&
          <Albums
            clearArtist={ this.props.clearArtist }
            artist_name={ artist.name }
            albums={ artist.albums }
          />
        }
      </li>
    )
  }
}

export default ArtistBlock;
