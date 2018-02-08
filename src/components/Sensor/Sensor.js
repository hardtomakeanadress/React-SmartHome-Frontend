import React from 'react';
import './Sensor.css';

const Sensor = (props) => {
    return (
        <div className='Sensor'>
            <div className="container">
              <h5>Sensors:</h5>
              <div> Temperature: {props.temperature}</div>
              <div>Humidity: {props.humidity}</div>
            </div>
        </div>
    )
}

export default Sensor;
