import React from 'react'
import { NavLink } from 'react-router-dom'

import _ from 'lodash'
import moment from 'moment'

class MovieList extends React.Component {
  render() {
    let data = this.props.data;
    let films = _.sortBy(data.data, this.props.sort)
    return (
      <ul className='flex start c6'>
        {
          _.map(films, (film)=> {
            return (
              <li key={ film.name } className='movie'>
                <NavLink to={ `/movies/${film.slug}` }>
                  <img
                    src={ `${process.env.PUBLIC_URL + `/images/movies/posters/${film.cover}`}` }
                    alt={ film.name }
                  />
                </NavLink>
                <h2>{ film.name }</h2>
                <div className='stats'>
                  <p className='flex centered'>
                    <span><i className='fa fa-fw fa-calendar-o' />:</span>
                    <span className='margin-l-auto'><strong>{ moment(film.released).format('MMM DD, YYYY') }</strong></span>
                  </p>
                  <p className='flex centered'>
                    <span><i className='fa fa-fw fa-clock-o' />:</span>
                    <span className='margin-l-auto'><strong>{ film.runtime } min</strong></span>
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default MovieList;
