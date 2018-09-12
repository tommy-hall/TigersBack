import React from 'react'
import {Link} from 'react-router-dom'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        <input className ='horse' placeholder='Golf Course...' />
        <button>Find</button>
        <div>
          <select>
            <option value="Top 20">Top 20</option>
            <option value="Hidden Gems">Hidden Gems</option>
            <option value="All">All</option>
          </select>
          <select>
            <option value="Expert Opinion">Expert Opinion</option>
            <option value="Public Opinion">Public Opinion</option>
          </select>
        </div>

        <p> Cape Kidnappers </p>
        <p>1st</p>

        <Link to={'/Profile'} className='banana' ></Link>

      </div>

    )
  }
}

export default Search
