import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Movies from './Movie/Movies';

function App() {
  let hello = <h1>Hello venkat @ React</h1>;
  let hello2 = React.createElement('h1',null,'Hello everyone welcome to React');
  return (
    <div className="App">
      <header className="App-header">React JS</header>
        {hello2}
        <Button title="Click Here" />
        <Button title="Click Me" />
        <Button title="Click On Me" />
        <Button2/>
         <p>lorem ipsum dolor sit amet, consectet</p>
        
         <Movies/>
    </div>
  );
}

export default App;
