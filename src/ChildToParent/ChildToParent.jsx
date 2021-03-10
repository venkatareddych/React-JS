import React from 'react';

export default class ChildToParent extends React.Component {
    state = {

    }
        
    getData = (name,age,height) => {          // this is callback here
        this.setState({
            name: name,
            age: age,
            height: height
        })
        }

    render() {
        return (
            <div>
                <h1>Name :{this.state.name}</h1>
                <h1>Age :{this.state.age}</h1>
                <h1>Height :{this.state.height}</h1>
                <Child getData = {this.getData} />
            </div>
        )
    }
}

// here we are passing the data from child to parent

class Child extends React.Component {
    state = {
        name : 'John',
        age : 22,
        height : 5.11   
    }

    onClickListener = () => {
        this.props.getData(this.state.name,this.state.age,this.state.height)
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickListener} > Send Data</button>
            </div>
        )
    }
}