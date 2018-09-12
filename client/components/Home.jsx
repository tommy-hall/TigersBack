import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <h1>TigersBack</h1>
        <img src='/images/home.png' className='home' />
        <div className='circle'>
          <Link to={'/Courses'} className='homebutton'><Button color="info" size="lg">Top 20</Button></Link>
          <Link to={'/Courses'} className='homebutton'><Button color="info" size="lg">Hidden Gems</Button></Link>
        </div>
      </div>
    )
  }
}

export default Home
