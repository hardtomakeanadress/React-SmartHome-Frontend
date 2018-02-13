import React, { Component } from 'react';
import './Room.css';
import Sensor from '../Sensor/Sensor';
import Control from '../Control/Control';

class Room extends Component {

  render(props) {
    const image = require(`./img/${this.props.image}.png`)
    return(
      <div className="room" id={this.props.id} onClick={this.props.onClick}>
          <h2>{this.props.name}</h2>
          <img src={image}
               style={{width: 50, height: 50}}
               alt={this.props.name} />
          <Sensor sensorsData={this.props.sensorsData} />
          <Control />
      </div>
    )
  }
}

export default Room;
