import React, { Component } from 'react';
import './Room.css';
import Sensor from '../Sensor/Sensor';
import Control from '../Control/Control';



class Room extends Component {

  render(props) {
    const graphImage = require(`./img/${this.props.graphImage}`)
    return (
      <div className="Room" onClick={this.props.onClick}>
        <h2>{this.props.name}</h2>
        <img src={graphImage} 
             style={{width: 50, height: 50}} 
             alt={this.props.name}/>
        <Sensor temperature={this.props.temperature}
                humidity={this.props.humidity}
                voltage={this.props.voltage}
                time={this.props.time} />
        <Control />
      </div>
    );
  }
}

export default Room;




