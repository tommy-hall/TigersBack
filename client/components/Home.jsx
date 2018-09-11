import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <h1>TigersBack</h1>
        <img src='/images/home.png' className='home' />
        <div className='circle'>
          <Link to={'/Courses'} className='button'><button>Top 20</button></Link>
          <Link to={'/Courses'} className='button'><button>Hidden Gems</button></Link>
        </div>
      </div>
    )
  }
}

export default Home
