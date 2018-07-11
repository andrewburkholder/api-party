import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MovieInfo from './MovieInfo'

class Movies extends Component {
    state = {
      movieName: '',
    }
  
    handleChange = ev => {
      this.setState({ movieName: ev.target.value })
    }
  
    handleSubmit = ev => {
      ev.preventDefault()
      this.props.history.push(`/movies/${this.state.movieName}`)
    }
  
    render() {
      return (
        <div className="Movies">
          {/* <img
            src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
            alt="GitHub"
            className="logo"
          /> */}
  
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                required
                autoFocus
                type="text"
                value={this.state.movieName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">
                Look up movie
              </button>
            </div>
          </form>
  
          <Route
            path="/movies/:movieName"
            component={MovieInfo}
          />
        </div>
      )
    }
  }
  
  export default Movies