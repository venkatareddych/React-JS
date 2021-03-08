import React from 'react';
import axios from 'axios';

export default class GetAPI extends React.Component {

  state = {}

  getData = () => {

    //1) Api Call through axios
    //API, AXIOS
    //API == https://jsonplaceholder.typicode.com/todos/1


    axios.post('https://api.mocki.io/v1/13f44462')
    
      .then((response) => {
        // handle success
        this.setState({
          data : response.data
        })
      })

      .catch((error) => {
        // handle error
        console.log(error);
      })

    //2) State
    //3) Display
  };

  render() {

    return (
      <div>
          Get API
       {
            this.state.data && 
          <div>
            <p>Title : {this.state.data.title}</p>
            <p>Description : {this.state.data.description}</p>
          </div>
        }
        <button onClick={this.getData}>Click Me</button>
      </div>
    )
  }
}