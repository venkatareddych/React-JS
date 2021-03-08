import React from 'react';

export default class ParentToChild extends React.Component {
    state = {
        age : 20,
        name :'Venkat'
    }
    render() {
        return(
            <div>
                <SubChild age={this.state.age} name={this.state.name} />
            </div>
        )
    }
}

 //when we want to deliver data from parent to child

class Child extends React.Component {
    render() {
        return(
            <div>
                <h1> Name : {this.props.name} </h1> 
                <h1> Age : {this.props.age} </h1>
            </div>                                        
        )
    }
}

class SubChild extends React.Component {
    render() {
        return(
            <div>
                <h1>Name : {this.props.name} </h1>
                 <h1>Age : {this.props.age} </h1>
            </div>                                        
        )
    }
}