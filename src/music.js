import React from 'react'

import qs from 'query-string'
import _ from 'lodash'

import Artists from './components/artists'
import Article from './components/article'
import SortFilter from './components/sortfilter'

const OPTIONS = [
  { value: 'name', name: 'Name (A-Z)' },
  { value: 'formed', name: 'Year Formed' },
  { value: 'albums', name: 'Albums' }
]

class Music extends React.Component {
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
    } else {
      this.setState({
        sort: 'name'
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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  setQuery(query) {
    if (query === 'name') {
      this.props.history.push('/music');
    } else {
      this.props.history.push(`/music?sort=${query}`);
    }
  }

  render() {
    let data = require('./music.json');
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
          <Artists
            sort={ this.state.sort }
            artists={ data.data }
          />
        </div>
      </div>
    )
  }
}

export default Music;
