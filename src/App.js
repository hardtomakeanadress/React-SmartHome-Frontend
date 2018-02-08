import React, { Component } from 'react';
import './App.css';
import Room from './components/Room/Room'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    fetch('/rooms')
      .then(res => res.json())
      .then(rooms => this.setState({rooms}))
      .catch(reason => {console.log(reason)})
  }

  getRoom() {
    // fetch a single room
    // fetch('/room')  
  }

  render() {
    return (
      <div className="container">
        {this.state.rooms.map((data) => {
          return (
            <Room name       = {data.name}
                  key        = {data.id}
                  id         = {data.id}
                  sensors    = {data.sensors} 
                  graphImage = {data.graphImage} />
          );
        })}
      </div>
    );
  }
}

export default App;
