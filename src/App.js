import React, { Component } from 'react';
import './App.css';
import Room from './components/Room/Room';

class App extends Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {rooms:[]};
    this.url = "http://192.168.0.120:3003/";
  }

  componentDidMount(){
    fetch(this.url)
      .then(response => response.json())
      .then(responseJSON => this.setState({rooms:responseJSON}, this.stateIsChanged));
  }

  stateIsChanged(){
    console.log('State is changed!');
  }

  // handle clicks
  onClickHandler = (event) => {
    console.log('clicked');
    fetch(this.url)
      .then(response => response.json())
      .then(responseJSON => this.setState({rooms:responseJSON}, this.stateIsChanged));
  }

  render() {
    return (
      <div className = "container">
        {this.state.rooms.map( (each) => {
          return (
            <Room data={each}
                  key={each.room}
                  onClick={this.onClickHandler}
            />
          )
        })}
      </div>
    )
  }
}

export default App;
