import React from 'react';
import './style.css';


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



