import React from 'react'

import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

class GamesList extends React.Component {
  constructor(props) {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(link) {
    window.open(link, '_blank');
  }

  render() {
    let games = _.sortBy(this.props.games, 'name');
    return (
      <ul className='flex start c4'>
        {
          _.map(games, (game)=> {
            let gameClass = classNames(
              'game',
              (this.props.platform && this.props.platform === game.platform.type) ? 'active' : '',
              (this.props.platform && this.props.platform !== game.platform.type) ? 'inactive' : '',
            )
            return (
              <li key={ game.name } className={ gameClass }>
                <img
                  src={ `${process.env.PUBLIC_URL}/images/games/covers/${game.cover}` }
                  alt={ `${game.name} cover` }
                />
                <h2>{ game.name }</h2>
                <div className='stats'>
                  <p className='flex centered'>
                    <span>Released:</span>
                    <span className='margin-l-auto'><strong>{ game.released.length > 4 ? moment(game.released).format('MMM DD, YYYY') : game.released }</strong></span>
                  </p>
                  <p className='flex centered'>
                    <span>Platform:</span>
                    <span className='margin-l-auto'><strong>{ game.platform.name }</strong></span>
                  </p>
                </div>
                <div className='buy-block' onClick={ ((this.props.platform && this.props.platform === game.platform.type) || !this.props.platform) ? ()=> { this.navigate(game.link) } : null }>
                  <h3>Buy It</h3>
                  <i className='fa fa-shopping-cart' />
                  <p>A new tab will open</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default GamesList;
