import React from 'react'

import qs from 'query-string'
import _ from 'lodash'

import Article from './components/article'
import GamesFilter from './components/gamesfilter'
import GamesList from './components/gameslist'

class Games extends React.Component {
  constructor(props) {
    super();
    this.state = {
      platform: ''
    }
    this.setQuery = this.setQuery.bind(this);
  }

  componentWillMount() {
    let params = qs.parse(this.props.location.search);
    if (!_.isEmpty(params)) {
      this.setState({
        platform: params.platform
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      let params = qs.parse(nextProps.location.search);
      this.setState({
        platform: params.platform
      })
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  setQuery(query) {
    if (query === 'all') {
      this.props.history.push('/games')
    } else {
      this.props.history.push(`/games?platform=${query}`)
    }
  }

  render() {
    let data = require('./games.json');
    return (
      <div className='main-content'>
        <div className='container'>
          <Article
            title={ data.title }
            body={ data.body }
          />
          <GamesFilter
            query={ qs.parse(this.props.location.search) }
            platform={ this.state.platform }
            setQuery={ this.setQuery }
          />
          <GamesList
            platform={ this.state.platform }
            games={ data.data }
          />
        </div>
      </div>
    )
  }
}

export default Games;
