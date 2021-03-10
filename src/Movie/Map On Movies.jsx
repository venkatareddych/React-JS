 import React from 'react';
 import Movie from './Movie';
 import './style.css';
 import  Data from './Movies data';

 export default class MapOnMovies extends React.Component {
     state = {...Data};

     getMovie = movie => {
        return <Movie name={movie.name} likes={movie.likes} comments={movie.comments} banner={movie.banner} />;
     }
    render() {

        return (      
        <div className="movie-section">
           {
               Object.keys(this.state).map(x => {
                  return this.getMovie(this.state[x]);
               })
           }
        </div>
        )
    }
}

/*
example on maps
   maps works only on arrays

   x = [10,20,30,40]
    (4) [10, 20, 30, 40]
    x.map(x => x+10)
    (4) [20, 30, 40, 50]
    x.map(x => x*10)
    (4) [100, 200, 300, 400]
    x.map(x => x-10)
    (4) [0, 10, 20, 30] this is for arrays data 

      lets see when we have object how map works on objects

       obj = { 'a' : 10 , 'b' : 20 }
        {a: 10, b: 20}
      Object.keys(obj).map(x => obj[x] + 10)
        (2) [20, 30]
 */