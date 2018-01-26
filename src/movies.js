import React from 'react'

import qs from 'query-string'
import _ from 'lodash'

import Article from './components/article'
import MovieList from './components/movielist'
import SortFilter from './components/sortfilter'

const OPTIONS = [
  { value: 'name', name: 'Name (A-Z)' },
  { value: 'released', name: 'Release Date' },
  { value: 'runtime', name: 'Runtime' }
]

class Movies extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sort: 'name'
    }
    this.setQuery = this.setQuery.bind(this);
  }

  componentWillMount() {
    let params = qs.parse(this.props.location.search);
    if (!_.isEmpty(params)) {
      this.setState({
        sort: params.sort
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      let params = qs.parse(nextProps.location.search);
      this.setState({
        sort: params.sort
      })
    }
  }

  setQuery(query) {
    if (query === 'name') {
      this.props.history.push('/movies');
    } else {
      this.props.history.push(`/movies?sort=${query}`);
    }
  }

  render() {
    let data = require('./movies.json');
    return (
      <div className='main-content'>
        <div className='container'>
          <Article
            title={ data.title }
            body={ data.body }
          />
          <SortFilter
            options={ OPTIONS }
            query={ qs.parse(this.props.location.search) }
            title='Sort By'
            selected={ this.state.sort }
            setQuery={ this.setQuery }
          />
          <MovieList
            sort={ this.state.sort }
            data={ data }
          />
        </div>
      </div>
    )
  }
}

export default Movies;
