import React, { Component } from 'react';
import './Room.css';
// import Sensor from '../Sensor/Sensor';
// import Control from '../Control/Control';

class Room extends Component {

  render(props) {
    console.log(props);
    return (<div />);
    // const image = require(`./img/${room}.png`)
    // return(
    //   <div className="room" id={room}>
    //       <h2>{room}</h2>
    //       <img src={image}
    //            style={{width: 50, height: 50}}
    //            alt={room} />
    //       <Sensor datetime={datetime}
    //               temperature = {temperature}
    //               humidity = {humidity}
    //               voltage = {voltage}
    //       />
    //       <Control />
    //   </div>
    // )
  }
}
// Room.defaultProps = {};

export default Room;
