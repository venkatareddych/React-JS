import React from 'react';

export default class Calculator extends React.Component {
    state = {
        a : 10,
        b : 20,
        c : 300,
        d : 500
    };
  
    setA = e => {
         this.setState({
          a: parseInt(e.target.value)
       });
    };

    setB = e => {
         this.setState({
          b: parseInt(e.target.value)
       });
    };

    div = this.state.c / this.state.d

    render() {
        return (
            <div>

                {'The Result is : ' +(this.state.a + this.state.b * this.state.c / this.state.d)} 
                <br />
                {'Div is : ' +(this.div)}
                <br/>
                {'Value of A :' +(this.state.a)},{'Value of B :' +(this.state.b)}
                <br/>

                <input onChange = {this.setA} />
                  <br/>
                <input onChange = {this.setB} />
                <br/>
             </div>
        )
    }
}