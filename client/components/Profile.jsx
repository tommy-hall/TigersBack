import React from 'react'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      comments: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit (e) {
    this.setState({
      search: e.target.value})
  }

  handleClick (e) {
    this.setState({
      comments: [...this.state.comments, this.state.search],
      search: ''
    })
  }

  render () {
    return (
      <div className='name'>
        <div className='row'>
          <div className='col-md-9'> </div>
          <input value={this.state.search} onChange ={this.handleSubmit}/>
          <button onClick={this.handleClick}>Submit</button>
          <h1>{this.state.comments.map(comment =>
            comment)}
          </h1>
        </div>
      </div>
    )
  }
}

export default Profile
