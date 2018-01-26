import React from 'react'

import _ from 'lodash'

class AlbumList extends React.Component {
  render() {
    let albums = _.slice(this.props.albums, this.props.index, (this.props.index+this.props.display));
    return (
      <ul className='flex start album-ul'>
        {
          _.map(albums, (album)=> {
            return (
              <li key={ album.title } className='album'>
                <img
                  alt='album art'
                  className='album-image'
                  src={ process.env.PUBLIC_URL + `/images/music/${_.toLower(_.replace(this.props.artist_name, ' ', ''))}/${album.cover}` }
                />
                <h3>{ album.title }</h3>
                <p className='flex centered'>
                  <strong>{ album.released }</strong>
                </p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default AlbumList;
