import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <h1>Horse</h1>
        <img src='/images/home.png' className='home' />
        <Link to={'/Courses'} className='button'><button>Top 20</button></Link>
        <Link to={'/Courses'} className='button'><button>Hidden Gems</button></Link>
      </div>
    )
  }
}

export default Home
