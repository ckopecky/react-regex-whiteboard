import React from 'react';
import './App.css';
import { movies } from './data.json'; 

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    }
  }

  async componentDidMount() {
    let movies = await this.movies;
    this.setState({movies: movies});
    const moviesWithDate = this.state.movies.map(movie => {
      const newDate = this.getReviewDate(movie.release_date);
      movie.release_date = newDate;
      return movie;
    })
    
    //this.setState({movies: moviesWithDate})
    
    
  }


  get movies() {
    return movies[0].results;
  }

  getReviewDate = string => {
 //write a function that will get the release date and reformat it to Month, Day, Year format (i.e. 05-20-2019);

 
  };

 



render() {
  return (
    <>
    <div className="App" style={{width: "50%", margin: "0 auto"}}>
    <h1>Popular Movies and Release Dates</h1>
      {this.state.movies.map(movie => {
        return (
          <div style={{display: "flex", justifyContent: "space-between"}}>
            {movie.title}<span>{movie.release_date}</span>
          </div>
        )
      })}
    </div>
    </>
  )};
}

export default Movies;
