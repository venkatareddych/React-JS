import React from 'react';

export default class EvenOrOdd extends React.Component {
    state = {
        no : undefined,
        show : false
    }
 onNumberChange = (event) => {
    this.setState({ 
        no: event.target.value
     });
 }

    evenOrOdd = () => {
        if(this.state.no === undefined) {
            return "Please Enter a valid Number";
        }
        if(this.state.no % 2 === 0) {
            return "Even Number";
        }
        else{
            return "Odd Number";
        }
    }

    showOutput = () => {
        this.setState({
            show: true
        });
    }

    hideOutput = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                <h1>Enter A Number</h1>
                <input type="number" onChange={this.onNumberChange} onBlur={this.showOutput} onFocus={this.hideOutput} />
                {this.state.show && <p>{this.evenOrOdd()}</p>}
            </div>
        )
    }
}