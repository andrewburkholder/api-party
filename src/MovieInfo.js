import React, { Component } from 'react'
import Movies from './Movies';

class MovieInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: {}
    }

    this.fetchMovieData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.movieName !== this.props.match.params.movieName) {
      this.fetchMovieData()
    }
  }

  fetchMovieData = () => {
    const { movieName } = this.props.match.params
    fetch(`http://www.omdbapi.com/?apikey=600d4129&t=${movieName}&plot=long`)
      .then(response => response.json())
      .then(movie => this.setState({ movie }))
  }

  render() {
    return (
      <div className="movie">
          <div>
          <h2>{this.state.movie.Title}</h2>
          <p>Year released: {this.state.movie.Year}</p>
          <p>Plot: {this.state.movie.Plot}</p>
          <a href={this.state.movie.Website}>Website</a>
          </div>
        <img
          src={ this.state.movie.Poster }
          alt={this.state.movie.Title}
        />
      </div>
    )
  }
}

export default MovieInfo