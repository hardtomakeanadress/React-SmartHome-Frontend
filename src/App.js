import React, { Component } from 'react';
import './App.css';
import Room from './components/Room/Room';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {rooms:
      [
        {room:"kitchen",id:1,sensors:{temperature:0,humidity:0,voltage:0,date:"N/A"}},
        {room:"balcony",id:2,sensors:{temperature:0,humidity:0,voltage:0,date:"N/A"}},
        {room:"bedroom",id:3,sensors:{temperature:0,humidity:0,voltage:0,date:"N/A"}},
        {room:"office",id:4,sensors:{temperature:0,humidity:0,voltage:0,date:"N/A"}},
        {room:"bathroom",id:5,sensors:{temperature:0,humidity:0,voltage:0,date:"N/A"}}
      ]
    };
    this.url = "http://localhost:3003/";
  }

  //update room sensor Data
  updateSensor(data) {
    console.log('loading');
    const newState = this.state.rooms.map((room) => {
      const singleRoom = room;
      singleRoom.sensors.temperature += 10;
      return singleRoom;
    });
    this.setState(newState);
  }

  //get a single room details
  getRoomDetails(roomName) {
    console.log('Details for this room: ', roomName);
    const url = `${this.url}?name=${roomName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.updateSensor(data));
  }

  //handle clicks
  onClickHandler = (event) => {
    this.getRoomDetails(event.currentTarget.id);
  }

  render() {
    return (
      <div className = "container">
        {this.state.rooms.map( (data) => {
          return (
            <Room name={data.room}
                  id  ={data.room}
                  key ={data.id}
                  image = {data.room}
                  sensorsData={data.sensors}
                  onClick={this.onClickHandler}/>
          )
        })}
      </div>
    )
  }
}

export default App;
