 import React from 'react';
 import Movie from './Movie';
 import './style.css';

 export default class Movies extends React.Component {
     getMovie = (name,likes,comments,banner) => {
        return <Movie name={name} likes={likes} comments={comments} banner={banner} />;
     }
    render() {                                   //here render is a default method                
        return (
            
        <div className="movie-section">
            
        {this.getMovie(
            'Mission Impossible',
            "500k",
            "Superb",
            "https://st1.bollywoodlife.com/wp-content/uploads/2020/06/5ed51007-f37f-4d78-8d5f-192f28a5ff98.jpg"
        )}

            <Movie 
            title="Fate & Furious" 
            likes="1M  " 
            comments="Action" 
            banner="https://upload.wikimedia.org/wikipedia/en/0/04/The_Fate_of_the_Furious_Original_Motion_Picture_Score_cover.jpg"
            />

            {this.getMovie(
            "Unforgettable" ,
            "1M " ,
            "Thriller", 
            "https://m.media-amazon.com/images/M/MV5BMTYwMzU5NDM5Ml5BMl5BanBnXkFtZTcwMjkyOTYzNg@@._V1_.jpg"
            )} 

        </div>
        )
    }
}