import React from 'react'
import {HashRouter as Switch, Route} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Map1 from './Map1'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/courses' component={Map1} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
