import React from 'react';
import './Room.css';
import Sensor from '../Sensor/Sensor';
// import Control from '../Control/Control';

const Room = (props) => {
  return (
    <div className="room" id={props.data.room}>
      <h2>{props.data.room}</h2>
      <Sensor datetime={props.data.datetime}
              humidity={props.data.humidity}
              temperature={props.data.temperature}
              voltage={props.data.voltage}
      />
    </div>
  )

   
}

export default Room;
