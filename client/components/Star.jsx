import React from 'react'
import ReactDOM from 'react-dom'
import StarRatingComponent from 'react-star-rating-component'

class Star extends React.Component {
  constructor () {
    super()

    this.state = {
      rating: 3
    }
  }

  onStarClick (nextValue, prevValue, name) {
    this.setState({rating: nextValue})
  }

  render () {
    const {rating} = this.state

    return (
      <div className='star'>
        <div className='row'>
          <div className='col-md-9'> </div>
          <h2>{rating}</h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Star
