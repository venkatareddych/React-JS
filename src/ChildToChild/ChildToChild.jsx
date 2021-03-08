import React from 'react';

export default class ChildToChild extends React.Component {
    
    state = {}

    getData = (name,age,height) => {
        this.setState({
            name: name,
            age: age,
            height: height
        })

    }
    render() {
        return (
            <div>
                <Child1 getData = {this.getData} />
                    <br/>
                <Child2 name = {this.state.name} age = {this.state.age} height = {this.state.height}/>
            </div>
        )
    }
}

class Child1 extends React.Component {
    state = {
        name : 'Venkat',
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

class Child2 extends React.Component {
    render() {
        return (
            <div>
               <h1>Name : {this.props.name}</h1>
               <h1>Age :{this.props.age}</h1>
               <h1>Height :{this.props.height}</h1>
            </div>
        )
    }
}