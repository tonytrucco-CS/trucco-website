import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import Games from './games'
import Music from './music'
import Movies from './movies'
import MovieDetails from './moviedetails'

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/music' component={ Music } />
        <Route exact path='/movies' component={ Movies } />
        <Route path='/movies/:slug' component={ MovieDetails } />
        <Route exact path='/games' component={ Games } />
      </Switch>
    )
  }
}

export default Main;
