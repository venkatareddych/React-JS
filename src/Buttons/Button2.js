import React from 'react';

/*
export default class Button2 extends React.Component { 
    render() {                                           // to display output
        return (
            <button>Submit from Class</button>
        )
    }
}
*/

export default class Button2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Submit Again'
        }
    }
    componentDidMount() {
        this.setState({title:"Updated"});
    }
    render() {
        return (
             <button>{this.state.title}</button>
        )
    }
}