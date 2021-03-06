import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesState from './Movie/Movies with State';





function App() {
  let hello = <h1>Hello venkat @ React</h1>;
  let hello2 = React.createElement('h1',null,'Hello everyone welcome to React');
  return (
    <div className="App">
      <header className="App-header">React JS</header>
        {hello2}

       <MoviesState/>
    </div>
  );
}

export default App;
