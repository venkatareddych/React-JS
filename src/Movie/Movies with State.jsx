import React from 'react';
 import Movie from './Movie';
 import './style.css';
 import  Data from './Movies data';

 export default class MoviesState extends React.Component {
     state = {...Data};

     getMovie = movie => {
        return <Movie name={movie.name} likes={movie.likes} comments={movie.comments} banner={movie.banner} />;
     }
    render() {                                                   
        return (
            
        <div className="movie-section">
            
            {this.getMovie(this.state.MissionImpossible)}
            {this.getMovie(this.state.F9)}
            {this.getMovie(this.state.Unforgettable)}
        </div>
        )
    }
}