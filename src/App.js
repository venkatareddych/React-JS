import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch} from "react-router-dom";
import { Links } from './Links';
import { MyRouter } from './MyRouter';


function App() {
  return (
    <div className="App">
      <header className="App-header">React JS</header>
        <h1>Hello Welcome to React</h1>

        <Router>
              <Links/>
              <br/>
            <MyRouter/>
        </Router>
    </div>
  );
}

export default App;
