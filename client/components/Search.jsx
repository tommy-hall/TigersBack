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

        <div className='thumbnail'>
          <div className='row'>
            <div className='col-md-0'> </div>
            <Link to={'/Profile'} className='thumbnail1' ></Link>
            <p>1st Cape Kidnappers</p>

            <div className="w-100"></div>

            <div className='thumbnail'>
              <div className='row'>
                <div className='col-md-0'> </div>
                <Link to={'/Profile'} className='thumbnail1' ></Link>
                <p>2nd Kauri Cliffs</p>

                <div className="w-100"></div>

                <div className='thumbnail'>
                  <div className='row'>
                    <div className='col-md-0'> </div>
                    <Link to={'/Profile'} className='thumbnail1' ></Link>
                    <p>3rd Jacks Point</p>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Search
