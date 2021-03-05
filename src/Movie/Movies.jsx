 import React from 'react';
 import './style.css';

 export default class Movies extends React.Component {
    render() {
        return (
            <div className="movie-card">
            <img src="https://st1.bollywoodlife.com/wp-content/uploads/2020/06/5ed51007-f37f-4d78-8d5f-192f28a5ff98.jpg"></img>      
            <label>
                Mission impossible,Tom Cruise,
                The Action Hero
            </label>
        </div>
        )
    }
}