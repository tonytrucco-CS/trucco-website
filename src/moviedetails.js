import React from 'react'

import _ from 'lodash'
import moment from 'moment'
import platform from 'platform'

import Article from './components/article'
import CircleProfile from './components/circleprofile'
import BackLink from './components/backlink'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    let data = require('./movies.json');
    let film = _.find(data.data, (film)=> {
      return film.slug === this.props.match.params.slug
    })
    this.state = {
      film: film
    }
  }

  componentDidMount() {
    let screens = this.state.film.screens;
    if (platform.name !== 'Microsoft Edge' && platform.name !== 'IE') {
      document.getElementById('image-bg').style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/movies/screens/${_.sample(screens)})`;
    }
  }

  render() {
    let film = this.state.film;
    return (
      <div className='main-content'>
        <div id='image-bg'></div>
        <div className='container'>
          <BackLink
            history={ this.props.history }
          />
          <Article
            title={ film.name }
            body={ film.synopsis }
            open={ true }
            source={ { title: 'Wikipedia', link: film.link } }
          />
          <h2>Details</h2>
          <div className='flex start'>
            <div
              className='inline-image'
              style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/movies/posters/${film.cover}')` }}
              alt={ film.name }
            >
            </div>
            <div>
              <h3>Released</h3>
              <p>{ moment(film.released).format('MMMM DD, YYYY') }</p>
              <h3>Director</h3>
              <p><a href={ film.director.link } target='_blank'>{ film.director.name }</a></p>
              <h3>Runtime</h3>
              <p>{ film.runtime } minutes ({ parseFloat(film.runtime/60).toFixed(1) } hours)</p>
            </div>
          </div>
          <h2>Cast</h2>
          <ul className='flex start c4 actors'>
            {
              _.map(film.actors, (actor)=> {
                return (
                  <li key={ actor.name } className='actor'>
                    <CircleProfile
                      url={ actor.link }
                      image={ `/images/movies/actors/${actor.profile}` }
                    />
                    <h3>{ actor.name }</h3>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieDetails;
