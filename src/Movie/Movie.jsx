import React from 'react';
import './style.css';

/*
export default function Movie(props) {     //props used to store the data
    return (
        <div className="movie-card">
            <img src={props.banner}></img>      
            <label>
                {props.title},{props.likes}, {props.comments}, {props.hero}
            </label>
        </div>
    )
}
*/

//creating same function Component in to class component

//we should include this.props in class component

 export default class Movie extends React.Component {
    render() {
        return (
        <div className="movie-card">
            <img src={this.props.banner}></img>      
            <label>
                {this.props.name},{this.props.likes}, {this.props.comments} 
            </label>
        </div>
    )
    }
}
