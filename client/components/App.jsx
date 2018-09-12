import React from 'react'
import {HashRouter as Switch, Route} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Review from './Review'
import Leaflet from './Leaflet'
import Search from './Search'
import Star from './Star'
import HomeScreen from './HomeScreen'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <div>
            <Route path='/' component={HomeScreen} />
            <Route exact path='/' component={Home} />
            <Route path='/courses' component={Leaflet} />
            <Route path='/courses' component={Search} />
            <Route path='/profile' component={Review} />
            <Route path='/profile' component={Profile} />
            <Route path='/profile' component={Star} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
