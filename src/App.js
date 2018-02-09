import React, { Component } from 'react';
import './App.css';
import Room from './components/Room/Room'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms: [
        "kitchen",
        "bedroom",
        "office",
        "bathroom",
        "balcony"
    ]
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  getSensors(param) {
    fetch(`/?name=${param}`)
      .then(response => response.json())
      .then( data => console.log(data))
      .catch(reason => {console.log(reason)})
  }

  componentDidMount() {
    // get all the rooms
    //setState
  }

  onClickHandler = () => {
    console.log(this.getSensors('balcony'));
  }

  render() {
    return (
      <div className="container">
        <Room name       = {this.state.rooms[2]}
              graphImage = {`${this.state.rooms[2]}.png`}
              onClick    ={this.onClickHandler}
        />
      </div>
    );
  }
}

export default App;
